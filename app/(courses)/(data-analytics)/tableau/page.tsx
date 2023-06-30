import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import { RiCheckboxCircleFill, RiDownloadLine } from "react-icons/ri";
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
        paragraph="Welcome to the exciting world of Tableau! Get ready to unlock the
            full potential of your data with our comprehensive Tableau course.
            Are you tired of sifting through rows and columns of data,
            struggling to make sense of it all? With our Tableau course, you'll
            gain the skills and knowledge to transform raw data into captivating
            visualizations that tell compelling stories. Whether you're a
            business professional looking to enhance your analytical skills or a
            data enthusiast eager to dive into the world of data visualization,
            our course is designed to cater to all levels of expertise."
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
