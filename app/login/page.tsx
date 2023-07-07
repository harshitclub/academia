"use client";
import React from "react";
import loginImage from "@/public/assets/login.jpg";
import Image from "next/image";
import { RiLockPasswordLine, RiLoginBoxLine, RiMailLine } from "react-icons/ri";
import "./style.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      console.log("Login Success!", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="loginContainer width95 maxWidth alignCenter justifyCenter flex">
        <div className="loginBox width80 flex alignCenter justifyCenter">
          <div className="loginImage width50">
            <Image src={loginImage} alt="" />
          </div>
          <div className="loginForm width50">
            <h1>Login</h1>

            <form>
              <div className="loginInputs flex alignCenter justifyCenter">
                <RiMailLine className="loginIcons" />
                <input
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="loginInputs flex alignCenter justifyCenter">
                <RiLockPasswordLine className="loginIcons" />
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
                <button onClick={onLogin}>
                  {loading ? "Logging..." : "Login"}
                </button>
              </div>
            </form>
            <div className="signupLink">
              <p>
                Not Have An Account?{" "}
                <a href="/signup">
                  Signup <RiLoginBoxLine className="signupLinkIcon" />
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
