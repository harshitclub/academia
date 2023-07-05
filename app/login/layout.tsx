export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="login flex alignCenter justifyCenter flexColumn">
      {children}
    </main>
  );
}
