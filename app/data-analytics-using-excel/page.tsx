import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import excel from "../../public/assets/dae.jpg";

function page() {
  return (
    <main className="daExcel flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/data-analytics-using-excel"
        bCrump="Data Analytics Using Excel"
        h1="Data Analytics Using Excel"
        h2="Become an Expert With This Data Analytics Using Excel Course"
        p1="Data analytics using Excel refers to the process of analyzing and interpreting data using Microsoft Excel, a popular spreadsheet software. Excel provides a range of features and functions that enable users to perform various data analysis tasks, such as data cleaning, manipulation, visualization, and statistical analysis."
        p2="Excel is a widely used spreadsheet software developed by Microsoft. It is part of the Microsoft Office suite of productivity tools. Excel provides a grid-based interface that consists of rows and columns, allowing users to organize and analyze data efficiently. "
        image={excel}
      />
    </main>
  );
}

export default page;
