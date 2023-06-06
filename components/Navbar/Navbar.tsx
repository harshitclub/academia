"use client"

import React, {useState, useRef, useEffect} from 'react'
import './style.css'
import {RiArrowDownSLine, RiArrowRightUpLine, RiPhoneFill} from 'react-icons/ri'

function Navbar() {
  const [navHover, setNavHover] = useState(false)

  const clickNavHover = () => {
    if(navHover){
      setNavHover(false)
    }else{
      setNavHover(true)
    }
  }


  return (
    <header >
      <nav className='flex alignCenter justifyCenter width100'>
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo">
            <h1 className='font300'>Corporate Siksha</h1>
          </div>
          <div className="menu flex alignCenter justifyCenter">
            <ul className='flex alignCenter justifyCenter'>
              <li><a href="/">Home</a></li>
              <li className='coursesMenu' onClick={clickNavHover}>Courses <RiArrowDownSLine className='navRIconMain'/>
              <ul className={`subMenu ${navHover? "showSubMenu" : ""}`}>
                <li className='daMainMenu'>Data Analytics <RiArrowDownSLine className='navRIcon'/>
                  <ul className='daMenu'>
                    <li><a href="/">Data Analytics Using Power Bi<RiArrowRightUpLine className='subMenuIcons'/></a></li>
                    <li><a href="/">Data Analytics Using Excel<RiArrowRightUpLine className='subMenuIcons'/></a></li>
                  </ul>
                </li>
                <li>Soft Skills <RiArrowDownSLine className='navRIcon'/>
                <ul className='softMenu'>
                    <li><a href="/">Business Communication<RiArrowRightUpLine className='subMenuIcons'/></a></li>
                    <li><a href="/">Behavioral Skills<RiArrowRightUpLine className='subMenuIcons'/></a></li>
                  </ul>
                </li>
                <li>Microsoft <RiArrowDownSLine className='navRIcon'/>
                <ul className='msMenu'>
                    <li><a href="/">Ms Office Fundamentals<RiArrowRightUpLine className='subMenuIcons'/></a></li>
                  </ul>
                </li>
              </ul>
              </li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li  className='navCall'><a href="/"><RiPhoneFill className='navCallIcon'/> Call Now</a></li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar