import Hero from "@/components/Home/Hero/Hero";
import "./globals.css";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";

import OurVision from "@/components/Home/OurVision/OurVision";
import FaqSection from "@/components/Home/FaqSection/FaqSection";
import Immersive from "@/components/Home/Immersive/Immersive";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";

import VerifyVoucher from "@/components/Home/VerifyVoucher/VerifyVoucher";
import SignupSection from "@/components/Home/SignupSection/SignupSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SignupSection />
      <CoursesSection heading="Competency Areas" />
      <VerifyVoucher />
      <WhyChoose />
      <Immersive />
      <OurVision />
      <FaqSection />
    </main>
  );
}
