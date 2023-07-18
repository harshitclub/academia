"use client";

import React from "react";
import "./style.css";
import {
  RiUser3Fill,
  RiMailFill,
  RiPhoneFill,
  RiBookReadFill,
  RiUserLocationFill,
} from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import axios from "axios";

function EnquiryForm() {
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    city: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);

  const sendContact = async (e: any) => {
    e.preventDefault();

    try {
      if (contact.name.length === 0) {
        alert("Enter Your Full Name");
      } else if (contact.email.length === 0) {
        alert("Enter Your Email");
      } else if (contact.phone.length === 0) {
        alert("Enter Your Phone Number");
      } else if (contact.email.length < 10) {
        alert("Enter Correct Number");
      } else if ((contact.course = "")) {
        alert("Fill Course Field");
      } else if (contact.state.length === 0) {
        alert("Enter Your State");
      } else if (contact.city.length === 0) {
        alert("Enter Your City");
      } else if (contact.address.length === 0) {
        alert("Enter Your Address");
      } else {
        setLoading(true);
        const response = await axios.post("/api/contact", contact);
        console.log("Message Sent", response.data);
      }
    } catch (error: any) {
      console.log("Failed", error.message);
    } finally {
      setLoading(false);
      contact.name = "";
      contact.email = "";
      contact.phone = "";
      contact.course = "";
      contact.state = "";
      contact.city = "";
      contact.address = "";
      contact.message = "";
    }
  };

  return (
    <form>
      <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
        <div className="inputsDiv width49 flex">
          <RiUser3Fill className="enqInputIcon" />
          <input
            placeholder="Enter Your Name"
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="inputsDiv width49 flex">
          <RiMailFill className="enqInputIcon" />
          <input
            placeholder="Enter Your Email"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
        <div className="inputsDiv width49 flex">
          <RiPhoneFill className="enqInputIcon" />
          <input
            placeholder="Contact Number"
            type="number"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
        <div className="inputsDiv width49 flex">
          <RiBookReadFill className="enqInputIcon" />
          <select
            value={contact.course}
            onChange={(e) => setContact({ ...contact, course: e.target.value })}
          >
            <option>Select Course</option>
            <option>Hello Corporate</option>
            <option>Art of Entrepreneurship</option>
            <option>Business Communication</option>
            <option>Data Analytics Using Excel</option>
            <option>Data Analytics Using Power Bi</option>
            <option>Data Analytics Using Power Query</option>
            <option>Artificial Intelligence</option>
            <option>Cyber Security</option>
            <option>Tableau</option>
            <option>MS Office Fundamentals</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
        <div className="inputsDiv width49 flex">
          <HiLocationMarker className="enqInputIcon" />
          <input
            placeholder="State"
            type="text"
            value={contact.state}
            onChange={(e) => setContact({ ...contact, state: e.target.value })}
          />
        </div>
        <div className="inputsDiv width49 flex">
          <RiUserLocationFill className="enqInputIcon" />
          <input
            placeholder="City"
            type="text"
            value={contact.city}
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
          />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter spaceBtw marginBottom05">
        <div className="width100">
          <textarea
            placeholder="Enter Your Address"
            rows={3}
            value={contact.address}
            onChange={(e) =>
              setContact({ ...contact, address: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex alignCenter justifyCenter spaceBtw">
        <div className="width100 marginBottom05">
          <textarea
            placeholder="Any Message"
            rows={5}
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
        </div>
      </div>
      <button onClick={sendContact}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default EnquiryForm;
