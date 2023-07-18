import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import cToc from "@/public/assets/cSkills.jpg";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="cToc flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/hello-corporate"
        bCrump="Hello Corporate"
        h1="Hello Corporate"
        h2="Become an Expert With This Hello Corporate Course"
        p1={`Welcome to our dynamic and transformative "Hello Corporate" course, where we equip students and aspirants with the essential skills to navigate the ever-changing landscape of the business world. Are you a driven individual ready to bridge the gap between academia and the corporate realm? Look no further! Our program is specifically designed to empower you with the necessary tools and competencies to excel in today's fast-paced and dynamic professional environment.`}
        p2={`In the "Hello Corporate" course, we understand that success in the corporate world goes beyond academic achievements. We focus on honing your interpersonal skills, decision-making abilities, and managerial capabilities required to navigate diverse teams and ever-evolving business priorities. `}
        price={17999}
        disPrice={35998}
        disPercentage={50}
        duration="40 Hours"
        image={cToc}
      />
      <CourseOverview
        paragraph="Embark on this transformative journey with us and unlock your full potential. Prepare to embrace the challenges and opportunities that lie ahead, and position yourself as a sought-after professional who can thrive in the ever-changing corporate landscape. The path to a successful transition from campus to corporate starts here. Are you ready to embark on this transformative learning experience?"
        benefits={[
          "Seamless Transition",
          "Practical Skills Development",
          "Industry Relevance",
          "Networking Opportunities",
          "Corporate Exposure",
          "Personal Development",
          "Mentorship and Guidance",
          "Enhanced Marketability",
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
        paragraph="Our Hello Corporate Program is ideally suited for a wide range of individuals who are seeking to transition from a campus environment to the corporate world. The course is particularly suitable for:"
        whoList={[
          "Recent Graduates",
          "MBA Graduates",
          "Early Career Professionals",
          "Career Changers",
          "Professionals Returning to Work",
          "International Students",
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
        faqHeading="FAQ's Hello Corporate"
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
