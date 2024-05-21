"use client";
import { useRef, useState, RefObject, useEffect } from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { RiUserAddLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Button from "@/components/Button";
import { userStore } from "../UserContext";
import axios from "axios";
import Cookie from "cookie-universal";

export const ErrorHandler = (
  Err: RefObject<HTMLDivElement | HTMLInputElement>,
  st: string
) => {
  if (Err.current?.tagName.toLowerCase() === "input") {
    const intValue: string = (Err.current as HTMLInputElement).value;
    (Err.current as HTMLInputElement).value = st;
    setTimeout(() => {
      (Err.current as HTMLInputElement).value = intValue;
    }, 1000);
  }
  if (Err.current?.tagName.toLowerCase() === "div") {
    const input = Err.current?.querySelector("input");
    if (input) {
      const intValue: string = input.value;
      input.value = st;
      setTimeout(() => {
        input.value = intValue;
      }, 1000);
    }
  }
  Err.current?.classList.add("error");
  setTimeout(() => {
    Err.current?.classList.remove("error");
  }, 1000);
};

const page = () => {
  const user = userStore((state: any) => state.user);
  const cookies = Cookie();

  useEffect(() => {
    console.log("user is the : ", user);
    console.log("user is the : ", user);
    console.log("user is the : ", user);
    console.log("user is the : ", user);
  }, []);

  const signup = useRef<HTMLDivElement>(null);
  const signin = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const signupForm = useRef<HTMLDivElement>(null);
  const signinForm = useRef<HTMLDivElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const emailInRef = useRef<HTMLInputElement>(null);
  const emailUpRef = useRef<HTMLInputElement>(null);
  const passwordInRef = useRef<HTMLDivElement>(null);
  const passwordUpRef = useRef<HTMLDivElement>(null);
  const conPasswordRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);
  const SuccessImg = useRef<HTMLDivElement>(null);

  const [see, setSee] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [emailUp, setEmailUp] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [gender, setGender] = useState("male");

  const [status, setStatus] = useState("normal");
  const [statusIn, setStatusIn] = useState("normal");

  // --------------- Error Handler for Sign Up and Sign In ----------------

  const SignUp = async (e: Event) => {
    e.preventDefault();
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (firstName.length < 3) {
      ErrorHandler(firstNameRef, "User Name must be at least 3 characters");
      return;
    }
    if (lastName.length < 3) {
      ErrorHandler(lastNameRef, "User Name must be at least 3 characters");
      return;
    }
    if (!emailRegex.test(emailUp)) {
      ErrorHandler(emailUpRef, "Email is not a valid");
      return;
    }
    if (passwordUp.length < 6) {
      ErrorHandler(passwordUpRef, "Password must be at least 6 characters");
      return;
    }
    setStatus("checking");
    const { data } = await axios.post("http://localhost:8000/signup", {
      firstName,
      lastName,
      password: passwordUp,
      email: emailUp,
      gender,
    });
    if (!data.success) {
      setStatus("error");
      if (data.message.includes("email")) {
        ErrorHandler(emailUpRef, data.message);
      }
      setTimeout(() => setStatus("normal"), 400);
    }
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setTimeout(() => {
        setStatus("checked");
        setTimeout(() => {
          Success("signup");
        }, 400);
      }, 400);
    }
  };

  const SignIn = async (e: Event) => {
    e.preventDefault();
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailIn)) {
      ErrorHandler(emailInRef, "Email is not a valid");
      return;
    }
    if (passwordIn.length < 6) {
      ErrorHandler(passwordInRef, "Password must be at least 6 characters");
      return;
    }
    setStatusIn("checking");
    const password = passwordIn;
    const email = emailIn;
    const { data } = await axios.post("http://localhost:8000/login", {
      password,
      email,
    });
    if (!data.success) {
      setStatus("error");
      if (data.message.includes("client not found")) {
        ErrorHandler(emailInRef, "Email does not exists");
      }
      if (data.message.includes("password is wrong")) {
        ErrorHandler(passwordInRef, "Password is wrong");
      }
      setTimeout(() => setStatusIn("normal"), 400);
    }
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
      cookies.set("token", data.tkn);
      setTimeout(() => {
        setStatusIn("checked");
        setTimeout(() => {
          Success("login");
        }, 400);
      }, 400);
    }
  };

  const Success = (st: string) => {
    box1.current?.classList.add("translate-x-[100%]");
    box3.current?.classList.add("translate-x-[-100%]");
    setTimeout(() => {
      box1.current?.classList.add("hidden");
      box3.current?.classList.add("hidden");
      box2.current?.classList.remove("left-[8%]");
      box2.current?.classList.add("translate-x-[-50%]", "left-[50%]");
      setTimeout(() => {
        box2.current?.classList.add("duration-500");
        box2.current?.classList.add("scale-110");
        setTimeout(() => {
          if (st === "signup") {
            signup.current?.classList.add("translate-y-[-200%]");
          } else {
            signin.current?.classList.add("translate-y-[100%]");
          }
          SuccessImg.current?.classList.remove("translate-y-[-300%]");
          SuccessImg.current?.classList.add("translate-y-[-200%]");
          setTimeout(() => (window.location.href = "/"), 200);
        }, 100);
      }, 200);
    }, 300);
  };

  const ClickHandler = (st: String) => {
    if (st === "up") {
      signin.current?.classList.replace(
        "translate-y-[100%]",
        "translate-y-[0%]"
      );
      signup.current?.classList.replace(
        "translate-y-[-100%]",
        "translate-y-[-200%]"
      );
      slider.current?.classList.replace("top-[60%]", "top-[20%]");
      signinForm.current?.classList.replace(
        "translate-y-[100%]",
        "translate-y-[0%]"
      );
      signupForm.current?.classList.replace(
        "translate-y-[-100%]",
        "translate-y-[-200%]"
      );
      setEmailUp("");
      setPasswordUp("");
      setConPassword("");
      setFirstName("");
      setLastName("");
    }
    if (st === "down") {
      signin.current?.classList.replace(
        "translate-y-[0%]",
        "translate-y-[100%]"
      );
      signup.current?.classList.replace(
        "translate-y-[-200%]",
        "translate-y-[-100%]"
      );
      slider.current?.classList.replace("top-[20%]", "top-[60%]");

      signinForm.current?.classList.replace(
        "translate-y-[0%]",
        "translate-y-[100%]"
      );
      signupForm.current?.classList.replace(
        "translate-y-[-200%]",
        "translate-y-[-100%]"
      );
      setEmailIn("");
      setPasswordIn("");
    }
    log.current?.classList.add("translate-y-[6px]");
    setTimeout(() => log.current?.classList.remove("translate-y-[6px]"), 200);
  };
  return (
    <div className="min-w-[100%] min-h-[100vh] flex justify-center items-center">
      <div
        ref={log}
        className="log duration-300 w-[90%] relative flex  items-center  h-[500px] mx-[auto] bg-transparent "
      >
        {/*-------------------- Slideer ---------------------------- */}
        <div
          className="w-[8%] justify-self-start h-full flex flex-col items-center [box-shadow:rgba(149,_157,_165,_0.2)_0px_8px_24px] duration-300"
          ref={box1}
        >
          <div
            ref={slider}
            className="h-[40%] absolute left-0 top-[20%] w-1 bg-primary duration-300"
          ></div>
          <div className="h-[20%] flex items-center justify-center">
            <div>
              <BiSolidCircleHalf className=" rotate-90 text-[40px] text-primary" />
              <BiSolidCircleHalf className=" rotate-90 text-[40px] translate-y-[-55%] text-primary" />
            </div>
          </div>
          <div
            className="w-full h-[40%] flex flex-col items-center justify-center"
            onClick={() => ClickHandler("up")}
          >
            <HiOutlineShieldCheck className="text-[30px] mb-3" />
            <p className="text-[16px]"> Sign in </p>
          </div>
          <div
            className="w-full h-[40%] flex flex-col items-center justify-center"
            onClick={() => ClickHandler("down")}
          >
            <RiUserAddLine className="text-[30px] mb-3" />
            <p className="text-[16px]"> Sign up</p>
          </div>
        </div>

        {/* ---------------- Sign images ----------------------*/}
        <div
          className="w-[54%] absolute left-[8%] top-[50%] translate-y-[-50%] z-50 duration-300 h-[105%] md:h-[110%]  xl:h-[130%] bg-primary overflow-hidden [box-shadow:rgba(149,_157,_165,_0.2)_0px_8px_24px]"
          ref={box2}
        >
          {/* ---------------- image Sing in -------------------- */}
          <div
            className="translate-y-[0%] h-full duration-300 flex items-center justify-center"
            ref={signin}
          >
            <Image
              src="/images/signin.png"
              alt="Example Image"
              layout="responsive"
              width={100}
              height={100}
              className=""
            />
          </div>
          {/* ---------------- image Sing up -------------------- */}
          <div
            className=" translate-y-[-200%] h-full duration-300 flex items-center justify-center"
            ref={signup}
          >
            <Image
              src="/images/signup.png"
              alt="Example Image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          {/* ---------------- image Success-------------------- */}
          <div
            className=" translate-y-[-300%] h-full duration-300 flex items-center justify-center"
            ref={SuccessImg}
          >
            <Image
              src="/images/success.png"
              alt="Example Image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* ---------------- Sign forms ----------------------*/}
        <div
          className="w-[38%] absolute right-0 top-0 h-full overflow-hidden [box-shadow:rgba(149,_157,_165,_0.2)_0px_8px_24px] duration-300"
          ref={box3}
        >
          {/* ---------------- Sign In from ----------------------*/}
          <div
            ref={signinForm}
            className="w-full h-full translate-y-[0%] flex items-center justify-center duration-300 "
          >
            <div className="w-full">
              <h1 className="text-[1rem] font-light text-center py-[20px]">
                You Don't Have an account ?{" "}
                <span
                  className=" text-blue-500 cursor-pointer"
                  onClick={() => ClickHandler("down")}
                >
                  {" "}
                  Sign Up{" "}
                </span>
              </h1>
              <form
                action=""
                className="w-[70%] mx-auto flex flex-col items-center gap-5 md:w-[90%]"
              >
                <input
                  ref={emailInRef}
                  type="email"
                  placeholder="Email"
                  className={`w-full py-2 px-3 rounded-[8px] bg-transparent max-w-[250px] outline-none border-[0.5px] border-solid border-black`}
                  onChange={(e: any) => setEmailIn(e.target.value)}
                  value={emailIn}
                />
                <div
                  className=" w-full py-2 px-3 rounded-[8px] bg-white max-w-[250px] flex items-center justify-between border-[0.5px] border-solid border-black"
                  ref={passwordInRef}
                >
                  <input
                    type={see ? "text" : "password"}
                    placeholder="Password"
                    className="outline-none bg-transparent"
                    onChange={(e: any) => setPasswordIn(e.target.value)}
                    value={passwordIn}
                  />
                  {!see ? (
                    <FaEye
                      className=" cursor-pointer "
                      onClick={() => setSee(true)}
                    />
                  ) : (
                    <FaEyeSlash
                      className=" cursor-pointer "
                      onClick={() => setSee(false)}
                    />
                  )}
                </div>
                <div
                  className="w-full max-w-[250px]"
                  onClick={(e) => SignIn(e as any)}
                >
                  <Button data="Sign In" status={statusIn} />
                </div>
                <div className="w-full max-w-[250px] flex items-center gap-3 ">
                  <button className="flex items-center gap-3 bg-[#316FF6] cursor-pointer w-[50%] py-2 px-3 rounded-[6px] text-white">
                    Facebook <FaFacebook className="text-[22px]" />
                  </button>
                  <button className="flex items-center cursor-pointer gap-3 bg-[#34A853] rounded-[6px] w-[50%] py-2 px-3 text-white">
                    {" "}
                    Google <FaGoogle className="text-[22px]" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ---------------- Sign Up from ----------------------*/}
          <div
            ref={signupForm}
            className="w-full h-full translate-y-[-200%] flex items-center justify-center duration-300"
          >
            <div className="w-full">
              <h1 className="text-[1rem] font-light text-center py-[20px]">
                You Have an account Already ?{" "}
                <span
                  className=" text-blue-500  cursor-pointer"
                  onClick={() => ClickHandler("up")}
                >
                  {" "}
                  Sign In{" "}
                </span>
              </h1>
              <form
                action=""
                className="w-[70%] mx-auto flex flex-col items-center gap-5 md:w-[90%]"
              >
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="First Name"
                  className=" w-full py-2 px-3 rounded-[8px] bg-white max-w-[250px] outline-none border-[0.5px] border-solid border-black"
                  onChange={(e: any) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last Name"
                  className=" w-full py-2 px-3 rounded-[8px] bg-white max-w-[250px] outline-none border-[0.5px] border-solid border-black"
                  onChange={(e: any) => setLastName(e.target.value)}
                  value={lastName}
                />
                <input
                  ref={emailUpRef}
                  type="email"
                  placeholder="Email"
                  className=" w-full py-2 px-3 rounded-[8px] bg-white max-w-[250px] outline-none border-[0.5px] border-solid border-black"
                  onChange={(e: any) => setEmailUp(e.target.value)}
                  value={emailUp}
                />
                <div
                  className=" w-full py-2 px-3 rounded-[8px] bg-white max-w-[250px] flex items-center justify-between border-[0.5px] border-solid border-black"
                  ref={passwordUpRef}
                >
                  <input
                    type={see ? "text" : "password"}
                    placeholder="Password"
                    className="outline-none bg-transparent"
                    onChange={(e: any) => setPasswordUp(e.target.value)}
                    value={passwordUp}
                  />
                  {!see ? (
                    <FaEye
                      className=" cursor-pointer "
                      onClick={() => setSee(true)}
                    />
                  ) : (
                    <FaEyeSlash
                      className=" cursor-pointer "
                      onClick={() => setSee(false)}
                    />
                  )}
                </div>
                <div className="flex gap-5 items-center">
                  <div>
                    <label
                      htmlFor="male"
                      className={` py-2 w-20 text-center block rounded-md cursor-pointer border border-black border-solid text-[1.1rem] ${
                        gender === "male"
                          ? "bg-primary text-white border-none"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        setGender("male");
                      }}
                    >
                      {" "}
                      Male{" "}
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="female"
                      className={` py-2 w-20 text-center block rounded-md cursor-pointer border border-black border-solid text-[1.1rem] ${
                        gender === "female"
                          ? "bg-primary text-white border-none"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        setGender("female");
                        console.log(gender);
                      }}
                    >
                      {" "}
                      Female{" "}
                    </label>
                  </div>
                </div>
                <div
                  className="w-full max-w-[250px]"
                  onClick={(e: any) => SignUp(e)}
                >
                  <Button data="Sign Up" status={status} />
                </div>
                <div className="w-full max-w-[250px] flex items-center gap-3 ">
                  <button className="flex items-center gap-3 bg-[#316FF6] cursor-pointer w-[50%] py-2 px-3 rounded-[6px] text-white">
                    Facebook <FaFacebook className="text-[22px]" />
                  </button>
                  <button className="flex items-center cursor-pointer gap-3 bg-[#34A853] rounded-[6px] w-[50%] py-2 px-3 text-white">
                    {" "}
                    Google <FaGoogle className="text-[22px]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
