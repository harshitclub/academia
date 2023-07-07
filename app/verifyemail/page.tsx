"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { TbMail } from "react-icons/tb";
import { FcApproval, FcHighPriority } from "react-icons/fc";

const page = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) verifyUserEmail();
  }, [token]);

  return (
    <>
      <section className="verifyEmail width100 flex alignCenter justifyCenter">
        <div className="verifyEmailContainer width95 ">
          <h1>
            Verify Your Email Address <TbMail className="margin-3" />
          </h1>
          <h2>{token ? `Processing...` : "Processing..."}</h2>
          {verified && (
            <div>
              <h2>
                Email Verified <FcApproval className="margin-2" />
              </h2>
              <p>
                <a href="/login">Login</a>
              </p>
            </div>
          )}
          {error && (
            <h2>
              Error <FcHighPriority className="margin-2" />
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
