import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./style.css";

function CourseOverview({
  paragraph,
  benefits,
}: {
  paragraph: string;
  benefits: string[];
}) {
  return (
    <section className="courseOverview width95 maxWidth">
      <div className="cOverviewBody">
        <h2>Overview</h2>
        <p>{paragraph}</p>
        <h3>Benefits of Doing This Course</h3>
        <ul>
          {benefits.map((item) => {
            return (
              <>
                <li>
                  <RiCheckboxCircleFill className="icoMargin18" /> {item}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default CourseOverview;
