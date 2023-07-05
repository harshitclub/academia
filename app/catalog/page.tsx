import React from "react";
import "./style.css";
import { dataAnalysisCourses, ai, itSkills, business } from "./coursesData";
import BigDivider from "@/components/BigDivider/BigDivider";
import Image from "next/image";

function page() {
  return (
    <>
      <section className="catalogCourses width95">
        <h2>Data Analysis Courses</h2>
        <BigDivider />
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {dataAnalysisCourses.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>{course.courseName}</h4>
                    <p>{course.courseDuration}</p>
                    <p>{course.time}</p>
                    <p className="marginBottom1">{course.mode}</p>
                    <p>
                      <a href={course.link}>Get Details</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="catalogCourses width95">
        <h2>Artificial Intelligence</h2>
        <BigDivider />
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {ai.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>{course.courseName}</h4>
                    <p>{course.courseDuration}</p>
                    <p>{course.time}</p>
                    <p className="marginBottom1">{course.mode}</p>
                    <p>
                      <a href={course.link}>Get Details</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="catalogCourses width95">
        <h2>IT Skills</h2>
        <BigDivider />
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {itSkills.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>{course.courseName}</h4>
                    <p>{course.courseDuration}</p>
                    <p>{course.time}</p>
                    <p className="marginBottom1">{course.mode}</p>
                    <p>
                      <a href={course.link}>Get Details</a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="catalogCourses width95">
        <h2>Business</h2>
        <BigDivider />
        <div className="catalogCoursesContainer flex alignStart justifyStart">
          {business.map((course) => {
            return (
              <>
                <div className="catalogCourseTab" key={course.id}>
                  <Image src={course.image} alt="course Image" />
                  <div className="courseContent">
                    <h4>{course.courseName}</h4>
                    <p>{course.courseDuration}</p>
                    <p>{course.time}</p>
                    <p className="marginBottom1">{course.mode}</p>
                    <p>
                      <a href={course.link}>Get Details</a>
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
