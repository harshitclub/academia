import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import bSkills from "@/public/assets/bSkills.jpg";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="bSkills flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/behavioral-skills"
        bCrump="Behavioral Skills"
        h1="Behavioral Skills"
        h2="Become an Expert With This Behavioral Skills Course"
        p1="Welcome to an extraordinary journey of self-discovery and personal growth through our captivating Behavioral Skills course! Are you ready to unlock the power of behavioral competencies and unleash your true potential? Look no further! Our course is meticulously designed to empower you with the essential skills and insights needed to excel both personally and professionally."
        p2="Whether you aspire to be a charismatic leader, an influential communicator, a trusted team player, or a master of emotional intelligence, our Behavioral Skills course will equip you with the tools and techniques to shine in any situation."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={bSkills}
      />
      <CourseOverview
        paragraph="Join our Behavioral Skills course and unlock the door to personal and professional success. Step into a world of self-discovery, where you will gain the confidence, self-awareness, and interpersonal finesse needed to navigate the complexities of today's dynamic and fast-paced world. Whether you aspire to be an influential leader, an effective communicator, or a master collaborator, our course will empower you to transcend your potential and become the best version of yourself."
        benefits={[
          "Enhanced Communication",
          "Leadership Development",
          "Conflict Resolution",
          "Adaptability and Resilience",
          "Effective Teamwork",
          "Increased Self-Awareness",
          "Professional Image and Presence",
          "Improved Customer Relations",
          "Networking and Relationship Building",
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
        paragraph="A behavioral skills course is beneficial for a wide range of individuals across various professional backgrounds. Here are some groups of people who can greatly benefit from undertaking a behavioral skills course:"
        whoList={[
          "Students",
          "Aspiring Professionals",
          "Professionals in Leadership Roles",
          "Employees Seeking Career Advancement",
          "Recent Graduates and Entry-Level Professionals",
          "Professionals Transitioning to New Roles or Industries",
          "Customer-Facing Professionals",
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
