export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
   head
        {children}
    body 
    </> 
  );
}
