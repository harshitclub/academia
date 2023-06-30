export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="contact flex alignCenter justifyCenter flexColumn">
      {children}
    </main>
  );
}
