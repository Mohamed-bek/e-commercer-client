import React, { FC, useState, useRef } from "react";
import { LuPencil } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import ButtonIcon from "./ButtonIcon";

type Props = {
  avatar: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  address: string;
  _id: string;
};

const Profile: FC<Props> = (user) => {
  const inputImg = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState<String>(user.firstName);
  const [lastName, setLastName] = useState<String>(user.lastName);
  const [birthday, setBirthday] = useState<String>(user.birthday);
  const [gender, setGender] = useState<String>(user.gender);
  const [address, setAddress] = useState<String>(user.address);
  const handleProfilePictureChange = async (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("profilePicture", file);
    formData.append("id", user._id);
    const options = {
      method: "POST",
      body: formData,
    };
    const res = await fetch("/upload-profilepicture", options);
    if (res.ok) {
      console.log("successfully uploaded profile picture");
      window.location.assign("");
    }
    if (!res.ok) {
      console.log("failed to upload profile picture");
    }
  };
  return (
    <div className="h-full w-full">
      <p className="ml-6 mt-3 relative w-20 h-20 rounded-3xl">
        <img
          src={user.avatar}
          alt="user avatar"
          className="w-full h-full rounded-3xl"
        />
        <LuPencil
          className="absolute bottom-0 right-0  w-7 h-[30px] p-1 text-[0.9rem] rounded-full border-solid border-[1px] border-[black] translate-x-1/4 translate-y-1/4 bg-[white] flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            inputImg.current?.click();
          }}
        />
        <input
          ref={inputImg}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            handleProfilePictureChange(e);
          }}
        />
      </p>
      <div className="flex h-[20%] flex-wrap items-center justify-around">
        <div>
          <p className="text-[1.1rem] font-medium tracking-[0.8px]">
            First Name{" "}
          </p>
          <p className="flex items-center gap-1 pl-3">
            {" "}
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868]"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName as string}
            />
          </p>
        </div>
        <div>
          <p className="text-[1.1rem] font-medium tracking-[0.8px]">
            {" "}
            Last Name{" "}
          </p>
          <p className="flex items-center gap-1 pl-3">
            {" "}
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868]"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName as string}
            />
          </p>
        </div>
      </div>
      <div className="flex h-[20%] flex-wrap items-center justify-around">
        <div>
          <p className="text-[1.1rem] font-medium tracking-[0.8px]">
            {" "}
            Birthday{" "}
          </p>
          <p className="flex items-center gap-1 pl-3">
            {" "}
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868]"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday as string}
            />
          </p>
        </div>
        <div>
          <p className="text-[1.1rem] font-medium tracking-[0.8px]"> Gender </p>
          <p className="flex items-center gap-1 pl-3">
            {" "}
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868]"
              onChange={(e) => setGender(e.target.value)}
              value={gender as string}
            />
          </p>
        </div>
      </div>
      <div className="flex h-[20%] flex-wrap items-center justify-around">
        <div>
          <p className="text-[1.1rem] font-medium tracking-[0.8px] ">
            {" "}
            Address{" "}
          </p>
          <p className="flex items-center gap-1 pl-3">
            {" "}
            <LuPencil
              onClick={(e) => {
                (e.target as any)
                  .closest("div")
                  .querySelector("input[type=text]")
                  .focus();
              }}
            />{" "}
            <input
              type="text"
              className=" bg-transparent w-fit focus:outline-none font-light text-[#696868]"
              onChange={(e) => setAddress(e.target.value)}
              value={address as string}
            />
          </p>
        </div>
      </div>
      <div className="flex justify-end pr-[10%]">
        {/* <button className="cartButton after:-z-0 hover:text-white hover:after:w-[210px] after:[transition:0.3s] after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-[black]  relative w-[220px] text-cente after:rounded-[20px] rounded-[20px] h-[50px] border-[1px] border-solid border-black py-2 mt-5 ">
          <FaTelegramPlane className="bg-black z-20 text-white border-[1px] border-solid [transition:0.3s] border-black absolute top-1/2 left-[-4px] translate-y-[-50%] h-[56px] w-[56px]  p-3 rounded-full" />
          <p className="relative z-20">Update</p>{" "}
        </button>{" "} */}
        <ButtonIcon icon={FaTelegramPlane} content="update" />
      </div>
    </div>
  );
};

export default Profile;
