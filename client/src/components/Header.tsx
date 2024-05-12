"use client";
import React from "react";
import { FaRegUser, FaRegMoon } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
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
        <FiShoppingCart className="text-[1.2rem] cursor-pointer" />
      </div>
    </header>
  );
}
