import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, createSessionToken, getSessionInfo } from "@/lib/auth/session";
import { acceptInviteAsExistingUser, acceptInviteAsNewUser } from "@/lib/db/invites";

export async function POST(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  const { token } = await context.params;
  const formData = await request.formData();
  const mode = String(formData.get("mode") ?? "");
  const inviteUrl = new URL(`/invite/${token}`, request.url);

  if (mode === "new") {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const displayName = String(formData.get("displayName") ?? "").trim();

    if (!email || !email.includes("@") || password.length < 6 || !displayName) {
      inviteUrl.searchParams.set("error", "invalid");
      return NextResponse.redirect(inviteUrl, { status: 303 });
    }

    try {
      const user = await acceptInviteAsNewUser(token, email, password, displayName);
      const { value, maxAge } = await createSessionToken(user.role, user.id);
      const response = NextResponse.redirect(new URL("/felugyelet", request.url), { status: 303 });
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
      inviteUrl.searchParams.set("error", isDuplicate ? "exists" : "invalid");
      return NextResponse.redirect(inviteUrl, { status: 303 });
    }
  }

  if (mode === "existing") {
    const session = await getSessionInfo(request.cookies.get(COOKIE_NAME)?.value);
    if (!session) {
      return NextResponse.redirect(inviteUrl, { status: 303 });
    }
    try {
      await acceptInviteAsExistingUser(token, session.userId, session.role);
      return NextResponse.redirect(new URL("/felugyelet", request.url), { status: 303 });
    } catch {
      inviteUrl.searchParams.set("error", "mismatch");
      return NextResponse.redirect(inviteUrl, { status: 303 });
    }
  }

  return NextResponse.redirect(inviteUrl, { status: 303 });
}
