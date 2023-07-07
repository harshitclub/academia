"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/Usercontext";
import {
  RiLockPasswordLine,
  RiMailLine,
  RiPercentLine,
  RiPhoneLine,
  RiUser3Line,
} from "react-icons/ri";

function page() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [data, setData] = useState("nothing");

  // voucher verify
  const [voucherId, setVoucherId] = React.useState({
    hashVoucher: "",
  });
  const [isVerified, setIsVerified] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const verifyVoucher = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/verifyvoucher", voucherId);

      setIsVerified(res.data.message);
    } catch (error: any) {
      console.log("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

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
      {/* {user ? (
        <>
          <h1>{user.fullName}</h1>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.voucher}</h2>
        </>
      ) : (
        "Nothing to Show"
      )} */}
      <section className="profileContainer flex alignStart justifyCenter width95 maxWidth flexColumn">
        <div className="profileHead flex alignCenter justifyCenter spaceBtw width100">
          <h1>My Account</h1>
          <button onClick={logout}>Logout</button>
        </div>
        <div className="accountContainer">
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <RiUser3Line className="margin-2" /> Name
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.fullName}` : <div className="loader"></div>}
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
                <RiPhoneLine className="margin-2" /> Phone
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.phone}` : <div className="loader"></div>}
            </div>
          </div>
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <RiPercentLine className="margin-2" /> Voucher ID
              </h4>
            </div>
            <div className="accountInfo">
              {user ? `${user.voucher}` : <div className="loader"></div>}
            </div>
          </div>
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <RiPercentLine className="margin-2" /> Verify Voucher
              </h4>
            </div>
            <div className="accountInfo">
              <input
                placeholder="Copy & Paste Your Voucher ID"
                type="text"
                value={voucherId.hashVoucher}
                onChange={(e) =>
                  setVoucherId({ ...voucherId, hashVoucher: e.target.value })
                }
              />
              <button onClick={verifyVoucher}>Verify</button>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <p className="verificationData">
                  {isVerified ? `${isVerified}` : ""}
                </p>
              )}
            </div>
          </div>
          <div className="accountBox">
            <div className="accountHeading">
              <h4>
                <RiLockPasswordLine className="margin-2" />
                Password
              </h4>
            </div>
            <div className="accountInfo">
              <p className="fPasswordBtn">Forget Password</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
