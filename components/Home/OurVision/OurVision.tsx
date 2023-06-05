import React from 'react'
import './style.css'
import BigDivider from '@/components/BigDivider/BigDivider'
import Image from 'next/image'
import vision from '../../../public/assets/vision.jpg'
import { RiArrowRightDownLine } from 'react-icons/ri'

function OurVision() {
  return (
    <section className="OurVisionSection flex width100 alignStart justifyCenter">
        <div className="OurVisionSContainer width95 maxWidth">
          <h2>Our Vision</h2>
          <BigDivider/>
          <h3 className='marginBottom2'>Inspiring Lifelong Learning and Success</h3>
            <div className="ourVTab flex alignStart justifyCenter spaceBtw">
              <div className="ourVLeft width49">
                <h4>Lifelong Learning <RiArrowRightDownLine className='visionIcons'/></h4>
                <p>We envision a world where learning is a continuous journey, not confined to the walls of a classroom. We strive to instill a passion for lifelong learning, empowering individuals to embrace curiosity, expand their knowledge, and adapt to a rapidly changing world.</p>
                <BigDivider/>
                <h4>Innovative Education <RiArrowRightDownLine className='visionIcons'/></h4>
                <p>We embrace innovation and stay at the forefront of educational advancements. Our vision is to harness emerging technologies, pedagogical approaches, and best practices to deliver cutting-edge and transformative learning experiences. We aim to equip our learners with the skills and knowledge necessary to thrive in a rapidly evolving world.</p>
                <BigDivider/>
                <h4>Global Perspective <RiArrowRightDownLine className='visionIcons'/></h4>
                <p>Our vision extends beyond borders. We strive to cultivate a global perspective in our learners, fostering cross-cultural understanding, empathy, and collaboration. Through our programs, we encourage appreciation for diverse perspectives and prepare individuals to be global citizens who contribute positively to society.</p>
              </div>
              <div className="ourVRight width49 flex alignCenter justifyCenter">
                <Image src={vision} alt=""/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default OurVision