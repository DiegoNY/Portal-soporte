import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { SECRET_KEY } from "./config/config";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");
  if (cookie) {
    try {
      const { payload } = await jwtVerify(
        cookie.value,
        new TextEncoder().encode(SECRET_KEY)
      );
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/home/:path*",
};
