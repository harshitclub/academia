import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./style.css";

function CourseOverview({
  paragraph,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  benefits,
}: {
  paragraph: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  benefits: string[];
}) {
  return (
    <section className="courseOverview width95 maxWidth">
      <div className="cOverviewBody">
        {/* <h2>Overview</h2> */}
        <p>{paragraph}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
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
