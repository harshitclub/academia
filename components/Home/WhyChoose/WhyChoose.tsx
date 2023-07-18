import React from "react";
import "./style.css";
import { HiChevronDoubleDown } from "react-icons/hi";
import BigDivider from "@/components/BigDivider/BigDivider";
import Image from "next/image";
import whyImage1 from "@/public/assets/whyImage1.jpg";
import whyImage2 from "@/public/assets/whyImage2.jpg";
import whyImage3 from "@/public/assets/whyImage3.jpg";

function WhyChoose() {
  return (
    <section className="WhyChoose flex width100 alignStart justifyCenter">
      <div className="WhyChooseContainer width95 maxWidth">
        <h2>Why Choose Us</h2>
        <BigDivider />
        <p className="marginBottom2">
          At Campus Sutras, we are dedicated to empowering students of all
          backgrounds to thrive academically and personally. Our comprehensive
          training programs cater to universities, colleges, schools, and
          individual students, offering a wide range of courses designed to
          enhance knowledge, skills, and personal development.
        </p>
        <div className="whyChooseTab flex alignStart justifyCenter spaceBtw width100">
          <div className="whyChooseTBox">
            <Image src={whyImage1} alt="" />
            <div className="whyChooseTBoxContent">
              <h4>
                Outcome Centric Learning{" "}
                <HiChevronDoubleDown className="whyChooseIcons" />
              </h4>
              <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
              <p>
                At Campus Sutras, we believe in the power of outcome-centric
                learning and growth. Gone are the days of rote memorization and
                generic education. In today's fast-paced world, it's essential
                and crucial to focus on tangible outcomes that drive success.
              </p>
            </div>
          </div>
          <div className="whyChooseTBox">
            <Image src={whyImage2} alt="" />
            <div className="whyChooseTBoxContent">
              <h4>
                Pre & Post Assessment{" "}
                <HiChevronDoubleDown className="whyChooseIcons" />
              </h4>
              <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
              <p>
                At Campus Sutras, we believe in the power of assessment to gauge
                your learning journey. That's why we incorporate pre and post
                assessments into our training programs, ensuring a comprehensive
                understanding of your progress and growth.
              </p>
            </div>
          </div>
          <div className="whyChooseTBox">
            <Image src={whyImage3} alt="" />
            <div className="whyChooseTBoxContent">
              <h4>
                Post Training Support{" "}
                <HiChevronDoubleDown className="whyChooseIcons" />
              </h4>
              <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
              <p>
                Our commitment to your professional development goes beyond the
                completion of a program. We know that ongoing support is crucial
                for continued growth and success. That's why we offer
                comprehensive post-training support to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
