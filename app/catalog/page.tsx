import React from "react";
import "./style.css";
import { dataAnalysisCourses } from "./coursesData";
import BigDivider from "@/components/BigDivider/BigDivider";
import Image from "next/image";
import { FcBookmark, FcCalendar, FcOk } from "react-icons/fc";

const courseTab1 = dataAnalysisCourses.slice(0, 4);
const courseTab2 = dataAnalysisCourses.slice(4, 8);
const courseTab3 = dataAnalysisCourses.slice(8, 11);

function page() {
  return (
    <>
      <section className="catalogCourses width95">
        <h2>Foundational Programs</h2>
        <BigDivider />
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {courseTab1.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>
                      <FcBookmark className="margin-2" />
                      {course.courseName}
                    </h4>
                    <p>
                      <FcCalendar className="margin-2" />{" "}
                      {course.courseDuration}
                    </p>

                    <p className="marginBottom1">
                      <FcOk className="margin-2" /> {course.mode}
                    </p>
                    <p>
                      <a href={course.link}>Syllabus</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {courseTab2.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>
                      <FcBookmark className="margin-2" />
                      {course.courseName}
                    </h4>
                    <p>
                      <FcCalendar className="margin-2" />{" "}
                      {course.courseDuration}
                    </p>

                    <p className="marginBottom1">
                      <FcOk className="margin-2" /> {course.mode}
                    </p>
                    <p>
                      <a href={course.link}>Syllabus</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {courseTab3.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>
                      <FcBookmark className="margin-2" />
                      {course.courseName}
                    </h4>
                    <p>
                      <FcCalendar className="margin-2" />{" "}
                      {course.courseDuration}
                    </p>

                    <p className="marginBottom1">
                      <FcOk className="margin-2" /> {course.mode}
                    </p>
                    <p>
                      <a href={course.link}>Syllabus</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default page;
