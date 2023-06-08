import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import cToc from "../../public/assets/cSkills.jpg";
import { RiCheckboxCircleFill, RiDownloadLine } from "react-icons/ri";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import BigDivider from "@/components/BigDivider/BigDivider";

function page() {
  return (
    <main className="cToc flex alignCenter justifyCenter flexColumn width100">
      <CourseHero
        bCrumpLink="/campus-to-corporate"
        bCrump="Campus To Corporate"
        h1="Campus To Corporate"
        h2="Become an Expert With This Campus To Corporate Course"
        p1={`Welcome to our dynamic and transformative "Campus to Corporate" course, where we equip students and aspirants with the essential skills to navigate the ever-changing landscape of the business world. Are you a driven individual ready to bridge the gap between academia and the corporate realm? Look no further! Our program is specifically designed to empower you with the necessary tools and competencies to excel in today's fast-paced and dynamic professional environment.`}
        p2={`In the "Campus to Corporate" course, we understand that success in the corporate world goes beyond academic achievements. We focus on honing your interpersonal skills, decision-making abilities, and managerial capabilities required to navigate diverse teams and ever-evolving business priorities. `}
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="2 Days"
        image={cToc}
      />
      <section className="cTocBody flex alignStart justifyCenter spaceBtw width95 maxWidth">
        <div className="cTocBLeft width60">
          <h2>Overview</h2>
          <p>
            Embark on this transformative journey with us and unlock your full
            potential. Prepare to embrace the challenges and opportunities that
            lie ahead, and position yourself as a sought-after professional who
            can thrive in the ever-changing corporate landscape. The path to a
            successful transition from campus to corporate starts here. Are you
            ready to embark on this transformative learning experience?
          </p>
          <h3>Benefits of Doing This Course</h3>
          <ul>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Seamless
              Transition
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Practical Skills
              Development
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Industry
              Relevance
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Networking
              Opportunities
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Corporate
              Exposure
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Personal
              Development
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Mentorship and
              Guidance
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Enhanced
              Marketability
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Networking and
              Collaboration
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Recognized
              Certification
            </li>
          </ul>
        </div>
        <div className="cTocBRight width40">
          <h2>Course Content</h2>
          <div className="cTocContent">
            <h3>Table of Content</h3>
            <h4>1. PersonalityDevelopment & Grooming</h4>
            <h5>Making a Great First Impression:</h5>
            <ul>
              <li>How to present yourself to people</li>
              <li>Greetings, Introductions</li>
              <li>Developing Your Professional and Personal Image</li>
              <li>Tools and techniques of Self Analysis-SWOT, JOHARI WINDOW</li>
              <li>The dos and don’ts of dressing</li>
            </ul>
            <h4>2. Business Etiquette and Professionalism</h4>
            <ul>
              <li>Social Graces</li>
              <li>Sending Etiquette</li>
              <li>Body Language</li>
            </ul>
            <h5>E-Mail Etiquette</h5>
            <ul>
              <li>General etiquette</li>
              <li>Sending effective messages</li>
              <li>Form and tone of the messages</li>
              <li>Responding to messages</li>
            </ul>
            <h5>Telephone Etiquette</h5>
            <ul>
              <li>Taking Calls</li>
              <li>Making Calls</li>
              <li>Dos and Don'ts of Telephone etiquette</li>
              <li>Cell Phone Etiquette</li>
            </ul>
            <h5>Professionalism</h5>
            <ul>
              <li>Aligning to Corporate Values</li>
              <li>Accountability, Responsibility, Ownership</li>
              <li>Integrity</li>
              <li>Self-motivation and beign self-driven</li>
            </ul>
            <h4>
              3. Business Communication- The Building Blocks of Effective
              Business Communication
            </h4>
            <ul>
              <li>The Do’s and Don’ts in Conversation</li>
              <li>Enhance communication skills</li>
              <li>Build self-confidence and self-esteem</li>
              <li>Rapport building</li>
            </ul>
            <h5>Structuring Communication</h5>
            <ul>
              <li>Having a clear objective</li>
              <li>Highlighting critical points</li>
              <li>Being clear and concise</li>
              <li>Understanding the audience</li>
              <li>Listening skills</li>
            </ul>
            <h4>4. Interpersonal Skills</h4>
            <ul>
              <li>The Basics of Interpersonal Communication</li>
              <li>Starting and sustaining conversations that are engaging</li>
              <li>Acknowledging differences</li>
              <li>Giving and receiving compliments</li>
              <li>Coming across as a positive person</li>
              <li>Giving feedback</li>
            </ul>
            <h4>
              5. Displaying Courteousness and Thoughtfulness at the Workplace
            </h4>
            <ul>
              <li>Being thoughtful to colleagues regardless of position</li>
              <li>Sticking to convictions as diplomatically as possible</li>
              <li>Showing appreciation</li>
              <li>
                Extending courtesy to guests, consultants, and new employees
              </li>
            </ul>
            <h4>6. Time Management - Organizing Your Day</h4>
            <ul>
              <li>3P’s of Time Management</li>
              <li>80:20 Rule or Pareto Principle of Time Management</li>
              <li>Ways to Manage Time and Priorities</li>
              <li>
                Activity Logs, Analysing Your Time Log, Focusing on the critical
                20 percent
              </li>
            </ul>
            <h4>7. Team Work</h4>
            <ul>
              <li>What is a TEAM?</li>
              <li>Difference between Team & Group</li>
              <li>Importance of ‘synergy’ in teams</li>
              <li>Stages of team building</li>
              <li>Team building Process</li>
              <li>Intergroup collaboration and cross-cultural teams</li>
            </ul>
          </div>
          <div className="downloadBtn">
            <a href="/">
              Download In PDF <RiDownloadLine className="icoMargin18" />
            </a>
          </div>
        </div>
      </section>
      <CourseGraph
        heading="Data Analyst"
        demand="High"
        avgPackage={6}
        highPackage={12}
      />
      <section className="courseFor width95 maxWidth">
        <h2>Who Should Enroll This Course</h2>
        <BigDivider />
        <p className="marginBottom1">
          Our Campus to Corporate Program is ideally suited for a wide range of
          individuals who are seeking to transition from a campus environment to
          the corporate world.
        </p>
        <h3>The course is particularly suitable for:</h3>
        <ul>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Recent Graduates
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> MBA Graduates
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Early Career
            Professionals
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Career Changers
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Professionals
            Returning to Work
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> International
            Students
          </li>
        </ul>
        <p>
          It's important to note that while our program is designed to cater to
          the needs of these individuals, it can also benefit anyone who is
          seeking to enhance their professional skills, gain industry exposure,
          and develop a strong foundation for success in the corporate world.
        </p>
      </section>
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
    </main>
  );
}

export default page;
