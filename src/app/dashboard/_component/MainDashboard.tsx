"use server";
import { saveUser } from "@/app/actions/aftersignUp";
import { auth, currentUser } from "@clerk/nextjs/server";

import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import StatsSection from "./StatsSection";

export default async function MainDashboard() {
    const { userId } = await auth();
    const user = await currentUser();
    const firstName = (user?.firstName) ? ((user?.firstName).split(" ")[0]) : "";
    const lastName = (user?.firstName) ? ((user?.firstName).split(" ")[1]) : "";
      if( userId && user ){
     await saveUser({
         id:user.id, 
         email:user.primaryEmailAddress?.emailAddress || "",
         firstName:firstName || "",
         lastName:lastName || "",
     });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <HeroSection/>
      <FeaturesGrid/>
      <StatsSection/>
      <Footer/>
    </div>
   

  );
}

      // <h1> 
      //   <SignedIn>
      //       {user?.firstName}
      //      <SignOutButton/> 
      //   </SignedIn>
      //   <SignedOut>
      //      <SignInButton mode="modal"/> 
      //   </SignedOut>     
      // </h1>