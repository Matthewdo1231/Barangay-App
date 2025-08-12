import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


const isUserRoute = createRouteMatcher([""])
const isAdminRoute = createRouteMatcher(["/admin","/admin(.*)"]);

export default clerkMiddleware(async (auth,req) => {  
    
      const {userId , redirectToSignIn} = await auth();

  
      const url = req.nextUrl.clone();
       url.pathname = "/dashboard";

       if(!userId && isAdminRoute(req) || !userId && isUserRoute(req)){        //if not logged in an try to acces admin and user route
          return redirectToSignIn();
       }

       if(userId){
          if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== 'admin'){    //if logged in and user type is not "admin"
            return NextResponse.redirect(url);
          }
       }


    if(req.nextUrl.pathname === "/"){
      return NextResponse.redirect(url);
    }   

    return NextResponse.next();
})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}