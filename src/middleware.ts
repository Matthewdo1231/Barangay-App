import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isUserRoute = createRouteMatcher(["/request(.*)","/notifications(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin", "/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn, sessionClaims } = await auth();
  const attemptedUrl = req.nextUrl.pathname + req.nextUrl.search;

  const dashboardUrl = req.nextUrl.clone();
  dashboardUrl.pathname = "/dashboard";

  // If not logged in and trying to access admin or user routes   save attempted route & redirect to login
  if (!userId && (isAdminRoute(req) || isUserRoute(req))) {
    return redirectToSignIn({ returnBackUrl: attemptedUrl });
  }

  // If logged in but not admin reroute to dashboard
  if (userId && isAdminRoute(req) && sessionClaims?.metadata?.role !== 'admin') {
    return NextResponse.redirect(dashboardUrl);
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
