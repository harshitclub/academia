import React from "react";
import "./style.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import campusSutrasLogo from "@/public/assets/campusSutrasLogo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex alignCenter justifyCenter flexColumn">
      <div className="footer width95 maxWidth flexColumn">
        <div className="footerTabs flex alignStart justifyCenter spaceBtw">
          <div className="footerTab">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;Pages</h4>
            <ul>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Home
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Courses
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> About
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;Courses</h4>
            <ul>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Data Analytics Using
                  PowerBI
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Data Analytics Using
                  Excel
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Business
                  Communication
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> MS Office
                  Fundamentals
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Campus To Corporate
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Behavioral Skills
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Tableau
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;Social</h4>
            <ul>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;Legal</h4>
            <ul>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Privacy & Policy
                </a>
              </li>
              <li>
                <a href="/">
                  <RiArrowRightUpLine className="fIcons" /> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <div className="footerLogo">
              <Image src={campusSutrasLogo} alt="Campus Sutras Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright width95 maxWidth">
        <p>© Copyright 2023 | Campus Sutras India Pvt. Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
