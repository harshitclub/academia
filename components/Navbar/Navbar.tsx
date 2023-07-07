"use client";

import React, { useState, useContext } from "react";
import "./style.css";
import {
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiPhoneFill,
} from "react-icons/ri";
import Image from "next/image";
import navLogo from "@/public/assets/campusSutrasLogo.png";
import { UserContext } from "@/context/Usercontext";
import axios from "axios";
import { useRouter } from "next/navigation";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [navHover, setNavHover] = useState(false);
  const router = useRouter();
  const clickNavHover = () => {
    if (navHover) {
      setNavHover(false);
    } else {
      setNavHover(true);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <header>
      <nav className="flex alignCenter justifyCenter width100">
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo flex alignCenter justifyCenter">
            <a href="/">
              <Image src={navLogo} alt="Campus Sutras Logo" />
            </a>
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
                    Data Analysis <RiArrowDownSLine className="navRIcon" />
                    <ul className="daMenu">
                      <li>
                        <a href="/data-analytics-using-power-bi">
                          Using Power Bi
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/data-analytics-using-excel">
                          Using Excel
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/data-analytics-using-power-query">
                          Using Power Query
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/tableau">
                          Tableau
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Artificial Intelligence{" "}
                    <RiArrowDownSLine className="navRIcon" />
                    <ul className="softMenu">
                      <li>
                        <a href="/artificial-intelligence">
                          Artificial Intelligence
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/gpt-v3-5-and-gpt-v4-0">
                          GPT V3.5 & GPT V4.0
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Business <RiArrowDownSLine className="navRIcon" />
                    <ul className="softMenu">
                      <li>
                        <a href="/art-of-entrepreneurship">
                          Art of Entrepreneurship
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/business-communication">
                          Business Communication
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    IT Skills <RiArrowDownSLine className="navRIcon" />
                    <ul className="softMenu">
                      <li>
                        <a href="/ms-office-fundamentals">
                          MS Office Fundamentals
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                      <li>
                        <a href="/cyber-security">
                          Cyber Security
                          <RiArrowRightUpLine className="subMenuIcons" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/profile">Account</a>
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
