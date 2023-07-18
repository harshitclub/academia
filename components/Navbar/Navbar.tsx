"use client";

import React, { useState, useContext } from "react";
import "./style.css";
import {
  RiMailLine,
  RiMenuLine,
  RiPhoneFill,
  RiUser3Fill,
} from "react-icons/ri";
import Image from "next/image";
import navLogo from "@/public/assets/campusSutrasLogo.png";
import { UserContext } from "@/context/Usercontext";
import axios from "axios";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [navHover, setNavHover] = useState(false);
  const clickNavHover = () => {
    if (navHover) {
      setNavHover(false);
    } else {
      setNavHover(true);
    }
  };
  const [vLoading, setVLoading] = React.useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  const sendVEmail = async () => {
    try {
      setVLoading(true);
      await axios.get("/api/send-verify-mail");
      setVLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <header>
      {user && user.isVerified === false ? (
        <div className="verifyTopBar width100 flex alignCenter justifyCenter">
          <div className="verifyTopBarContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
            <p>
              Your <RiMailLine className="margin-2" /> Email is not Verified |
              Verify Email to Get Rs.1000 Voucher
            </p>
            <button onClick={sendVEmail}>
              {vLoading ? "Sending..." : "Send Verify Mail"}
            </button>
          </div>
        </div>
      ) : null}

      <nav className="flex alignCenter justifyCenter width100">
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo flex alignCenter justifyCenter">
            <a href="/">
              <Image src={navLogo} alt="Campus Sutras Logo" />
            </a>
          </div>
          <div className="mMenuBtn">
            <RiMenuLine onClick={toggleMenu} />
          </div>
          <div
            className={`menu flex alignCenter justifyCenter ${
              showMenu ? "showNav" : ""
            }`}
          >
            <ul className="flex alignCenter justifyCenter">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mMenuBtn">
                <a href="/catalog">Courses</a>
              </li>
              {/* <li className="coursesMenu mDisplayNone" onClick={clickNavHover}>
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
              </li> */}

              <li>
                <RiUser3Fill className="margin-1 accIcon" />{" "}
                <a href="/profile">
                  {user ? `${user.fullName.split(" ")[0]}` : "Account"}
                </a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
