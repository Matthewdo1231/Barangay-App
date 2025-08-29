import Footer from "../dashboard/_component/Footer";

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
