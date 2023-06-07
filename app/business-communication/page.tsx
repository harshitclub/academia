import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import bComm from "../../public/assets/bcSkills.jpg";

function page() {
  return (
    <main className="ctoc flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/business-communication"
        bCrump="Business Communication"
        h1="Business Communication"
        h2="Become an Expert With This Business Communication Course"
        p1="Data analytics using Power BI refers to the process of analyzing and visualizing data using Microsoft Power BI, a powerful business intelligence and data visualization tool. Power BI allows you to connect to various data sources, transform and clean the data, create data models, and generate interactive reports and dashboards."
        p2="Power BI can connect to a wide range of data sources such as databases, Excel files, online services, and cloud-based platforms. You can import or establish live connections to retrieve data from these sources."
        image={bComm}
      />
    </main>
  );
}

export default page;
