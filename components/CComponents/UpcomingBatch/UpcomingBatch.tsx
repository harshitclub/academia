import React from "react";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";
import {
  RiCalendar2Fill,
  RiCalendar2Line,
  RiCalendarCheckLine,
  RiCalendarFill,
  RiPencilFill,
  RiTimeFill,
} from "react-icons/ri";

function UpcomingBatch({
  date1,
  day1,
  timing1,
  availability1,
  date2,
  day2,
  timing2,
  availability2,
  date3,
  day3,
  timing3,
  availability3,
}: {
  date1: string;
  day1: string;
  timing1: string;
  availability1: string;
  date2: string;
  day2: string;
  timing2: string;
  availability2: string;
  date3: string;
  day3: string;
  timing3: string;
  availability3: string;
}) {
  return (
    <section className="upcomingTable width95 maxWidth">
      <h2>Upcoming Batches</h2>
      <BigDivider />
      <h3>All The Upcoming Batches Are Mention Below.</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">
              Date <RiCalendarFill className="icoMargin18" />
            </th>
            <th scope="col">
              Days <RiCalendar2Fill className="icoMargin18" />
            </th>
            <th scope="col">
              Timing <RiTimeFill className="icoMargin18" />
            </th>
            <th scope="col">
              Availability <RiCalendarCheckLine className="icoMargin18" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">{date1}</td>
            <td data-label="Days">{day1}</td>
            <td data-label="Timing">{timing1}</td>
            <td data-label="Availability">{availability1}</td>
          </tr>
          <tr>
            <td data-label="Date">{date2}</td>
            <td data-label="Days">{day2}</td>
            <td data-label="Timing">{timing2}</td>
            <td data-label="Availability">{availability2}</td>
          </tr>
          <tr>
            <td data-label="Date">{date3}</td>
            <td data-label="Days">{day3}</td>
            <td data-label="Timing">{timing3}</td>
            <td data-label="Availability">{availability3}</td>
          </tr>
        </tbody>
      </table>
      <div className="courseCall flex alignCenter justifyCenter width100 spaceBtw">
        <h3>
          <RiCalendar2Line className="icoMargin20" /> Can’t find a batch you
          were looking for?
        </h3>
        <p>
          <a href="/">
            Request a Batch <RiPencilFill className="icoMargin18" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default UpcomingBatch;
