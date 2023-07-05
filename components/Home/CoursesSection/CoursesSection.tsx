import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import { courses } from "./coursesData";
import Image from "next/image";
import { RiCalendarLine, RiPencilLine, RiTimeLine } from "react-icons/ri";

function CoursesSection({ heading }: { heading: string }) {
  return (
    <section className="courseSection flex alignCenter justifyCenter width100">
      <div className="courseSContainer flex alignStart justifyStart width95 maxWidth flexColumn">
        <h2>{heading}</h2>
        <div className="courseSDivider"></div>
        <div className="courseSDivider2"></div>
        <h3>Unlock Your Potential with Knowledge & Skills</h3>
        <div className="coursesTab flex alignCenter justifyStart width100 spaceBtw">
          {courses.map((item) => {
            return (
              <>
                <div className="courseTBox" key={item.id}>
                  <div className="courseSBoxImg">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="coursesTBoxC">
                    <h4>{item.course}</h4>
                    <p>
                      <RiCalendarLine className="courseSIcon" /> |{" "}
                      {item.duration}
                    </p>
                    <p>
                      <RiTimeLine className="courseSIcon" /> | {item.time}
                    </p>
                    <p className="marginBottom1">
                      <RiPencilLine className="courseSIcon" /> | {item.mode}
                    </p>
                    <p>
                      <a href={item.link}>Book Now</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <p>
          <a href="/catalog">All Courses</a>
        </p>
      </div>
    </section>
  );
}

export default CoursesSection;
