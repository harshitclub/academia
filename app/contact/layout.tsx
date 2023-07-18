export const metadata = {
  title: "Contact - Campus Sutras",
  description:
    "Discover the driving force behind Campus Sutras, your one-stop destination for professional growth. Explore how we provide comprehensive training programs, tailor-made IT courses, and soft skills development. ",
};

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
