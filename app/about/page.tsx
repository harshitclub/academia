import React from "react";
import "./style.css";
import aboutHeroImage from "../../public/assets/aboutHeroImage.jpg";
import aboutImage2 from "../../public/assets/aboutImage2.jpg";
import Image from "next/image";
import BigDivider from "@/components/BigDivider/BigDivider";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import BreadCrumps from "@/components/BreadCrumps/BreadCrumps";

function page() {
  return (
    <>
      <section className="aboutHero flex alignCenter justifyCenter flexColumn width100">
        <div className="aboutHeroContainer flex alignCenter justifyCenter width95 maxWidth">
          <div className="aboutHeroLeft">
            <BreadCrumps pageLink="/about" pageName="About" />
            <h1>About Campus Sutras</h1>
            <BigDivider />
            <p>
              Welcome to Campus Sutras, your gateway to professional success! At
              Campus Sutras, we understand that in today's dynamic and
              ever-evolving world, acquiring the right skills and knowledge is
              crucial for unlocking endless opportunities. That's why we are
              here to empower individuals from all walks of life with
              comprehensive training programs designed to meet the demands of
              the modern workforce.
            </p>
            <p>
              With a focus on IT courses, soft skills development, and much
              more, Corp Siksha is your one-stop destination for honing your
              talents and enhancing your professional growth.
            </p>
            <p>
              Whether you're a student eager to kickstart your career, an
              aspiring professional looking to upskill, or an organization
              seeking to empower your workforce, we have tailored courses that
              cater to your unique needs and aspirations.
            </p>
          </div>
          <div className="aboutHeroRight flex alignCenter justifyCenter">
            <Image src={aboutHeroImage} alt="" />
          </div>
        </div>
      </section>
      <section className="aboutContent flex alignCenter justifyCenter flexColumn width100">
        <div className="aboutCContainer flex alignCenter justifyCenter width95 maxWidth">
          <div className="aboutCCLeft flex alignCenter justifyCenter">
            <Image src={aboutImage2} alt="" />
          </div>
          <div className="aboutCCRight">
            <p>
              Our IT courses cover a wide spectrum of cutting-edge technologies,
              equipping you with the expertise to thrive in the digital age.
              From programming languages and software development to data
              science, artificial intelligence, cybersecurity, and cloud
              computing, our expert instructors provide hands-on training that
              bridges the gap between theory and practical application.
            </p>
            <p>
              But at Campus Sutras, we recognize that technical prowess alone is
              not enough to succeed. That's why we also offer an array of soft
              skills courses that enhance your interpersonal communication,
              leadership abilities, teamwork, problem-solving skills, and much
              more.
            </p>
            <p>
              Our comprehensive approach ensures that you not only excel in your
              technical domain but also stand out as a well-rounded professional
              capable of navigating today's complex business landscape.
            </p>
            <p>
              What sets us apart is our unwavering commitment to excellence in
              education. We boast a team of industry-leading instructors who
              bring their real-world experience and expertise into the
              classroom, ensuring that you receive the highest quality training.
            </p>
            <p>
              Our state-of-the-art facilities, equipped with the latest
              technologies, create an immersive learning environment where you
              can unleash your full potential.
            </p>
          </div>
        </div>
      </section>
      <WhyChoose />
      <CoursesSection heading="Explore Our Courses" />
    </>
  );
}

export default page;
