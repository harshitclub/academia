export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="signup flex alignCenter justifyCenter flexColumn">
      {children}
    </main>
  );
}
