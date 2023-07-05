export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="catalog flex alignCenter justifyCenter flexColumn width100">
      {children}
    </main>
  );
}
