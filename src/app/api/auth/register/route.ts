import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, createSessionToken } from "@/lib/auth/session";
import { createUser } from "@/lib/db/users";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const displayName = String(formData.get("displayName") ?? "").trim();

  if (!email || !email.includes("@") || password.length < 6 || !displayName) {
    const url = new URL("/register", request.url);
    url.searchParams.set("error", "invalid");
    return NextResponse.redirect(url, { status: 303 });
  }

  try {
    const user = await createUser(email, password, displayName, "student");
    const { value, maxAge } = await createSessionToken(user.role, user.id);
    const response = NextResponse.redirect(new URL("/", request.url), { status: 303 });
    response.cookies.set(COOKIE_NAME, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    const isDuplicate = message.includes("duplicate key") || message.includes("app_users_email_key");
    const url = new URL("/register", request.url);
    url.searchParams.set("error", isDuplicate ? "exists" : "invalid");
    return NextResponse.redirect(url, { status: 303 });
  }
}
