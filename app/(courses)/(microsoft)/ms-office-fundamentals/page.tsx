import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import { RiCheckboxCircleFill, RiDownloadLine } from "react-icons/ri";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import msoffice from "@/public/assets/msoffice.jpg";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="msoffice flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/ms-office-fundamentals"
        bCrump="Ms Office Fundamentals"
        h1="Ms Office Fundamentals"
        h2="Become an Expert With This Ms Office Fundamentals Course"
        p1="Data analytics using Power BI refers to the process of analyzing and visualizing data using Microsoft Power BI, a powerful business intelligence and data visualization tool. Power BI allows you to connect to various data sources, transform and clean the data, create data models, and generate interactive reports and dashboards."
        p2="Power BI can connect to a wide range of data sources such as databases, Excel files, online services, and cloud-based platforms. You can import or establish live connections to retrieve data from these sources."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={msoffice}
      />
      <CourseOverview
        paragraph="Welcome to the Data Analytics Using Power BI course! In today's data-driven world, organizations rely on actionable insights derived from data to make informed decisions. Microsoft Power BI is a powerful business intelligence tool that enables professionals to visualize, analyze, and gain valuable insights from their data. This comprehensive training program will equip you with the skills and knowledge required to harness the full potential of Power BI for effective data analytics."
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
