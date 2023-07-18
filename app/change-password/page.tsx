"use client";

import React from "react";
import "./style.css";
import { FcLock, FcPrivacy, FcSettings } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [password, setPassword] = React.useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = React.useState(false);

  const changePassword = async (e: any) => {
    e.preventDefault();

    try {
      if (password.oldPassword.length === 0) {
        alert("Old Password Emplty!");
      } else if (password.newPassword.length === 0) {
        alert("New Password Empty!");
      } else if (password.newPassword.length < 8) {
        alert("Minimum Password Length is 8 Characters!");
      } else if (password.confirmPassword.length === 0) {
        alert("Confirm Password Empty!");
      } else if (password.newPassword !== password.confirmPassword) {
        alert("Password & Confirm Password are not same!");
      } else {
        setLoading(true);
        const res = await axios.post("/api/change-password", password);
        alert(res.data.message);
        await axios.get("/api/logout");
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="changePasswordContainer width95 flex alignCenter justifyCenter flexColumn">
        <h1>
          Change Password <FcSettings className="margin-2" />
        </h1>

        <div className="changePForm">
          <form>
            <div className="cpInputs flex alignCenter justifyCenter">
              <FcLock className="cpIcon" />{" "}
              <input
                placeholder="Old Password"
                type="password"
                value={password.oldPassword}
                onChange={(e) =>
                  setPassword({ ...password, oldPassword: e.target.value })
                }
              />
            </div>
            <div className="cpInputs flex alignCenter justifyCenter">
              <FcPrivacy className="cpIcon" />{" "}
              <input
                placeholder="New Password"
                type="password"
                value={password.newPassword}
                onChange={(e) =>
                  setPassword({ ...password, newPassword: e.target.value })
                }
              />
            </div>
            <div className="cpInputs flex alignCenter justifyCenter marginBottom1">
              <FcPrivacy className="cpIcon" />{" "}
              <input
                placeholder="Confirm New Password"
                type="password"
                value={password.confirmPassword}
                onChange={(e) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
              />
            </div>
            <button onClick={changePassword}>
              {loading ? "Processing..." : "Change Password"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default page;
