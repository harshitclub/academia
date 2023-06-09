export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="about flex alignCenter justifyCenter flexColumn width100">
      {children}
    </main>
  );
}
