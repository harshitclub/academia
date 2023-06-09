import React from "react";
import "./style.css";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import bComm from "../../public/assets/bcSkills.jpg";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import { RiCheckboxCircleFill, RiDownloadLine } from "react-icons/ri";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";

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
        price={7999}
        disPrice={1599}
        disPercentage={50}
        duration="24 Hours"
        image={bComm}
      />
      <section className="bCommBody flex alignStart justifyCenter spaceBtw width95 maxWidth">
        <div className="bCommBLeft width60">
          <h2>Overview</h2>
          <p>
            Joining our Business Communication Course means embarking on a
            holistic learning experience. You will engage in hands-on exercises,
            real-world simulations, and practical case studies that mirror the
            challenges faced in the corporate world. Our experienced
            instructors, who possess a wealth of industry knowledge, will guide
            you through immersive learning opportunities, enabling you to apply
            your newfound skills and gain confidence in your ability to
            communicate effectively.
          </p>
          <h3>Benefits of Doing This Course</h3>
          <ul>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Effective
              Communication Skills
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Enhanced
              Interpersonal Skills
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Increased
              Professional Credibility
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Improved
              Presentation Skills
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Adaptability in
              Virtual Communication
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Stronger
              Leadership Abilities
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Cross-Cultural
              Communication Competence
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Career
              Advancement Opportunities
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
        <div className="bCommBRight width40">
          <h2>Course Content</h2>
          <div className="bCommContent">
            <h3>Table of Content</h3>
            <h4>1. Introduction to Data Analytics</h4>
            <ul>
              <li>What is Data Analysis?</li>
              <li>Data Analysis Vs. Data Analytics</li>
              <li>Types of Analysis</li>
              <li>Data Analytics Tools</li>
              <li> Power BI Vs. Excel</li>
              <li>
                Basics Terminology
                <ul>
                  <li>Normalizations</li>
                  <li>Keys Types</li>
                  <li>Relationships</li>
                  <li>Data Types</li>
                  <li>Cardinality</li>
                </ul>
              </li>
            </ul>
            <h4>2. Get Started with Microsoft Data Analytics</h4>
            <ul>
              <li>Data Analytics and Microsoft</li>
              <li> Why Power BI?</li>
              <li>Feature of Power BI</li>
              <li>Power BI Editions</li>
              <li>Power BI Building Blocks</li>
              <li>What is Power BI Desktop</li>
              <li>Subscribing To Power Bi Service(Paid)</li>
            </ul>
            <h4>3. Get Data From Sources in Power BI</h4>
            <ul>
              <li>Data Sources?</li>
              <li>Types of sources?</li>
              <li>Connection Types?</li>
              <li>Identify and Connect to Data</li>
              <li>
                Get Data From Different Sources
                <ul>
                  <li>Get Data from File Type</li>
                  <li>Get Data from Relational Database</li>
                  <li>Get Data from Cloud Services</li>
                  <li>Get Data from Azure Database</li>
                  <li>Get Data from Applications</li>
                  <li>Get Data from Other Sources</li>
                  <li>Enter Data Directly</li>
                </ul>
              </li>
            </ul>
            <h4>Using Power Query for Data Cleaning, and Transformation</h4>
            <ul>
              <li>Introduction to Power Query Editor</li>
              <li>Power Query Editor Navigation</li>
              <li>Evaluate Data for error with Data Profiling</li>
              <li>Get Data in Power Query using New Query</li>
              <li>Refresh Data Preview</li>
              <li>Column Transformation</li>
              <li>Reduce Data By Row Transformation</li>
              <li>Define Column Data Type</li>
              <li>Enhance the Data Structure with Other Transformations</li>
              <li>Calculation in Power Query</li>
              <li>Adding Columns</li>
              <li>Query Setting</li>
              <li>M Language Advance Editor</li>
              <li>Writing Custom Functions</li>
            </ul>
            <h4>4. Working with Data Modelling in Power BI</h4>
            <ul>
              <li>Introduction to Data Modelling?</li>
              <li>Finding any already existing Relationship</li>
              <li>Primary & Foreign Key Lookups</li>
              <li>Working with Tables</li>
              <li>Configuring Table & Column Properties</li>
              <li>Create Table Relationship</li>
              <li>Define a Relationship Cardinality</li>
              <li>Working with Dimension & Hierarchies</li>
            </ul>
            <h4>5. Working with Calculation using DAX in Power BI</h4>
            <ul>
              <li>Introduction to Data Analysis Expression(DAX)</li>
              <li>DAX for creating a Calculating Table</li>
              <li>Creating Calculated Column Using DAX</li>
              <li>Improving Report by Using Calculated Measures</li>
              <li>Implicit & Explicit Measures</li>
              <li>
                DAX Function Types
                <ul>
                  <li>Mathematical Functions</li>
                  <li>Statistical Functions</li>
                  <li>Logical Function</li>
                  <li>Date & Time Functions</li>
                  <li>Text Functions</li>
                  <li>Filter Functions</li>
                </ul>
              </li>
              <li>Use Advance Calculate Function to manipulate Filters</li>
              <li>Implement Advanced & Time intelligence Functions</li>
            </ul>
            <h4>6. Working with Power BI Reports & Visualizations</h4>
            <ul>
              <li>Power BI Reports?</li>
              <li>Power BI Report Layout & Pages</li>
              <li>Adding Report Pages</li>
              <li>Saving a Power BI Report</li>
              <li>Choosing effective Visual</li>
              <li>Adding basics report functionality</li>
              <li>
                Out of Box Visuals
                <ul>
                  <li>Column & Bar Charts</li>
                  <li>Table & Matrix Visuals</li>
                  <li>Line & Area Charts</li>
                  <li>Pie, Donut & Tree map Chart</li>
                  <li>Column and line Combo Chart</li>
                  <li>One or Multiple Card Visual</li>
                  <li>Funnel, Gauge, Waterfall, KPI Charts</li>
                  <li>Scatter Chart & Bubble Chart</li>
                  <li>Geological Map & Filled Map Chart</li>
                </ul>
              </li>
              <li>Apply Filters, Slicing, and Sorting in Report</li>
              <li>Format & Configure Charts & Visualizations</li>
              <li>Change how visuals interact in Report</li>
              <li>Using Custom Visuals</li>
              <li>Additional Information Using Tool Tips</li>
              <li>Sort data in visualizations</li>
              <li>Publish your Power BI Report</li>
            </ul>
            <h4>7. Perform & Design Advance Data Analytics Using AI Visuals</h4>
            <ul>
              <li>What is Advance Analytics Reports?</li>
              <li>Identity Outliers</li>
              <li>Drill Down & Drill-Through in a Visualizations</li>
              <li>Using Q&A Visual</li>
              <li>Configure Conditional Formatting</li>
              <li>Design Report Navigations</li>
              <li>Adding Buttons & Controls</li>
              <li>How to Use Quick Insight</li>
              <li>Using Analyse Feature for Data Distribution</li>
              <li>Grouping & Binning in Data</li>
              <li>Decomposition Tree Visual</li>
            </ul>
            <h4>8. Create Power BI Dashboard</h4>
            <ul>
              <li>Introduction to Power BI Dashboard</li>
              <li>Report Vs. Dashboard</li>
              <li>Manage Dashboard Tiles</li>
              <li>Pin a tile to a Power BI Dashboard</li>
              <li>Pin a tile from different Report</li>
              <li>Pin an entire report Page to a Dashboard</li>
              <li>Customize Power BI Dashboard Using themes</li>
              <li>Power BI Service Data alerts</li>
              <li>Explore data by Q&A Feature</li>
              <li>Implement Quick Insights on your Data Set</li>
              <li>Create a Mobile View Dashboard</li>
              <li>Add an Image tile in Dashboard</li>
            </ul>
            <h4>9. Create Power BI Dashboard</h4>
            <ul>
              <li>Introduction to Workspace</li>
              <li>Create a Workspace</li>
              <li>Workspace Security Roles</li>
              <li>Create Power BI App</li>
              <li>Sharing and Managing Power BI Assets</li>
            </ul>
            <h4>10. Manage Power BI Service Dataset</h4>
            <ul>
              <li>Introduction to Power BI Dataset</li>
              <li>Dataset Scheduled Refresh</li>
              <li>Set Up a Refresh Schedule</li>
              <li>Gateway Connection</li>
              <li>Pin a Tile to a Power BI Dashboard</li>
              <li>Troubleshoot On-Premises Data Gateway Connection</li>
              <li>Power BI Row Level Security</li>
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
        <p className="marginBottom1">
          A Business Communication Course is beneficial for a wide range of
          individuals across various professional backgrounds.
        </p>
        <h3>
          Here are some groups of people who can greatly benefit from
          undertaking a Business Communication Course:
        </h3>
        <ul>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Students
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Aspiring
            Professionals
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Professionals in
            Leadership and Management Roles
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Sales and Marketing
            Professionals
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Customer Service
            Representatives
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Business
            Development Executives
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Project Managers
            and Team Members
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Human Resources
            Professionals
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Individuals Seeking
            Career Advancement
          </li>
        </ul>
        <p>
          While the above groups can benefit from a Business Communication
          Course, effective communication skills are essential for professionals
          in any industry or role. Good communication transcends job titles and
          is universally valuable for career growth and success.
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
      <CoursesSection heading="Explore Other Courses" />
    </main>
  );
}

export default page;
