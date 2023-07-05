import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import tableau from "@/public/assets/tableau.jpg";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="tableau flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/tableau"
        bCrump="Tableau Course"
        h1="Tableau Course"
        h2="Become an Expert With This Tableau Course"
        p1="Tableau is a powerful data visualization and business intelligence software that helps people see and understand their data. It allows users to connect to various data sources, including spreadsheets, databases, and online services, and then create interactive and visually appealing dashboards, reports, and charts."
        p2="With Tableau, users can explore and analyze data from multiple angles, uncover insights, and present findings in a clear and intuitive way. "
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={tableau}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Tableau course! Tableau is a leading data visualization and business intelligence tool that empowers individuals and organizations to explore, analyze, and communicate data insights in a visually compelling manner. Our comprehensive course on Tableau is designed to equip you with the skills and knowledge to leverage this powerful tool for effective data visualization and analysis."
        paragraph2="In this course, you will embark on a journey to unlock the full potential of your data. Whether you're a data analyst, business professional, or aspiring data visualization expert, this course is tailored to enhance your ability to discover valuable insights and communicate them with impact."
        paragraph3="At Campus Sutras, we believe in learning by doing. Through practical exercises and projects, you will have the opportunity to apply your knowledge to real-world scenarios, further honing your Tableau skills and building a portfolio of impactful visualizations."
        paragraph4="Join us today and unlock the power of data visualization with Tableau. Whether you're looking to enhance your data analysis skills, improve decision-making processes, or effectively communicate data insights, Campus Sutras' Tableau course will provide you with the tools and knowledge to transform raw data into meaningful visualizations that drive actionable insights."
        benefits={[
          "Data Visualization Mastery",
          "Enhanced Data Analysis Skills",
          "Career Advancement",
          "Increased Efficiency and Productivity",
          "Improved Data Storytelling",
          "Real-time Data Analysis",
          "Data Collaboration and Sharing",
          "Data-Driven Decision Making",
        ]}
      />

      <CourseGraph
        heading="Data Analyst"
        demand="High"
        avgPackage={6}
        highPackage={12}
      />
      <CourseFor
        paragraph="The Tableau course is beneficial for a wide range of professionals and individuals who want to enhance their data analytics skills and leverage the power of Tableau. The course is particularly suitable for:"
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
