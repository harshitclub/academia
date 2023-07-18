import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Poppins } from "next/font/google";
import Scroll from "@/components/ScrollToTop/Scroll";
import { Userprovider } from "@/context/Usercontext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Campus Sutras - Your Gateway to Professional Success",
  description:
    "Join Campus Sutras and take charge of your career with comprehensive IT courses, soft skills development, and more. Empower yourself with outcome-centric learning, post-training support, etc,. Start your journey towards success today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="overlay">
        <Userprovider>
          <Navbar />
          <Scroll />
          {children}
          <Footer />
        </Userprovider>
      </body>
    </html>
  );
}
