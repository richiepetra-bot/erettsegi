import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, getSessionInfo } from "@/lib/auth/session";

const PUBLIC_PATH_PREFIXES = [
  "/login",
  "/register",
  "/api/auth/login",
  "/api/auth/register",
  "/invite/",
  "/api/invite/",
];
const PUBLIC_EXACT_PATHS = ["/login", "/register"];

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_EXACT_PATHS.includes(pathname)) return true;
  return PUBLIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const session = await getSessionInfo(token);

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const isSupervisorPath = pathname === "/felugyelet" || pathname.startsWith("/felugyelet/");
  const isInviteManagementPath = pathname === "/meghivok" || pathname.startsWith("/meghivok/");

  const isSupervisor = session.role === "parent" || session.role === "tanar";

  // Szülő/tanár csak a felügyeleti nézetét érheti el.
  if (isSupervisor && !isSupervisorPath && pathname !== "/api/auth/logout") {
    return NextResponse.redirect(new URL("/felugyelet", request.url));
  }

  // Diák nem érheti el a felügyeleti (szülői/tanári) nézetet.
  if (session.role === "student" && isSupervisorPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // A meghívó-kezelés (link generálás) csak diáknak való.
  if (session.role !== "student" && isInviteManagementPath) {
    return NextResponse.redirect(new URL("/felugyelet", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
