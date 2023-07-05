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
                <a href="/login">
                  <RiArrowRightUpLine className="fIcons" /> Login
                </a>
              </li>
              <li>
                <a href="/signup">
                  <RiArrowRightUpLine className="fIcons" /> Signup
                </a>
              </li>
              <li>
                <a href="/about">
                  <RiArrowRightUpLine className="fIcons" /> About
                </a>
              </li>
              <li>
                <a href="/contact">
                  <RiArrowRightUpLine className="fIcons" /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;Courses</h4>
            <ul>
              <li>
                <a href="/data-analytics-using-power-bi">
                  <RiArrowRightUpLine className="fIcons" /> Data Analytics Using
                  PowerBI
                </a>
              </li>
              <li>
                <a href="/data-analytics-using-excel">
                  <RiArrowRightUpLine className="fIcons" /> Data Analytics Using
                  Excel
                </a>
              </li>
              <li>
                <a href="/business-communication">
                  <RiArrowRightUpLine className="fIcons" /> Business
                  Communication
                </a>
              </li>
              <li>
                <a href="/ms-office-fundamentals">
                  <RiArrowRightUpLine className="fIcons" /> MS Office
                  Fundamentals
                </a>
              </li>
              <li>
                <a href="/hello-corporate">
                  <RiArrowRightUpLine className="fIcons" /> Hello Corporate
                </a>
              </li>
              <li>
                <a href="/artificial-intelligence">
                  <RiArrowRightUpLine className="fIcons" /> Artificial
                  Intelligence
                </a>
              </li>
              <li>
                <a href="/art-of-entrepreneurship">
                  <RiArrowRightUpLine className="fIcons" /> Art of
                  Entrepreneurship
                </a>
              </li>
              <li>
                <a href="/catalog">
                  <RiArrowRightUpLine className="fIcons" /> All Courses
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
