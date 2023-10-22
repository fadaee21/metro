import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const cookieToken = req.cookies.get("login_token");
  const login_token_env = process.env.TOKEN;
  const isTokenValid = login_token_env === cookieToken?.value;
  const pathName = req.nextUrl.pathname;
  console.log({pathName})
  console.log({isTokenValid})
  console.log({login_token_env})
  console.log({cookieToken})
  if (!isTokenValid && pathName.startsWith("/controlling")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!isTokenValid && pathName.startsWith("/photographer")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/controlling/:path*", "/photographer/:path*"],
};
