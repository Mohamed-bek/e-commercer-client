"use client";
import Header from "@/components/Header";
import { TbHandClick } from "react-icons/tb";
import { useEffect, useState } from "react";
import SwiperSlider from "@/components/Swiper";
import { IProduct } from "@/components/SmallCard";
import Link from "next/link";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";

const Home = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
