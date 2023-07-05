import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import powerQuery from "@/public/assets/powerquery.jpg";
import React from "react";

function page() {
  return (
    <main className="powerQuery flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/data-analytics-using-power-query"
        bCrump="Data Analytics Using Power Query"
        h1="Data Analytics Using Power Query"
        h2="Become an Expert With This Data Analytics Using Power Query Course"
        p1="Data analytics using Power Query is a powerful and versatile approach to extracting, transforming, and analyzing data from various sources. With its intuitive interface and robust set of functions, Power Query provides users with the tools to efficiently clean, shape, and merge data, allowing for deeper insights and informed decision-making."
        p2="The main goal of data analytics using Power Query is to facilitate the process of data preparation and transformation. By connecting to diverse data sources such as databases, spreadsheets, websites, APIs, and more, Power Query enables users to combine and clean data effortlessly."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={powerQuery}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Data Analytics using Power Query course! In today's data-driven world, the ability to efficiently gather, transform, and analyze data is crucial for making informed business decisions. Our comprehensive course on Data Analytics using Power Query is designed to equip you with the skills and knowledge to harness the power of Power Query, a powerful data transformation and preparation tool."
        paragraph2="In this course, you will embark on a journey to master the art of data analytics using Power Query. Whether you're a data analyst, business professional, or aspiring data scientist, this course is tailored to enhance your ability to extract valuable insights from diverse datasets."
        paragraph3="At Campus Sutras, we believe in hands-on learning experiences. Through practical exercises and projects, you will have the opportunity to apply your knowledge to real-world datasets, further enhancing your skills and proficiency in data analytics using Power Query."
        paragraph4="Join us today and unlock the power of data analytics with Power Query. Whether you're looking to enhance your analytical skills, improve data quality and reliability, or streamline your data preparation processes, Campus Sutras' Data Analytics using Power Query course will provide you with the tools and knowledge to leverage the full potential of Power Query and drive impactful data analytics."
        benefits={[
          "Enhanced Data Integration",
          "Simplified Data Transformation",
          "Time Efficiency",
          "Data Quality and Consistency",
          "Flexibility and Scalability",
          "Reusability and Automation",
          "Integration with Microsoft Ecosystem",
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
        paragraph="The Data Analytics Using Power Query course is beneficial for a wide range of professionals and individuals who want to enhance their data analytics skills and leverage the power of Power Query. The course is particularly suitable for:"
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
        faqHeading="FAQ's Power Query Course"
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
      <CoursesSection heading="Explore Other Courses" />;
    </main>
  );
}

export default page;
