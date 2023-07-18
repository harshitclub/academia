"use client";

import React, { useContext } from "react";
import { UserContext } from "@/context/Usercontext";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";
import signupImage from "@/public/assets/signup.jpg";
import Image from "next/image";

function SignupSection() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {user ? null : (
        <section className="signupSection flex width100 alignStart justifyCenter">
          <div className="signupSContainer width95 maxWidth flex alignCenter justifyCenter spaceBtw">
            <div className="signupSCLeft width50">
              <h2>Signup Now</h2>
              <BigDivider />
              <p>
                "Empowering Dreams, Empowering You: Campus Sutras - Where
                Success Begins!"
              </p>
              <p className="marginBottom2">
                As a token of our appreciation, we are thrilled to offer you a
                special <span>₹1000</span> voucher upon signing up that is
                applicable on any of our training programs.
              </p>
              <p>
                <a href="/signup">Singup Now</a>
              </p>
            </div>
            <div className="signupSCRight width50 flex alignCenter justifyCenter">
              <Image src={signupImage} alt="" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SignupSection;
