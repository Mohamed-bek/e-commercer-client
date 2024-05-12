"use client";
import type { Metadata } from "next";
import Link from "next/link";
import React, { useLayoutEffect, useState, useRef } from "react";
import "./globals.css";
import { RiMenu3Line } from "react-icons/ri";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  address: string;
  avatar: {
    url: string;
    public_id: string;
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [urls, seturls] = useState([
    { url: "/", context: "Profile" },
    { url: "/notifications", context: "Notifications" },
    { url: "/products-admin", context: "Products" },
    { url: "/purchases", context: "Purchases" },
    { url: "/analytics", context: "Analytics" },
    { url: "/users", context: "Users" },
    { url: "/stores", context: "Stores" },
  ]);
  const navRef = useRef<HTMLElement>(null);
  const [linkActive, setlinkActive] = useState("/");
  const [role, setrole] = useState("admin");
  useLayoutEffect(() => {
    if (!window.localStorage.getItem("mode")) {
      window.localStorage.setItem("mode", "white");
    }
    window.localStorage.getItem("mode") === "dark"
      ? document.querySelector(":root")?.classList.add("active")
      : null;
  }, []);

  return (
    <html className="w-full" lang="en">
      <body className="w-full min-h-[100vh] bg-white text-black">
        {role === "admin" ? (
          <div className=" overflow-y-auto w-full h-[100vh] bg-primary p-5">
            <header className="w-full bg-white h-20 mb-5 rounded-lg flex items-center justify-between px-3">
              <div className="logo text-[1.4rem]"> Fashion </div>
              <div className="flex  items-center gap-5">
                <img
                  src=""
                  alt="img"
                  className="w-10 h-10 rounded-full border border-solid border-black"
                />
                <RiMenu3Line
                  onClick={() => navRef.current?.classList.toggle("active")}
                  className="text-[2rem] hidden menu cursor-pointer"
                />
              </div>
            </header>
            <section className="dashboardBox flex gap-5 relative overflow-hidden">
              <nav
                ref={navRef}
                className="w-1/5 h-full bg-white rounded-lg navDashboard"
              >
                {urls.map((url, i) => (
                  <Link
                    onClick={() => {
                      setlinkActive(url.url);
                      navRef.current?.classList.toggle("active");
                    }}
                    key={i}
                    className={`w-3/4 py-2 text-center rounded-2xl bg-white border border-solid border-black mx-auto my-3 block [transition:0.2s] hover:bg-primary hover:text-white links ${
                      linkActive === url.url ? "active" : ""
                    }`}
                    href={url.url}
                  >
                    {" "}
                    {url.context}{" "}
                  </Link>
                ))}
              </nav>
              <article className="w-4/5 h-full bg-white rounded-lg articleDash">
                {" "}
                {children}{" "}
              </article>
            </section>
          </div>
        ) : (
          <div className="w-full h-full">{children}</div>
        )}
      </body>
    </html>
  );
}
