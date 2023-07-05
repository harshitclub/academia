export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="profile">{children}</main>;
}
