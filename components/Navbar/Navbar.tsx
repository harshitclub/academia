"use client";

import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import {
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiPhoneFill,
} from "react-icons/ri";

function Navbar() {
  const [navHover, setNavHover] = useState(false);

  const clickNavHover = () => {
    if (navHover) {
      setNavHover(false);
    } else {
      setNavHover(true);
    }
  };

  return (
    <header>
      <nav className="flex alignCenter justifyCenter width100">
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo">
            <h1 className="font300">Corporate Siksha</h1>
          </div>
          <div className="menu flex alignCenter justifyCenter">
            <ul className="flex alignCenter justifyCenter">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="coursesMenu" onClick={clickNavHover}>
                Courses <RiArrowDownSLine className="navRIconMain" />
                <ul className={`subMenu ${navHover ? "showSubMenu" : ""}`}>
                  <li className="daMainMenu">
                    IT Skills <RiArrowDownSLine className="navRIcon" />
                    <ul className="daMenu">
                      <li>
                        <a href="/data-analytics-using-power-bi">
                          Data Analytics Using Power Bi
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/data-analytics-using-excel">
                          Data Analytics Using Excel
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/ms-office-fundamentals">
                          Ms Office Fundamentals
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Behavioral Science Skills{" "}
                    <RiArrowDownSLine className="navRIcon" />
                    <ul className="softMenu">
                      <li>
                        <a href="/business-communication">
                          Business Communication
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/campus-to-corporate">
                          Campus To Corporate
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>

                      <li>
                        <a href="/behavioral-skills">
                          Behavioral Skills
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li className="navCall">
                <a href="/">
                  <RiPhoneFill className="navCallIcon" /> Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
