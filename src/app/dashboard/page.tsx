import { SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { saveUser } from "../actions/aftersignUp";
import { auth, currentUser } from "@clerk/nextjs/server";


export default async function DashboardPage() {
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
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-700">
        Barangay Website
      </h1>
      <p className="mt-2 text-gray-600">
        Welcome to the official barangay information portal.
      </p>
      <h1>
      
        <SignedIn>
            {user?.firstName}
           <SignOutButton/> 
        </SignedIn>
        <SignedOut>
           <SignInButton mode="modal"/> 
        </SignedOut>
        
      </h1>
    </main>
  );
}
