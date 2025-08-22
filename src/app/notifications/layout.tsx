import Footer from "../dashboard/_component/Footer";
import Header from "../dashboard/_component/Header";

export default function NotificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}
