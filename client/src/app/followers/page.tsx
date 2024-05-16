"use client";
import CircleBar from "@/components/CircleBar";
import React, { useState, useRef, useEffect } from "react";
import ChartComponent from "@/components/ChartComponent";

type Props = {};

function page({}: Props) {
  const [pecantage, setPecantage] = useState(30);
  const [followers, setFollowers] = useState([
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 25,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 30,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 55,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 20,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 30,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 18,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 16,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 16,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 16,
    },
    {
      _id: "purchases1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      gender: "male",
      location: "constantine",
      age: 16,
    },
  ]);

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const salesData = [
    5500, 880, 3000, 1000,
    // [1000, 1200, 800, 1500], // Sales data for Week 1
    // [1200, 1300, 900, 1600], // Sales data for Week 2
    // [1100, 1250, 850, 1550], // Sales data for Week 3
    // [1300, 1400, 950, 1700], // Sales data for Week 4
  ];

  const dataline = {
    labels: weeks,
    datasets: [
      {
        label: "Total Sales",
        data: salesData,
        backgroundColor: `${window.localStorage.getItem("graphColor")}`,
        borderColor: `${window.localStorage.getItem("graphBorderColor")}`,
        fill: false,
      },
    ],
  };

  const optionsline = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value: any) {
            if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + "M";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + "K";
            } else {
              return value.toString();
            }
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="followers w-full h-[100vh] py-5 flex justify-center items-center bg-primary">
      <div className="cont flex gap-5 items-center">
        <div className="h-full w-30% flex flex-col gap-5">
          <div className="bg-white h-1/2 rounded-xl p-2 ">
            <h2 className="text-[1.7rem] -mb-1"> Followers Increased </h2>
            <p className=" capitalize text-[0.9rem] font-[300] pl-1">
              {" "}
              this month total data{" "}
            </p>
            <div className="w-[180px] h-[180px] flex justify-center items-center my-2 mx-auto">
              <CircleBar percentage={pecantage} />
            </div>
            <p className="text-[1.2rem] font-[300] capitalize px-2">
              {" "}
              followers volume{" "}
              {pecantage < 0
                ? "infortunately decreased "
                : "fortunately increased "}{" "}
            </p>
          </div>
          <div className="bg-white w-full h-1/2 p-3 rounded-xl">
            <h2 className="text-[1.7rem] mb-1 "> Followers Analytics </h2>
            <div className="chart w-full h-max flex justify-center items-center py-3">
              <ChartComponent
                type="line"
                data={dataline}
                options={optionsline as any}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-[70%] h-full p-2 rounded-xl">
          <div className="h-[100px]">
            <h2 className="text-[1.7rem] -mb-1"> Totale Followers </h2>
            <p className=" capitalize text-[0.9rem] font-[300] pl-1">
              {" "}
              this year total data{" "}
            </p>
            <ul className="flex items-center border-b border-solid border-[gray] py-2">
              <li className="w-[35%] text-[gray] text-[0.9rem]">Follower</li>
              <li className="w-[30%] text-[gray] text-[0.9rem] pl-3 text-center">
                Age
              </li>
              <li className="w-[20%] text-center text-[gray] text-[0.9rem]">
                Gender{" "}
              </li>
              <li className="w-[20%] text-end pr-3 text-[gray] text-[0.9rem]">
                {" "}
                Location{" "}
              </li>
            </ul>
          </div>
          <div className="productStock overflow-y-auto">
            {followers &&
              followers.map((follower) => (
                <ul
                  key={follower._id}
                  className="flex items-center border-b border-solid border-[gray] py-2"
                >
                  <li className="w-[35%] flex items-center text-center">
                    {" "}
                    <img
                      className="w-10 h-10 rounded-full mr-2"
                      src={follower.userImg}
                      alt="product Img"
                    />{" "}
                    <span className="text-[0.9rem]"> {follower.userName} </span>
                  </li>
                  <li className="w-[25%] text-center">
                    {" "}
                    {follower.age} years{" "}
                  </li>
                  <li className="w-[20%] text-center">{follower.gender}</li>
                  <li className="w-[20%] text-end"> {follower.location} </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
