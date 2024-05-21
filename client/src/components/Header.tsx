"use client";
import React from "react";
import { FaRegUser, FaRegMoon } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { cartStore } from "@/app/UserContext";
type Props = {};

export default function Header({}: Props) {
  const cart = cartStore((state) => state.cart);
  return (
    <header className="w-full flex justify-between items-center px-1 py-3 ">
      <div className="logo text-[1.6rem]"> Fashion </div>
      <div className="flex items-center gap-5">
        {" "}
        <Link href={"/dashbord"}>
          {" "}
          <FaRegUser className="text-[1.2rem] cursor-pointer" />{" "}
        </Link>
        <FaRegMoon
          onClick={() => {
            document.querySelector(":root")?.classList.toggle("active");
            window.localStorage.getItem("graphBorderColor") ===
            "rgba(96,125,139,1)"
              ? window.localStorage.setItem(
                  "graphBorderColor",
                  "rgba(255,242,206,1)"
                )
              : window.localStorage.setItem(
                  "graphBorderColor",
                  "rgba(96,125,139,1)"
                );
            window.localStorage.getItem("graphColor") === "rgba(96,125,139,0.5)"
              ? window.localStorage.setItem(
                  "graphColor",
                  "rgba(255,242,206,0.5)"
                )
              : window.localStorage.setItem("graphColor", "rgba(96,125,139,1)");

            window.localStorage.getItem("mode") === "dark"
              ? window.localStorage.setItem("mode", "white")
              : window.localStorage.setItem("mode", "dark");
          }}
          className="text-[1.2rem] cursor-pointer"
        />
        <div className="relative">
          {cart && (
            <span className=" absolute top-0 right-0 text-[white] bg-[red] w-4 h-4 flex justify-center items-center text-[0.8rem] rounded-full translate-x-1/2 -translate-y-3/4">
              {cart?.length.toString()}
            </span>
          )}
          <FiShoppingCart
            onClick={() =>
              document
                .querySelector(".Cart")
                ?.classList.replace("translate-x-full", "translate-x-0")
            }
            className="text-[1.2rem] cursor-pointer "
          />
        </div>
      </div>
    </header>
  );
}
