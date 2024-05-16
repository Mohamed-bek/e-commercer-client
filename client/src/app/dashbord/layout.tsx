"use client";
import React, { useRef, useState } from "react";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { BiPurchaseTag } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";

import { IPurchase } from "@/components/Purchases";
import Refund from "@/components/Refund";
import Link from "next/link";

function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [refund, setRefund] = useState<IPurchase>();
  const [displayRefund, setDisplayRefund] = useState(false);
  const [products, setProducts] = useState([
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      sellerName: "seller 1",
      _id: "id 1",
      price: 205,
      rating: 5,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 2",
      sellerName: "seller 2",
      _id: "id 2",
      price: 100,
      rating: 3,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 3",
      sellerName: "seller 3",
      _id: "id 3",
      price: 399,
      rating: 4,
    },
  ]);
  const [user, setUser] = useState({
    firstName: "Mohamed",
    lastName: "Bekkouche",
    birthday: "12/20/2023",
    gender: "male",
    address: "constantine",
    _id: "123dsqd3",
    avatar:
      "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
  });
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
          <Refund refund={refund as IPurchase} />
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
          <li
            className="cartButton hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord">
              <FaRegUser className="absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%] z-20 " />
              profile
            </Link>
          </li>
          <li
            className="cartButton hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord/favorites">
              <MdFavoriteBorder className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              favorites
            </Link>
          </li>
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
          <li
            className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord/purchases">
              <BiPurchaseTag className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              purchases
            </Link>
          </li>
          <li
            className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord/security">
              <GrSecure className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              security
            </Link>
          </li>
          <li
            className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord/saved">
              <FaRegBookmark className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              saved
            </Link>
          </li>
          <li
            className="cartButton  hover:text-white z-20 after:-z-10 after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-black after:[transition:0.3s] [transition:0.3s] after:rounded-2xl  mx-auto  px-3 relative gap-3 py-3 text-[1.2rem] capitalize cursor-pointer text-center bg-white text-black w-4/6 rounded-2xl h-[50px]"
            onClick={(e) =>
              (e.target as any).tagName === "LI"
                ? toggleLigne(e.target)
                : toggleLigne((e.target as any).parentNode)
            }
          >
            <Link href="/dashbord/notifications">
              <IoIosNotificationsOutline className=" absolute left-[-10px] top-1/2 w-[54px] h-[54px] p-4 border-solid border-[1px] bg-black text-white border-black rounded-full translate-y-[-50%]" />
              notifications
            </Link>
          </li>
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
        </ul>
        <div className="h-full w-[75%] flex flex-col gap-5 ">
          <header className="px-2 rounded-lg h-[12.5%] flex gap-3 items-center bg-white ">
            <img
              className="w-[50px] h-[50px] rounded-full "
              src={user.avatar}
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
