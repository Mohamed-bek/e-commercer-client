"use client";
import Link from "next/link";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoAdd } from "react-icons/io5";
import { MdOutlineQueryStats, MdPhotoCamera } from "react-icons/md";
import Image from "next/image";

function Store() {
  const profilePictureRef = useRef(null);
  const coverRef = useRef(null);
  
  const [avatar, setAvatar] = useState<string>(
    "/images/Avatar-Profile-Vector-PNG-File.png"
  );
  const [cover, setCover] = useState<string>("/images/cover.jpg");

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
  ) => {
    const selectedFile = (e.target.files as any)[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setState(imageUrl);
  };
  return (
    <div className="w-full h-[100vh] bg-white">
      <div className="w-[90%] mx-auto h-full">
        <div className="w-full h-4/6 relative">
          <button
            onClick={() => (coverRef.current as any).click()}
            className=" absolute bottom-4 right-3 flex items-center gap-2 bg-[white] text-[black] py-1 px-2 rounded-sm cursor-pointer z-50"
          >
            {" "}
            <MdPhotoCamera className="mt-[2px]" /> <span> Change Cover </span>{" "}
            <input
              ref={coverRef}
              type="file"
              className="hidden"
              onChange={(e) => handleImageUpload(e, setCover)}
            />
          </button>
          <div className="w-full h-full absolute left-0 top-1/2  -translate-y-1/2 overflow-hidden  rounded-br-md rounded-bl-md">
            <img className="w-full" src={cover} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-end -translate-y-[15%] pb-4 border-b-[0.5px] border-solid border-[#b7b7b7]">
          <div className="flex gap-6 items-end ">
            <div className="w-32 h-32 rounded-full relative border border-[black] border-solid">
              <MdPhotoCamera
                className="w-[30px] h-[30px] flex justify-center items-center border border-solid border-black bg-[white] z-50 text-[black] bottom-[10px] -right-[3px] absolute rounded-[50%] p-[4px] cursor-pointer"
                onClick={() => (profilePictureRef.current as any).click()}
              />
              <input
                ref={profilePictureRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setAvatar)}
              />
              <div className="w-full h-full rounded-full relative overflow-hidden bg-white">
                <img
                  className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={avatar}
                  alt="No img here"
                />
              </div>
            </div>
            <h1 className="text-[2rem] font-semibold mb-6"> Store Name </h1>
          </div>
          <div className="flex gap-3 items-center mb-6">
            <Link
              href="/product"
              className="bg-primary text-white py-[6px] px-4 flex gap-2 items-center hover:bg-primaryHover [transition:0.15s]"
            >
              {" "}
              <IoAdd className="text-[1.15rem]" />
              Add Product{" "}
            </Link>
            <button className="bg-black text-white py-[6px] px-4 flex gap-2 items-center  hover:bg-BgWhite [transition:0.15s]">
              {" "}
              <MdOutlineQueryStats className="text-[1.15rem]" />
              Get Statistics
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center p-2">
          <ul className="flex items-center gap-3 ">
            <li className="py-1 px-3 rounded-sm text-[1.1rem] text-white cursor-pointer bg-black [transition:0.15s] hover:bg-BgWhite">
              {" "}
              Products{" "}
            </li>
            <Link
              href="/followers"
              className="py-1 px-3 rounded-sm text-[1.1rem] text-white cursor-pointer bg-black [transition:0.15s] hover:bg-BgWhite"
            >
              {" "}
              Followers{" "}
            </Link>
            <Link
              href="/sales"
              className="py-1 px-3 rounded-sm text-[1.1rem] text-white cursor-pointer bg-black [transition:0.15s] hover:bg-BgWhite"
            >
              {" "}
              Sales{" "}
            </Link>
          </ul>
          <button className="py-1 px-3 rounded-sm text-[1.1rem] text-white cursor-pointer bg-primary [transition:0.15s] hover:bg-primaryHover">
            {" "}
            Contact Admin{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Store;
