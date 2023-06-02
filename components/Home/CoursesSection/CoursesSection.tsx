"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import './style.css'
import {courses} from './coursesData'
import Image from 'next/image'
import { RiCalendarLine, RiPencilLine, RiTimeLine } from 'react-icons/ri'




function CoursesSection() {
  
  return (
    <section className='courseSection flex alignCenter justifyCenter width100'>
        <div className="courseSContainer flex alignStart justifyStart width95 maxWidth flexColumn">
          <h2>Explore Our Courses</h2>
          <div className="courseSDivider"></div>
          <div className="courseSDivider2"></div>
          <h3>Unlock Your Potential with Knowledge & Skills</h3>
            <div className="coursesTab flex alignCenter justifyStart width100 spaceBtw">
            <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    {courses.map((item)=>{
      return <>
      <SwiperSlide>
      <div className="courseTBox" key={item.id}>
                  <div className="courseSBoxImg">
                  <Image src={item.image} alt=""/>
                  </div>
                  <div className="coursesTBoxC">
                <h4>{item.course}</h4>
                <p><RiCalendarLine className='courseSIcon'/> | {item.duration}</p>
                <p ><RiTimeLine className='courseSIcon'/> | {item.time}</p>
                <p className='marginBottom1'><RiPencilLine className='courseSIcon'/> | {item.mode}</p>
                <p><a href={item.link}>Book Now</a></p>
                </div>
              </div>
              </SwiperSlide>
      </>
    })}  
    </Swiper>      
            </div>
        </div>
    </section>
  )
}

export default CoursesSection