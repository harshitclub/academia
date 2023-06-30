import React from "react";
import "./style.css";
import { RiCheckboxCircleFill } from "react-icons/ri";

function CourseFor({
  paragraph,
  whoList,
}: {
  paragraph: string;
  whoList: string[];
}) {
  return (
    <section className="courseFor width95 maxWidth">
      <h2>Who Should Enroll This Course</h2>
      <p className="marginBottom1">{paragraph}</p>
      <ul>
        {whoList.map((item) => {
          return (
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CourseFor;
