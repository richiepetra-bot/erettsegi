import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, getSessionInfo } from "@/lib/auth/session";

const PUBLIC_PATHS = ["/login", "/api/auth/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((path) => pathname === path) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const session = await getSessionInfo(token);

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const isParentPath = pathname === "/parent" || pathname.startsWith("/parent/");

  // A szülői nézet csak olvasható és el van zárva a diák felülettől.
  if (session.role === "parent" && !isParentPath && pathname !== "/api/auth/logout") {
    return NextResponse.redirect(new URL("/parent", request.url));
  }

  // A diák nem érheti el a szülői PIN-hoz kötött nézetet.
  if (session.role === "student" && isParentPath) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
