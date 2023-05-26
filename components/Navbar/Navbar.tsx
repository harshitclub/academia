import React from 'react'
import './style.css'

function Navbar() {
  return (
    <header>
      <nav className='flex alignCenter justifyCenter width100'>
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo">
            <h1 className='font300'>3a Academia</h1>
          </div>
          <div className="menu">
            <ul className='flex alignCenter justifyCenter'>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar