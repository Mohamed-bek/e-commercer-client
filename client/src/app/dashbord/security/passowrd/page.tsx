"use client";
import { ErrorHandler } from "@/app/log/page";
import ButtonIcon from "@/components/ButtonIcon";
import axios from "axios";
import Cookie from "cookie-universal";
import React, { useRef, useState } from "react";
import { BiCloset } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

type Props = {};

function page({}: Props) {
  const oldpasswordRef = useRef<HTMLDivElement>(null);
  const newPasswordRef = useRef<HTMLDivElement>(null);
  const confNewPasswordRef = useRef<HTMLDivElement>(null);
  const succes = useRef<HTMLDivElement>(null);
  const [oldpassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confNewPassword, setConfNewPassword] = useState<string>("");
  const [see, setSee] = useState(false);
  const cookie = Cookie();
  const UpdatePassword = async (e: any) => {
    e.preventDefault();
    if (oldpassword?.length < 6) {
      setSee(true);
      ErrorHandler(oldpasswordRef, "You Must Type Your Password");
      setTimeout(() => {
        setSee(false);
      }, 1500);
      return;
    }
    if (newPassword.length < 6) {
      setSee(true);
      ErrorHandler(newPasswordRef, "You Must Provide New Password");
      setTimeout(() => {
        setSee(false);
      }, 1500);
      return;
    }
    if (confNewPassword !== newPassword) {
      setSee(true);
      ErrorHandler(confNewPasswordRef, "Password not Match");
      ErrorHandler(newPasswordRef, "Password not Match");
      setTimeout(() => {
        setSee(false);
      }, 1500);
      return;
    }
    const { data } = await axios.put(
      "http://localhost:8000/user/password",
      {
        password: oldpassword,
        newPassword,
      },
      {
        headers: {
          Authorization: "Bearer " + cookie.get("token"),
        },
      }
    );
    if (!data.success) {
      if (data.message.includes("password is incorrect")) setSee(true);
      ErrorHandler(oldpasswordRef, "Password Is Incorrect");
      setTimeout(() => {
        setSee(false);
      }, 1500);
    }
    if (data.success) {
      succes.current?.classList.replace("scale-0", "scale-1");
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div
        ref={succes}
        className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] min-w-[350px] flex justify-center items-center h-[140px]  [transition:0.3s] z-50 scale-0 bg-black text-white"
      >
        <div
          onClick={() =>
            succes.current?.classList.replace("scale-1", "scale-0")
          }
          className=" cursor-pointer absolute top-0 right-0 rounded-full flex justify-center border border-solid border-black items-center w-10 h-10 bg-white text-black translate-x-1/3 -translate-y-1/3"
        >
          {" "}
          <IoClose className="text-[1.8rem]" />{" "}
        </div>
        <h1> Password Update Succesfuly </h1>
      </div>
      <div className="w-[300px]">
        <div
          ref={oldpasswordRef}
          className=" w-full py-2 px-3 rounded-[8px] bg-white mb-5 flex items-center justify-between border-[0.5px] border-solid border-black"
        >
          <input
            type={see ? "text" : "password"}
            placeholder="Password"
            className="outline-none bg-transparent"
            onChange={(e: any) => setOldPassword(e.target.value)}
            value={oldpassword}
          />
          {!see ? (
            <FaEye className=" cursor-pointer " onClick={() => setSee(true)} />
          ) : (
            <FaEyeSlash
              className=" cursor-pointer "
              onClick={() => setSee(false)}
            />
          )}
        </div>
        <div
          ref={newPasswordRef}
          className=" w-full py-2 px-3 rounded-[8px] bg-white mb-5 flex items-center justify-between border-[0.5px] border-solid border-black"
        >
          <input
            type={see ? "text" : "password"}
            placeholder="New Password"
            className="outline-none bg-transparent"
            onChange={(e: any) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          {!see ? (
            <FaEye className=" cursor-pointer " onClick={() => setSee(true)} />
          ) : (
            <FaEyeSlash
              className=" cursor-pointer "
              onClick={() => setSee(false)}
            />
          )}
        </div>
        <div
          ref={confNewPasswordRef}
          className=" w-full py-2 px-3 rounded-[8px] bg-white flex items-center justify-between border-[0.5px] border-solid border-black"
        >
          <input
            type={see ? "text" : "password"}
            placeholder="Confirm New Password"
            className="outline-none bg-transparent"
            onChange={(e: any) => setConfNewPassword(e.target.value)}
            value={confNewPassword}
          />
          {!see ? (
            <FaEye className=" cursor-pointer " onClick={() => setSee(true)} />
          ) : (
            <FaEyeSlash
              className=" cursor-pointer "
              onClick={() => setSee(false)}
            />
          )}
        </div>
        <div className=" text-center w-full">
          <ButtonIcon
            onClick={(e) => UpdatePassword(e)}
            icon={RiLockPasswordFill}
            content={"Update"}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
