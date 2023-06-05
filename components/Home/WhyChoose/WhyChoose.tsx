import React from 'react'
import './style.css'
import { HiChevronDoubleDown } from 'react-icons/hi'
import BigDivider from '@/components/BigDivider/BigDivider'
import { RiParentFill, RiSlideshowFill, RiStackFill } from 'react-icons/ri'

function WhyChoose() {
  return (
    <section className="WhyChoose flex width100 alignStart justifyCenter">
        <div className="WhyChooseContainer width95 maxWidth">
            <h2>Why Choose Us</h2>
            <BigDivider/>
            <p className='marginBottom2'>At Corporate Siksha, we are dedicated to empowering students of all backgrounds to thrive academically and personally. Our comprehensive training programs cater to universities, colleges, schools, and individual students, offering a wide range of courses designed to enhance knowledge, skills, and personal development.</p>
            <div className="whyChooseTab flex alignStart justifyCenter spaceBtw width100">
              <div className="whyChooseTBox">
                <RiParentFill className='whyIcons'/>
                <h4>Expert Faculty <HiChevronDoubleDown className='whyChooseIcons'/></h4>
                <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
                <p>Our courses are crafted and delivered by a team of experienced instructors who are passionate about education. They bring a wealth of knowledge and practical insights to guide you through your learning journey.</p>
              </div>
              <div className="whyChooseTBox">
                <RiSlideshowFill className='whyIcons'/>
              <h4>Tailored Learning Just for You <HiChevronDoubleDown className='whyChooseIcons'/></h4>
              <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
                <p>We customize education to your unique needs. Our courses create dynamic and engaging learning environments, where you can actively participate, ask questions, and receive personalized attention from our expert tutors.</p>
              </div>
              <div className="whyChooseTBox">
                <RiStackFill className='whyIcons'/>
              <h4>Practical Application <HiChevronDoubleDown className='whyChooseIcons'/></h4>
              <div className="whyChooseBoxDivider"></div>
              <div className="whyChooseBoxDivider2"></div>
                <p>At 3a Academia, we prioritize practical knowledge application. Our courses feature hands-on projects, case studies, and industry examples, empowering you with valuable skills and insights for immediate real-world impact.</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose