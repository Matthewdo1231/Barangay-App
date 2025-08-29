import Footer from "../dashboard/_component/Footer";
import Header from "../dashboard/_component/Header";

export default function JobPostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Header/>
       <main className="flex-grow">{children}</main>
     <Footer/>
 </div>
  )
}

     