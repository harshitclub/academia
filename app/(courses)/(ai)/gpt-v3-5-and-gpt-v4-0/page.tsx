import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import gpt from "@/public/assets/chatgpt.jpg";
import React from "react";

function page() {
  return (
    <main className="cybersecurity flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/gpt-v3-5-and-gpt-v4.0"
        bCrump="GPT V3.5 & GPT V4.0"
        h1="GPT V3.5 & GPT V4.0"
        h2="Become an Expert With This GPT v3.5 & GPT v4.0 Course"
        p1="GPT (Generative Pre-trained Transformer) v3.5 and GPT v4.0 are advanced language models developed by OpenAI. These models are part of the GPT series, which have achieved remarkable success in the field of natural language processing (NLP) and artificial intelligence (AI). They are based on the Transformer architecture, which allows them to process and generate human-like text."
        p2="GPT v3.5 and GPT v4.0 build upon the success of their predecessors by incorporating significant improvements in terms of model size, training methodology, and performance. These models are pre-trained on massive amounts of text data from the internet, enabling them to learn the statistical patterns and linguistic structures present in natural language."
        price={31450}
        disPrice={62900}
        disPercentage={50}
        duration="40 Hours"
        image={gpt}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' GPT v3.5 & GPT v4.0 course! OpenAI's GPT (Generative Pre-trained Transformer) models have revolutionized the field of natural language processing and have become powerful tools for generating human-like text. Our comprehensive course on GPT v3.5 & GPT v4.0 is designed to provide you with the knowledge and skills to understand and utilize these advanced language models effectively."
        paragraph2="In this course, you will embark on a journey to explore the capabilities of GPT v3.5 and GPT v4.0, and how they can be leveraged for various applications. Whether you're a developer, researcher, content creator, or simply interested in the field of artificial intelligence, this course is tailored to enhance your understanding and practical usage of these cutting-edge language models."
        paragraph3="At Campus Sutras, we believe in a practical and interactive approach to learning. Our course curriculum emphasizes hands-on practice and real-world applications, enabling you to gain practical experience and develop the skills necessary to effectively utilize GPT v3.5 and GPT v4.0."
        paragraph4="Join us today and unlock the potential of GPT v3.5 and GPT v4.0. Whether you're looking to enhance your AI development skills, explore innovative language generation applications, or stay up-to-date with the latest advancements in natural language processing, Campus Sutras' GPT v3.5 & GPT v4.0 course will equip you with the knowledge and expertise to leverage these powerful language models and push the boundaries of AI-driven text generation."
        benefits={[
          "Stay at the forefront of AI technology",
          "Learn advanced language generation techniques",
          "Explore diverse applications",
          "Develop fine-tuning expertise",
          "Ethical considerations and responsible AI usage",
          "Join a vibrant community",
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
        paragraph="The GPT v3.5 and GPT v4.0 course is suitable for a wide range of individuals who are interested in leveraging advanced language models for various applications. Here are some specific groups of people who can benefit from enrolling in this course:"
        whoList={[
          "AI Developers and Data Scientists",
          "Researchers and Academics",
          "Content Creators and Writers",
          "AI Enthusiasts and Hobbyists",
          "Business Professionals and Entrepreneurs",
          "Anyone interested in AI and NLP",
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
        faqHeading="FAQ's GPT v3.5 & GPT v4.0"
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
