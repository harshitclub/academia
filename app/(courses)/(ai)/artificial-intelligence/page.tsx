import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import React from "react";
import ai from "@/public/assets/ai.jpg";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";

function page() {
  return (
    <main className="ai flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/artificial-intelligence"
        bCrump="Artificial Intelligence"
        h1="Artificial Intelligence"
        h2="Become an Expert With This Artificial Intelligence Course"
        p1="Artificial Intelligence (AI) is a transformative technology that aims to replicate human intelligence in machines. It encompasses a wide range of techniques and algorithms that enable machines to perceive, understand, reason, learn, and make decisions."
        p2="AI has the potential to revolutionize numerous industries and sectors, including healthcare, finance, transportation, and manufacturing. One of the key areas within AI is machine learning, where machines are trained to learn from data and improve their performance over time."
        price={31450}
        disPrice={62900}
        disPercentage={50}
        duration="40 Hours"
        image={ai}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Artificial Intelligence (AI) course! Our comprehensive AI program is designed to equip individuals with the knowledge and skills to navigate the dynamic world of AI and harness its potential for innovation and problem-solving."
        paragraph2="In this course, we delve into the fundamental concepts and techniques that underpin AI, empowering learners to understand and apply AI algorithms and models effectively. Whether you're a technology enthusiast, a data professional, or a business leader seeking to stay ahead in the AI revolution, this course is tailored to cater to your learning needs."
        paragraph3="Throughout the program, you will explore key AI domains, including machine learning, deep learning, natural language processing, and computer vision. You will gain hands-on experience with popular AI tools and frameworks, mastering the art of implementing AI algorithms and models in real-world scenarios."
        paragraph4="Our experienced instructors, who are industry experts with a deep understanding of AI, will guide you through practical exercises, engaging projects, and real-world case studies. By working on these immersive assignments, you will develop the skills to tackle complex problems, make data-driven decisions, and unleash the potential of AI across various domains."
        paragraph5="By the end of this course, you will have a strong foundation in AI concepts, hands-on experience with cutting-edge AI technologies, and the ability to apply AI techniques to real-world challenges. Whether you're aiming to advance your career, embark on new entrepreneurial ventures, or simply satisfy your curiosity about AI, Campus Sutras' AI course is your gateway to success in the transformative world of artificial intelligence."
        benefits={[
          "In-Demand Skills",
          "Career Advancement",
          "Understanding Cutting-Edge Technology",
          "Problem-Solving and Decision-Making Skills",
          "Practical Application",
          "Ethical Considerations",
          "Interdisciplinary Learning",
          "Entrepreneurial Opportunities",
          "Networking and Collaboration",
          "Recognized Certification",
        ]}
      />
      <CourseGraph
        heading="Data Scientist"
        demand="High"
        avgPackage={6}
        highPackage={12}
      />
      <CourseFor
        paragraph="An artificial intelligence course is beneficial for a wide range of individuals who are interested in gaining knowledge and skills in this rapidly evolving field. Here are some specific groups of people who can greatly benefit from an artificial intelligence course:"
        whoList={[
          "Students",
          "Professionals in Technology",
          "Data Scientists and Analysts",
          "Business Professionals",
          "Researchers and Academics",
          "Entrepreneurs and Innovators",
          "Career Changers",
          "AI Enthusiasts and Learners",
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
        faqHeading="FAQ's Artificial Intelligence"
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
