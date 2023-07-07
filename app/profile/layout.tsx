export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="profile flex alignCenter justifyCenter width100 flexColumn">
      {children}
    </main>
  );
}
