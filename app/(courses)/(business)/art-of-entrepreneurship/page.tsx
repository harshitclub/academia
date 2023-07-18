import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import entrepreneurship from "@/public/assets/entrepreneurship.jpg";
import React from "react";

function page() {
  return (
    <main className="cybersecurity flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/art-of-entrepreneurship"
        bCrump="Art of Entrepreneurship"
        h1="Art of Entrepreneurship"
        h2="Become an Expert With This Art of Entrepreneurship Course"
        p1="The Art of Entrepreneurship is an engaging and transformative course that explores the principles, strategies, and mindset required to succeed as an entrepreneur. Entrepreneurship is the process of identifying opportunities, taking calculated risks, and creating innovative solutions to meet market demands. "
        p2="The Art of Entrepreneurship course goes beyond traditional business practices and focuses on the creative and strategic aspects of starting and growing a successful venture. The course emphasizes the importance of creativity, innovation, and adaptability in the entrepreneurial journey."
        price={23450}
        disPrice={46900}
        disPercentage={50}
        duration="40 Hours"
        image={entrepreneurship}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Art of Entrepreneurship course! Entrepreneurship is a dynamic and exciting journey that requires a unique set of skills, mindset, and strategies. Our comprehensive course on the Art of Entrepreneurship is designed to equip aspiring entrepreneurs with the knowledge and tools to navigate the entrepreneurial landscape and turn their ideas into successful ventures."
        paragraph2="In this course, you will embark on a transformative journey that explores the essential elements of entrepreneurship. Whether you have a business idea you want to bring to life or simply want to gain a deeper understanding of the entrepreneurial mindset, this course is tailored to provide you with the foundational skills and insights you need to succeed."
        paragraph3="At Campus Sutras, we foster an interactive and collaborative learning environment. Through group discussions, networking opportunities, and mentorship, you will have the chance to connect with fellow entrepreneurs, share experiences, and receive guidance from industry experts."
        paragraph4="Join us today and unlock your entrepreneurial potential. Whether you're looking to launch your own venture, innovate within an existing organization, or simply cultivate an entrepreneurial mindset, Campus Sutras' Art of Entrepreneurship course will provide you with the knowledge, skills, and inspiration to embark on a successful entrepreneurial journey."
        benefits={[
          "Develop an Entrepreneurial Mindset",
          "Acquire Essential Entrepreneurial Skills",
          "Validate and Refine Business Ideas",
          "Network with Like-minded Individuals",
          "Gain Real-world Insights from Experienced Entrepreneurs",
          "Overcome Challenges and Avoid Pitfalls",
          "Access to Resources and Support",
          "Boost Confidence and Motivation",
        ]}
      />
      <CourseGraph
        heading="Data Analyst"
        demand="High"
        avgPackage={6}
        highPackage={12}
      />
      <CourseFor
        paragraph="The Art of Entrepreneurship course is beneficial for a wide range of individuals who have an interest in entrepreneurship and want to develop the skills and mindset required to succeed in this field. Here are some key groups of people who should consider enrolling in the course:"
        whoList={[
          "Aspiring Entrepreneurs",
          "Early-stage Entrepreneurs",
          "Professionals Transitioning to Entrepreneurship",
          "Small Business Owners",
          "Intrapreneurs",
          "Investors and Venture Capitalists",
          "Professionals Seeking Career Advancement",
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
        faqHeading="FAQ's Art of Entrepreneurship"
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
