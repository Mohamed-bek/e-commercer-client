"use client";
import React, { useRef, useEffect } from "react";

type Props = { percentage: number };

export default function CircleBar({ percentage }: Props) {
  const circleRef = useRef<any>();
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${
        275 - (percentage * 275) / 100
      }%`;
    }
  }, []);
  return (
    <div className="h-[160px] w-[160px] relative">
      <div className="rounded-[50%] p-[20px] [box-shadow:6px_6px_10px_-1px_rgba(0,_0,_0,_0.15),_-6px_-6px_10px_-1px_rgba(255,_255,_255,_0.7)] w-full h-full">
        <div className="h-full w-full flex justify-center items-center rounded-[50%] [box-shadow:inset_4px_4px_6px_-1px_rgba(0,_0,_0,_0.2),_inset_-4px_-4px_6px_-1px_rgba(255,_255,_255,_0.7),_-0.5px_-0.5px_0px_rgba(255,_255,_255,_1),_0.5px_0.5px_0px_rgba(0,_0,_0,_0.15),_0px_12px_10px_-10px_rgba(0,_0,_0,_0.05)]">
          {percentage < 0 ? `-${percentage}%` : `+${percentage}%`}
        </div>
      </div>
      <svg
        className="w-full h-full absolute top-0 left-0 [rotate:170deg]"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          ref={circleRef}
          className={`stroke-primary stroke-[20px] fill-none [transition:0.3s]`}
          style={{
            strokeDasharray: "275%",
            strokeDashoffset: "275%",
          }}
          cx="50%"
          cy="50%"
          r="43.75%"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
