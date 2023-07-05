"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const Userprovider = ({ children }) => {
  const [user, setUser] = useState(false);

  const getUser = async () => {
    const res = await axios.get("/api/me");

    console.log(res.data);
    setUser(res.data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
