"use client";
import React, { useContext } from "react";
import "./style.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/Usercontext";
import { RiMailLine } from "react-icons/ri";
import { FcBusinessman, FcPhone } from "react-icons/fc";

function page() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const [logoutLoading, setLogoutLoading] = React.useState(false);

  const logout = async () => {
    try {
      setLogoutLoading(true);
      await axios.get("/api/logout");
      setLogoutLoading(false);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="profileContainer flex alignStart justifyCenter width95 maxWidth flexColumn">
        <div className="profileHead flex alignCenter justifyCenter spaceBtw width100">
          <h1>My Account</h1>
          <button onClick={logout}>
            {logoutLoading === true ? "Logging Out..." : "Logout"}
          </button>
        </div>
        <div className="accountContainer">
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <FcBusinessman className="margin-2" /> Name
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.fullName}` : <div className="loader"></div>}{" "}
            </div>
          </div>

          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <RiMailLine className="margin-2" /> Email
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.email}` : <div className="loader"></div>}
            </div>
          </div>
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <FcPhone className="margin-2" /> Phone
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.phone}` : <div className="loader"></div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
