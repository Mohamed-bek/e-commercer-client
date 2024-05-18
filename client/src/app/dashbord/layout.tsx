"use client";
import React, { useRef, useState } from "react";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { BiPurchaseTag } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import Refund from "@/components/Refund";
import Link from "next/link";
import { IUser } from "../layout";
import { IPurchase } from "../purchases/page";
import { userStore } from "../UserContext";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [refund, setRefund] = useState<IPurchase>();
  const [displayRefund, setDisplayRefund] = useState(false);
  const user = userStore((state: any) => state.user);
  const ul = useRef<HTMLUListElement>(null);
  const slideDiv = useRef<HTMLDivElement>(null);
  const toggleLigne = (target: any) => {
    const lis = ul.current?.querySelectorAll("li");
    lis?.forEach((li, i) => {
      if (target === li) {
        li.classList.add("active");
        if (slideDiv.current) {
          slideDiv.current.style.top = `${i * 13.5 + 6.1}%`;
        }
      } else {
        li.classList.remove("active");
      }
    });
  };

  return (
    <div className="w-100% h-[100vh] flex justify-center items-center bg-primary">
      <div className="cont flex items-center gap-5">
        <div
          className={`w-[100vw] h-[100vh] backdrop-filter backdrop-blur-[1px] top-0 left-0 z-50 bg-transparent absolute flex justify-center items-center ${
            displayRefund ? "flex" : "hidden"
          }`}
        >
          <Refund refund={refund as any} />
        </div>
        <ul
          ref={ul}
          className="relative rounded-lg max-w-[350px] min-w-[250px] w-[25%] items-center bg-white h-full flex flex-col justify-evenly "
        >
          <div
            ref={slideDiv}
            className={`absolute top-[6.1%] right-0 w-[2px] bg-black h-[7.5%] [transition:0.3s]`}
          >
            {" "}
          </div>
          <Link className="w-[90%]" href="/dashbord">
            <li
              className="cartButton hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <FaRegUser className="absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%] z-20 " />
              profile
            </li>
          </Link>
          <Link className="w-[90%]" href="/dashbord/favorites">
            <li
              className="cartButton hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <MdFavoriteBorder className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              favorites
            </li>
          </Link>
          {/* <li
          className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-[black] after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
          onClick={(e) =>
            (e.target as any).tagName === "LI"
              ? toggleLigne(e.target)
              : toggleLigne((e.target as any).parentNode)
          }
        >
          <LiaHandHoldingHeartSolid className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
          wishlist
        </li> */}
          <Link className="w-[90%]" href="/dashbord/purchases">
            <li
              className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <BiPurchaseTag className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              purchases
            </li>
          </Link>
          <Link className="w-[90%]" href="/dashbord/security">
            <li
              className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <GrSecure className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              security
            </li>
          </Link>
          <Link className="w-[90%]" href="/dashbord/saved">
            <li
              className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <FaRegBookmark className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              saved
            </li>
          </Link>
          <Link className="w-[90%]" href="/dashbord/notifications">
            <li
              className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <IoIosNotificationsOutline className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              notifications
            </li>
          </Link>
          <Link className="w-[90%]" href="/dashbord/beseller">
            <li
              className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
              onClick={(e) =>
                (e.target as any).tagName === "LI"
                  ? toggleLigne(e.target)
                  : toggleLigne((e.target as any).parentNode)
              }
            >
              <IoStorefrontOutline className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              be a seller
            </li>
          </Link>
        </ul>
        <div className="h-full w-[75%] flex flex-col gap-5 ">
          <header className="px-2 rounded-lg h-[12.5%] flex gap-3 items-center bg-white ">
            <img
              className="w-[50px] h-[50px] rounded-full "
              src={user.image?.url}
              alt="user avatar"
            />
            <p> {user.firstName + " " + user.lastName} </p>
          </header>
          <section className="h-[87.5%] bg-white rounded-lg">
            {children}
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
