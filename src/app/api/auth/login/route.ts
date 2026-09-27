import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, createSessionToken } from "@/lib/auth/session";
import { verifyLogin } from "@/lib/db/users";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/");

  const user = email && password ? await verifyLogin(email, password) : null;

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const { value, maxAge } = await createSessionToken(user.role, user.id);
  const destination =
    user.role === "student"
      ? next || "/"
      : next.startsWith("/invite/")
        ? next
        : "/felugyelet";
  const response = NextResponse.redirect(new URL(destination, request.url), { status: 303 });
  response.cookies.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return response;
}
