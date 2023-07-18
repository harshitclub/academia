import React from "react";
import "./style.css";
import powerBi from "@/public/assets/dapbi.jpg";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="daPowerBi flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/data-analytics-using-power-bi"
        bCrump="Data Analytics Using Power Bi"
        h1="Data Analytics Using Power Bi"
        h2="Become an Expert With This Data Analytics Using Power Bi Course"
        p1="Data analytics using Power BI refers to the process of analyzing and visualizing data using Microsoft Power BI, a powerful business intelligence and data visualization tool. Power BI allows you to connect to various data sources, transform and clean the data, create data models, and generate interactive reports and dashboards."
        p2="Power BI can connect to a wide range of data sources such as databases, Excel files, online services, and cloud-based platforms. You can import or establish live connections to retrieve data from these sources."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={powerBi}
      />
      <CourseOverview
        paragraph="
        Welcome to Campus Sutras' Data Analytics using Power BI course! In today's data-driven world, the ability to extract meaningful insights from vast amounts of data is a valuable skill. Our comprehensive course on Data Analytics using Power BI is designed to equip individuals with the knowledge and skills to harness the power of data and effectively visualize and analyze it using the popular business intelligence tool, Power BI."
        paragraph2="In this course, you will embark on a journey through the world of data analytics, learning how to transform raw data into actionable insights. Whether you're a data professional, business analyst, or a decision-maker looking to leverage data for informed decision-making, this course is tailored to enhance your analytical capabilities."
        paragraph3="At Campus Sutras, we believe in a hands-on approach to learning. Through practical exercises and projects, you will have the opportunity to apply your knowledge to real-world scenarios, gaining the confidence and skills to tackle data analytics challenges in your professional journey."
        paragraph4="Join us today and unlock the power of data analytics with Power BI. Whether you're looking to enhance your career prospects, improve business decision-making, or gain a competitive edge in the data-driven landscape, Campus Sutras' Data Analytics using Power BI course will equip you with the skills and knowledge to harness the full potential of data analytics and drive meaningful insights."
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
        paragraph="The Data Analytics Using Power BI course is beneficial for a wide range of professionals and individuals who want to enhance their data analytics skills and leverage the power of Power BI. The course is particularly suitable for:"
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
        faqHeading="FAQ's Power Bi"
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
