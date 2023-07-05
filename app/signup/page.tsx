"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import React from "react";
import "./style.css";
import signupImage from "@/public/assets/signup.jpg";
import {
  RiLockPasswordLine,
  RiLoginBoxLine,
  RiMailLine,
  RiPhoneLine,
  RiUser3Line,
} from "react-icons/ri";
import BigDivider from "@/components/BigDivider/BigDivider";
import { toast } from "react-hot-toast";

function page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (user.fullName.length === 0) {
        alert("Full Name is Required!");
      } else if (user.email.length === 0) {
        alert("Email is Required!");
      } else if (user.phone.length === 0) {
        alert("Phone Number is Required!");
      } else if (user.phone.length < 10) {
        alert("Invalid Number");
      } else if (user.password.length === 0) {
        alert("Password is Required!");
      } else if (user.password.length < 8) {
        alert("Minimum Password Length is 8 Characters!");
      } else {
        const response = await axios.post("/api/signup", user);
        console.log("Signup Success", response.data);
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signupContainer width95 maxWidth alignCenter justifyCenter flex">
        <div className="signupBox width80 flex alignCenter justifyCenter">
          <div className="signupImage width50">
            <Image src={signupImage} alt="" />
          </div>
          <div className="signupForm width50">
            <h1>Signup</h1>
            <BigDivider />
            <p>
              "Your Exclusive Ticket to Savings: Sign Up Now for a{" "}
              <span>Discount Voucher</span>!"
            </p>
            <form>
              <div className="signupInputs flex alignCenter justifyCenter">
                <RiUser3Line className="signupIcons" />
                <input
                  placeholder="Full Name"
                  type="text"
                  value={user.fullName}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                />
              </div>
              <div className="signupInputs flex alignCenter justifyCenter">
                <RiMailLine className="signupIcons" />
                <input
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="signupInputs flex alignCenter justifyCenter">
                <RiPhoneLine className="signupIcons" />
                <input
                  placeholder="Phone"
                  type="number"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
              <div className="signupInputs flex alignCenter justifyCenter">
                <RiLockPasswordLine className="signupIcons" />
                <input
                  placeholder="Password"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div>
                <button onClick={onSignup}>
                  {loading ? "Processing..." : "Signup"}
                </button>
              </div>
            </form>
            <div className="loginLink">
              <p>
                Already Have An Accound?{" "}
                <a href="/login">
                  Login <RiLoginBoxLine className="loginLinkIcon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
