import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import bComm from "@/public/assets/bcSkills.jpg";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";

function page() {
  return (
    <main className="bComm flex alignCenter justifyCenter flexColumn">
      <CourseHero
        bCrumpLink="/business-communication"
        bCrump="Business Communication"
        h1="Business Communication"
        h2="Become an Expert With This Business Communication Course"
        p1="Welcome to our dynamic and transformative Business Communication Course, where the power of effective communication takes center stage! In today's fast-paced business world, the ability to communicate with clarity, impact, and professionalism is paramount. Are you ready to unlock your communication potential and gain a competitive edge in the corporate arena? Look no further!"
        p2="Through a comprehensive curriculum and interactive learning experiences, our course takes you on a transformative journey of communication mastery. You will explore the intricacies of verbal and non-verbal communication, learn to craft compelling messages, and navigate the complexities of interpersonal interactions in diverse business settings."
        price={11999}
        disPrice={23998}
        disPercentage={50}
        duration="40 Hours"
        image={bComm}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Business Communication course! Effective communication is a cornerstone of success in today's business world. Our comprehensive course on Business Communication is designed to equip individuals with the essential skills and strategies to communicate effectively in a professional setting."
        paragraph2="In this course, you will embark on a journey to enhance your communication skills and develop a strong foundation for effective business communication. Whether you're a working professional, an aspiring leader, or an entrepreneur, this course is tailored to improve your ability to articulate ideas, build strong relationships, and convey your message with clarity and impact."
        paragraph3="At Campus Sutras, we believe in the power of experiential learning. Our course curriculum emphasizes practical application and real-world relevance, equipping you with the tools and strategies to excel in various business communication scenarios. You will develop the ability to engage stakeholders, build rapport, resolve conflicts, and foster effective teamwork through effective communication practices."
        paragraph4="Join us today and unlock the potential of business communication. Whether you're looking to enhance your professional presence, improve your networking abilities, or advance your career prospects, Campus Sutras' Business Communication course will empower you with the skills and confidence to communicate effectively in the modern business landscape."
        benefits={[
          "Effective Communication Skills",
          "Enhanced Interpersonal Skills",
          "Increased Professional Credibility",
          "Improved Presentation Skills",
          "Adaptability in Virtual Communication",
          "Stronger Leadership Abilities",
          "Cross-Cultural Communication Competence",
          "Career Advancement Opportunities",
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
        paragraph="A Business Communication Course is beneficial for a wide range of individuals across various professional backgrounds. Here are some groups of people who can greatly benefit from undertaking a Business Communication Course:"
        whoList={[
          "Students",
          "Aspiring Professionals",
          "Professionals in Leadership and Management Roles",
          "Sales and Marketing Professionals",
          "Customer Service Representatives",
          "Business Development Executives",
          "Project Managers and Team Members",
          "Human Resources Professionals",
          "Individuals Seeking Career Advancement",
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
        faqHeading="FAQ's Business Communication"
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
