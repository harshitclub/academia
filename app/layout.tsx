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
  title: "",
  description: "",
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
