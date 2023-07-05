import CourseFaqs from "@/components/CComponents/CourseFaqs/CourseFaqs";
import CourseFor from "@/components/CComponents/CourseFor/CourseFor";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CourseOverview from "@/components/CComponents/CourseOverview/CourseOverview";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";
import cybersecurity from "@/public/assets/cybersecurity.jpg";
import React from "react";

function page() {
  return (
    <main className="cybersecurity flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/cyber-security"
        bCrump="Cyber Security"
        h1="Cyber Security"
        h2="Become an Expert With This Cyber Security Course"
        p1="Cybersecurity is a critical field that focuses on protecting computer systems, networks, and digital data from unauthorized access, damage, and malicious attacks. In today's interconnected world, where businesses, organizations, and individuals rely heavily on technology, the importance of cybersecurity cannot be overstated."
        p2="The field of cybersecurity encompasses various practices, technologies, and strategies aimed at securing digital assets. It involves identifying vulnerabilities, implementing protective measures, and responding to incidents effectively. Cybersecurity professionals work diligently to stay ahead of cyber threats, constantly evolving their skills and knowledge to counter ever-evolving attack techniques."
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="40 Hours"
        image={cybersecurity}
      />
      <CourseOverview
        paragraph="Welcome to Campus Sutras' Cyber Security course! In today's rapidly evolving digital landscape, ensuring the security of information and protecting against cyber threats is of paramount importance. Our comprehensive Cyber Security program is designed to equip individuals with the knowledge and skills needed to safeguard digital systems, networks, and data."
        paragraph2="In this course, you will dive into the world of cyber security, exploring the latest threats, vulnerabilities, and countermeasures. Whether you're an aspiring security professional, a technology enthusiast, or a business leader concerned about safeguarding your organization's assets, this course is tailored to provide you with the essential skills and practical insights you need."
        paragraph3="At Campus Sutras, we prioritize practical application and real-world relevance. Our course curriculum is designed to align with industry best practices and standards, equipping you with the skills and knowledge that employers seek in cyber security professionals. Through immersive projects and simulated scenarios, you will have the opportunity to apply your learning and develop a comprehensive understanding of cyber security principles and practices."
        paragraph4="Join us today and embark on a journey to become a proficient cyber security professional. Whether you're looking to start a career in the cyber security industry, upskill in your current role, or enhance your organization's security posture, Campus Sutras' Cyber Security course will empower you to safeguard critical information and protect against cyber threats in an increasingly interconnected world."
        benefits={[
          "In-demand career opportunities",
          "Mitigate cyber threats and protect data",
          "Stay ahead of emerging threats",
          "Practical hands-on experience",
          "Ethical hacking and defense techniques",
          "Industry-recognized certifications",
          "Career progression and higher earning potential",
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
        paragraph="Here are some key points highlighting who should consider doing a cybersecurity course:"
        whoList={[
          "IT Professionals",
          "Security Analysts and Engineers",
          "Risk and Compliance Professionals",
          "Business Owners and Managers",
          "Graduates and Job Seekers",
          "Entrepreneurs and Small Business Owners",
          "Anyone Interested in Cybersecurity",
          "IT Auditors and Compliance Officers",
          "Law Enforcement and Government Officials",
          "Individuals Seeking Career Transition",
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
        faqHeading="FAQ's Cyber Security"
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
