"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Verify Your Email</h1>
      <h2>{token ? `${token}` : "No Token"}</h2>
      {verified && (
        <div>
          <h2>Email Verified</h2>
          <a href="/login">Login</a>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
        </div>
      )}
    </>
  );
};

export default page;
