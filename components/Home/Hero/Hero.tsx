import React from 'react'
import './style.css'
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm'

function Hero() {
  return (
    <section className="hero flex width100 alignCenter justifyCenter">
        <div className="heroContainer width95 maxWidth">
          <div className="heroContainerChild flex alignCenter justifyCenter spaceBtw">
        <div className="heroCCLeft width50">
          <div className="heroContent">
          <h1>Welcome to 3a Academia</h1>
          
          <h2>Unlocking the Potential Within</h2>
          <div className="heroDivider"></div>
          <div className="heroDivider2"></div>
          <h3>Insightize | SkillSync | ProficiencyPlus</h3>
          <div className="heroDivider"></div>
          <div className="heroDivider2"></div>
          <div className="heroBtns flex">
            <div className="heroBtn">
              <a href="/">Explore Courses</a>
            </div>
            <div className="heroBtn">
              <a href="/">About Us</a>
            </div>
          </div>
          </div>
        </div>
        <div className="heroCCRight width50 flex alignCenter justifyCenter flexColumn">
          <div className="heroForm">
            <h2>Have Any Query?</h2>
            <EnquiryForm/>
          </div>
        </div>
          </div>
        </div>
    </section>
  )
}

export default Hero