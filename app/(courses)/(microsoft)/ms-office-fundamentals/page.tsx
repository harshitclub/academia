import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
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
        p1="MS Office Fundamentals is a comprehensive course designed to provide individuals with essential skills and knowledge to effectively utilize the suite of Microsoft Office applications. Microsoft Office is a widely used productivity suite that includes popular applications such as Microsoft Word, Excel, PowerPoint, Outlook, and more."
        p2="Proficiency in MS Office is essential in various professional settings, enabling individuals to create, edit, organize, and present information efficiently. The MS Office Fundamentals course covers the core features and functionalities of each application, equipping participants with a solid foundation to maximize their productivity and effectiveness in the workplace."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={msoffice}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' MS Office Fundamentals course! Microsoft Office is a suite of powerful productivity tools that are widely used in various professional settings. Our comprehensive course on MS Office Fundamentals is designed to provide you with the essential skills and knowledge to navigate and leverage the core applications of Microsoft Office."
        paragraph2="Throughout the program, you will explore the key applications of Microsoft Office, including Microsoft Word, Excel, PowerPoint, and Outlook. Our experienced instructors, who have a deep understanding of MS Office, will guide you through practical exercises, demonstrations, and hands-on projects to ensure you gain practical proficiency in using these applications."
        paragraph3="At Campus Sutras, we believe in a learner-centric approach to education. Our course curriculum is designed to provide a balance of theoretical knowledge and practical application, enabling you to apply your skills in real-world scenarios. You will develop the ability to work efficiently, collaborate effectively, and produce high-quality outputs using Microsoft Office applications."
        paragraph4="Join us today and unlock the potential of Microsoft Office. Whether you're looking to enhance your professional skills, improve your academic performance, or simply become more proficient in using these essential productivity tools, Campus Sutras' MS Office Fundamentals course will provide you with the knowledge and skills to excel in the digital workplace."
        benefits={[
          "Improved Productivity",
          "Enhanced Professional Skills",
          "Efficient Document Creation and Management",
          "Data Analysis and Visualization",
          "Professional Presentations",
          "Efficient Email and Information Management",
          "Collaboration and Teamwork",
          "Versatility and Adaptability",
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
        paragraph="The MS Office Fundamentals course is beneficial for a wide range of individuals, regardless of their professional background or industry. Here are some key groups of people who should consider enrolling in the course:"
        whoList={[
          "Students",
          "Office Professionals",
          "Business Professionals",
          "Entrepreneurs and Small Business Owners",
          "Job Seekers",
          "Career Changers",
          "Personal Use",
          "Anyone Who is Interested ",
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
        faqHeading="FAQ's MS Office Fundamentals"
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
