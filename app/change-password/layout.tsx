export default function changePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="changePassword flex alignCenter justifyCenter flexColumn">
      {children}
    </main>
  );
}
