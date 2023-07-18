export const metadata = {
  title: "About - Campus Sutras",
  description:
    "Discover the driving force behind Campus Sutras, your one-stop destination for professional growth. Explore how we provide comprehensive training programs, tailor-made IT courses, and soft skills development.",
};

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
