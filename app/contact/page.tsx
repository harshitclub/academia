import React from "react";
import "./style.css";

import { RiLinksLine, RiMapPinRangeLine, RiPhoneLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import BigDivider from "@/components/BigDivider/BigDivider";
import BreadCrumps from "@/components/BreadCrumps/BreadCrumps";
import contactImage from "@/public/assets/contactImage.png";
import Image from "next/image";

function page() {
  return (
    <>
      <section className="contactContainer flex flexColumn alignCenter justifyCenter width100">
        <div className="contactData flex spaceBtw alignStart justifyCenter width95 maxWidth">
          <div className="contactCLeft width49">
            <BreadCrumps pageLink="/contact" pageName="Contact" />
            <h1>Contact Campus Sutras</h1>
            <BigDivider />
            <h2>Connecting Made Simple: Reach Out and Let's Connect!</h2>
            <p>
              <span>
                <RiLinksLine className="margin-2" />
                &nbsp;|&nbsp;
              </span>
              <a href="/">info@campussutras.com</a>
            </p>
            <p>
              <span>
                <RiPhoneLine className="margin-2" />
                &nbsp;|&nbsp;
              </span>
              <a href="/">+91 9818218573</a>
            </p>
            <p>
              <span>
                <HiOutlineLocationMarker className="margin-1" />
                &nbsp;|&nbsp;
              </span>
              Sector 62 | Noida 201309
            </p>
            <p className="directionBtn">
              <span>
                <RiMapPinRangeLine className="margin-1" />
                &nbsp;|&nbsp;
              </span>
              <a href="/">Get Direction</a>
            </p>
          </div>
          <div className="contactCRight width40">
            <Image src={contactImage} alt="" />
          </div>
        </div>
      </section>
      <CoursesSection heading="Our Courses" />
    </>
  );
}

export default page;
