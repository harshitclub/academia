import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import excel from "@/public/assets/dae.jpg";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

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
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={excel}
      />
      <CourseOverview
        paragraph="Welcome to the fascinating world of data analytics using Excel! Get ready to uncover hidden insights, make informed decisions, and unleash the true power of data with our comprehensive course. Our Excel course is designed to equip you with the knowledge and techniques to harness the full potential of this powerful tool and become a proficient data analyst. Whether you're a business professional aiming to enhance your analytical abilities, a student preparing for a data-centric career, or an entrepreneur looking to gain a competitive edge, our course caters to all levels of expertise."
        benefits={[
          "Enhanced Data Analysis Skills",
          "Proficiency in Power BI Tools",
          "Improved Data Visualization",
          "Efficient Data Modeling",
          "Data-driven Decision Making",
          "Increased Career Opportunities",
          "Practical Hands-on Experience",
          "Industry-Relevant Insights",
          "Networking and Collaboration",
          "Recognized Certification",
        ]}
      />
      <CourseGraph
        heading="Data Analyst"
        demand="High"
        avgPackage={6}
        highPackage={12}
      />
      <CourseFor
        paragraph="The Data Analytics Using Excel course is beneficial for a wide range of professionals and individuals who want to enhance their data analytics skills and leverage the power of Excel. The course is particularly suitable for:"
        whoList={[
          "Students",
          "Aspiring Professionals",
          "Business Analysts",
          "Data Professionals",
          "Managers",
          "Decision Makers",
        ]}
      />
      <UpcomingBatch
        date1="10 June"
        day1="Saturday"
        timing1="9 AM - 10 AM"
        availability1="Yes"
        date2="12 June"
        day2="Monday"
        timing2="11 AM - 12 PM"
        availability2="No"
        date3="15 June"
        day3="Friday"
        timing3="3 PM - 4 PM"
        availability3="Yes"
      />
      <CourseFaqs
        faqHeading="FAQ's Tableau"
        ques1="Q. Demo Question"
        ans1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ques2="Q. Demo Question"
        ans2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ques3="Q. Demo Question"
        ans3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ques4="Q. Demo Question"
        ans4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ques5="Q. Demo Question"
        ans5="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <CoursesSection heading="Explore Other Courses" />
    </main>
  );
}

export default page;
