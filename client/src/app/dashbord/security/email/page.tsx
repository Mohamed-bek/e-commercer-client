"use client";
import { ErrorHandler } from "@/app/log/page";
import ButtonIcon from "@/components/ButtonIcon";
import axios from "axios";
import Cookie from "cookie-universal";
import React, { useRef, useState } from "react";

import { IoClose } from "react-icons/io5";

import { IoMdMail } from "react-icons/io";
import { IUser } from "@/app/layout";

type Props = {};

function page({}: Props) {
  const storedUserData = window.localStorage.getItem("user");
  const initialUserState = storedUserData ? JSON.parse(storedUserData) : {};
  const [user, setUser] = useState<IUser>(initialUserState);
  const oldEmailRef = useRef<HTMLInputElement>(null);
  const newEmailRef = useRef<HTMLInputElement>(null);
  const succes = useRef<HTMLDivElement>(null);
  const [newEmail, setNewEmail] = useState<string>("");
  const [oldEmail, setOldEmail] = useState<string>(user.email);
  const cookie = Cookie();
  const UpdatePassword = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.put(
      "http://localhost:8000/user/email",
      {
        email: newEmail,
      },
      {
        headers: {
          Authorization: "Bearer " + cookie.get("token"),
        },
      }
    );
    if (!data.success) {
      if (data.message.includes("Email is already used"))
        ErrorHandler(newEmailRef, "Email Is Already Used");
    }
    if (data.success) {
      window.localStorage.setItem("user", JSON.stringify(data.user));
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
        <h1> Email Update Succesfuly </h1>
      </div>
      <div className="w-[300px]">
        <input
          ref={oldEmailRef}
          type="email"
          placeholder="Email"
          className="mb-5 w-full py-2 px-3 rounded-[8px] bg-white outline-none border-[0.5px] border-solid border-black"
          value={oldEmail}
        />
        <input
          ref={newEmailRef}
          type="email"
          placeholder="Email"
          className=" w-full py-2 px-3 rounded-[8px] bg-white  outline-none border-[0.5px] border-solid border-black"
          onChange={(e: any) => setNewEmail(e.target.value)}
          value={newEmail}
        />
        <div className="text-center w-full">
          <ButtonIcon
            onClick={(e) => UpdatePassword(e)}
            icon={IoMdMail}
            content={"Update"}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
