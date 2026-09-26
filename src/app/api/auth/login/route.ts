import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, createSessionToken } from "@/lib/auth/session";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const pin = String(formData.get("pin") ?? "");
  const next = String(formData.get("next") ?? "/");

  const expectedPin = process.env.APP_PIN;
  if (!expectedPin) {
    return NextResponse.json(
      { error: "Az APP_PIN kornyezeti valtozo nincs beallitva a szerveren." },
      { status: 500 }
    );
  }

  if (pin !== expectedPin) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const { value, maxAge } = await createSessionToken();
  const response = NextResponse.redirect(new URL(next || "/", request.url), { status: 303 });
  response.cookies.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return response;
}
