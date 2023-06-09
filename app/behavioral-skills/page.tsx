import React from "react";
import "./style.css";
import UpcomingBatch from "@/components/CComponents/UpcomingBatch/UpcomingBatch";
import { RiCheckboxCircleFill, RiDownloadLine } from "react-icons/ri";
import CourseGraph from "@/components/CComponents/CourseGraph/CourseGraph";
import bSkills from "../../public/assets/bSkills.jpg";
import CourseHero from "@/components/CComponents/CourseHero/CourseHero";
import CoursesSection from "@/components/Home/CoursesSection/CoursesSection";

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
      <section className="bSkillsBody flex alignStart justifyCenter spaceBtw width95 maxWidth">
        <div className="bSkillsBLeft width60">
          <h2>Overview</h2>
          <p>
            Join our Behavioral Skills course and unlock the door to personal
            and professional success. Step into a world of self-discovery, where
            you will gain the confidence, self-awareness, and interpersonal
            finesse needed to navigate the complexities of today's dynamic and
            fast-paced world. Whether you aspire to be an influential leader, an
            effective communicator, or a master collaborator, our course will
            empower you to transcend your potential and become the best version
            of yourself.
          </p>
          <h3>Benefits of Doing This Course</h3>
          <ul>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Enhanced
              Communication
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Leadership
              Development
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Conflict
              Resolution
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Adaptability and
              Resilience
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Effective
              Teamwork
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Increased
              Self-Awareness
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Professional
              Image and Presence
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Improved Customer
              Relations
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Networking and
              Relationship Building
            </li>
            <li>
              <RiCheckboxCircleFill className="icoMargin18" /> Recognized
              Certification
            </li>
          </ul>
        </div>
        <div className="bSkillsBRight width40">
          <h2>Course Content</h2>
          <div className="bSkillsContent">
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
          A behavioral skills course is beneficial for a wide range of
          individuals across various professional backgrounds.
        </p>
        <h3>
          Here are some groups of people who can greatly benefit from
          undertaking a behavioral skills course:
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
            Leadership Roles
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Employees Seeking
            Career Advancement
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Recent Graduates
            and Entry-Level Professionals
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Professionals
            Transitioning to New Roles or Industries
          </li>
          <li>
            <RiCheckboxCircleFill className="icoMargin18" /> Customer-Facing
            Professionals
          </li>
        </ul>
        <p>
          It is worth noting that while the above groups can benefit from
          behavioral skills training, these courses can be valuable for
          individuals in any professional setting who seek to enhance their
          communication, leadership, teamwork, adaptability, and other
          behavioral competencies.
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
