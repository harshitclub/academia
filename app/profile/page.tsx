"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/Usercontext";

function page() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <>
      {user ? (
        <>
          <h1>{user.fullName}</h1>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.voucher}</h2>
        </>
      ) : (
        "Nothing to Show"
      )}
    </>
  );
}

export default page;
