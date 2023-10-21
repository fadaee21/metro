import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.has("login_token");
  const pathName = req.nextUrl.pathname;
  if (!token && pathName.startsWith("/controlling")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!token && pathName.startsWith("/photographer")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/controlling/:path*", "/photographer/:path*"],
};
