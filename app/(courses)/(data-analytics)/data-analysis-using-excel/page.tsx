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
        paragraph="Welcome to Campus Sutras' Data Analytics using Excel course! Excel is a widely recognized and versatile tool that is commonly used for data analysis and manipulation. Our comprehensive course on Data Analytics using Excel is designed to provide you with the essential skills and techniques to effectively analyze and visualize data using this powerful spreadsheet software."
        paragraph2="In this course, you will embark on a journey to uncover the insights hidden within your data. Whether you're a data professional, business analyst, or a decision-maker seeking to leverage Excel for data-driven decision-making, this course is tailored to enhance your analytical capabilities."
        paragraph3="At Campus Sutras, we emphasize practical application and real-world relevance. Through hands-on exercises and projects, you will have the opportunity to apply your learning to real datasets, further enhancing your skills and proficiency in data analytics using Excel."
        paragraph4="Join us today and unlock the potential of data analytics using Excel. Whether you're looking to enhance your analytical skills, improve decision-making processes, or gain a competitive edge in the data-driven world, Campus Sutras' Data Analytics using Excel course will equip you with the knowledge and techniques to harness the power of Excel for effective data analysis and visualization."
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
        faqHeading="FAQ's Excel"
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
