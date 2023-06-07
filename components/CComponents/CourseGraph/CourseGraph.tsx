import React from "react";
import "./style.css";

function CourseGraph({
  heading,
  demand,
  avgPackage,
  highPackage,
}: {
  heading: string;
  demand: string;
  avgPackage: number;
  highPackage: number;
}) {
  return (
    <section className="courseGraph width95 maxWidth  ">
      <h2>{heading}</h2>
      <div className="courseGraphBlock flex alignCenter justifyCenter spaceBtw">
        <div className="courseDemand flex alignCenter justifyCenter flexColumn">
          <h3>Demand</h3>

          <h4>{demand}</h4>
        </div>
        <div className="courseAvgSalary flex alignCenter justifyCenter flexColumn">
          <h3>Average Package</h3>
          <h4>₹ {avgPackage} LPA</h4>
        </div>
        <div className="courseHighSalary flex alignCenter justifyCenter flexColumn">
          <h3>Highest Package</h3>
          <h4>₹ {highPackage} LPA</h4>
        </div>
      </div>
    </section>
  );
}

export default CourseGraph;
