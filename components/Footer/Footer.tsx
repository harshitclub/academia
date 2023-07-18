import React from "react";
import "./style.css";
import {
  RiArrowRightUpLine,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import campusSutrasLogo from "@/public/assets/csLogoWhite.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex alignCenter justifyCenter flexColumn">
      <div className="footer width95 maxWidth flexColumn">
        <div className="footerTabs flex alignStart justifyCenter spaceBtw">
          <div className="footerTab">
            <h4>Pages</h4>
            <ul>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/profile">Account</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>Courses</h4>
            <ul>
              <li>
                <a href="/data-analytics-using-power-bi">
                  Data Analytics Using PowerBI
                </a>
              </li>
              <li>
                <a href="/data-analytics-using-excel">
                  Data Analytics Using Excel
                </a>
              </li>
              <li>
                <a href="/business-communication">Business Communication</a>
              </li>
              <li>
                <a href="/ms-office-fundamentals">MS Office Fundamentals</a>
              </li>
              <li>
                <a href="/hello-corporate">Hello Corporate</a>
              </li>
              <li>
                <a href="/artificial-intelligence">Artificial Intelligence</a>
              </li>
              <li>
                <a href="/art-of-entrepreneurship">Art of Entrepreneurship</a>
              </li>
              <li>
                <a href="/catalog">All Courses</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>Social</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/campussutras/"
                >
                  <RiLinkedinBoxFill className="fIcons" /> LinkedIn
                </a>
              </li>
              <li>
                <a target="_blank" href="https://facebook.com/campussutras">
                  <RiFacebookBoxFill className="fIcons" /> Facebook
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/campussutras">
                  <RiTwitterFill className="fIcons" /> Twitter
                </a>
              </li>
              <li>
                <a target="_blank" href="https://instagram.com/campussutras">
                  <RiInstagramFill className="fIcons" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy-and-policy">Privacy & Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
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
