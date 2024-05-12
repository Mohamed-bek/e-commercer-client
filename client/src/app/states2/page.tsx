"use client";
import { RiDashboardFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import ChartComponent from "../../components/ChartComponent";
import { useState, useEffect, useRef } from "react";

export interface IPurchase {
  _id: string;
  clientId: {
    firstName: string;
    lastName: string;
    _id: string;
  };
  createdAt: Date;
  purchases: {
    _id: string;
    plantId: {
      _id: string;
      name: string;
      images: { public_id: string; url: string }[];
    };
    price: number;
    quantity: number;
    sellerId: {
      firstName: string;
      lastName: string;
      _id: string;
      avatar: { public_id: string; url: string };
    };
  }[];
}

export enum ERole {
  USER = "user",
  SPECIALIST = "specialist",
  SELLER = "seller",
  FREELANCER = "freelancer",
  ADMIN = "admin",
  ORGANISME = "organisme",
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  avatar: {
    public_id: string;
    url: string;
  };
  role: ERole;
}

export default function App() {
  const storedUser = window.localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const [user, setUser] = useState<IUser | null>(parsedUser);

  const box1 = useRef<HTMLElement>(null);
  const box2 = useRef<HTMLElement>(null);
  const [users, setUsers] = useState<IUser[]>();
  const [active, setactive] = useState("purchases");
  const [months, setMonths] = useState();
  const [totaleSellers, setTotaleSellers] = useState();
  const [totaleUsers, setTotaleUsers] = useState();
  const [totaleVisitor, setTotaleVisitor] = useState();
  const [totalePlants, setTotalePlants] = useState();
  const [totaleSales, setTotaleSales] = useState();
  const [purchasesData, setPurchasesData] = useState([
    1000, 1200, 800, 1500, 2000, 1800,
  ]);
  const [visitorData, setVisitorData] = useState([0, 0, 0, 0, 0, 0]);
  const [purchases, setPurchases] = useState<IPurchase[]>();
  const getPurchases = async () => {
    try {
      let response = await fetch("http://localhost:8000/admin-purchases", {
        method: "GET",
        headers: {
          Authorization: `${JSON.parse(
            window.localStorage.getItem("accessToken") || ""
          )}`,
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      if (!response.ok) {
        if (
          (data.err as string).includes("Access Token expired") ||
          (data.err as string).includes("jwt expired")
        ) {
          response = await fetch("http://localhost:8000/refresh_token", {
            method: "GET",
            headers: {
              Authorization: `${JSON.parse(
                window.localStorage.getItem("refreshToken") || ""
              )}`,
              "Content-Type": "application/json",
            },
          });
          data = await response.json();
          if (response.ok) {
            window.localStorage.setItem(
              "refreshToken",
              JSON.stringify(data.refresh_token)
            );
            window.localStorage.setItem(
              "accessToken",
              JSON.stringify(data.access_token)
            );
            response = await fetch("http://localhost:8000/admin-purchases", {
              method: "GET",
              headers: {
                Authorization: `${JSON.parse(
                  window.localStorage.getItem("accessToken") || ""
                )}`,
                "Content-Type": "application/json",
              },
            });
            if (!response.ok) {
              window.location.href = "/error";
            }
            data = await response.json();
          } else {
            window.location.href = "/login";
          }
        }
      }
      setMonths(data.analyticsUsers.months);
      setPurchasesData(data.analyticsUsers.counts);
      setPurchases(data.purchases);
      setTotalePlants(data.totalePlants);
      setTotaleSales(data.totaleSales);
      setTotaleSellers(data.totaleSellers);
      setUsers(data.users);
      setVisitorData(data.visitorAnalytics.counts);
      setTotaleUsers(data.totaleUsers);
      setTotaleVisitor(data.totaleVisitor);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    getPurchases();
  }, []);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Purchases Analysis",
        data: purchasesData,
        backgroundColor: "rgb(3 217 104 / 65%)",
        borderColor: "rgb(0 146 68)",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const dataVisitor = {
    labels: months,
    datasets: [
      {
        label: "Visitor Analysis",
        data: visitorData,
        backgroundColor: "rgb(3 217 104 / 65%)",
        borderColor: "rgb(0 146 68)",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  // Options object for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
      },
    },
  };
  return (
    <article
      ref={box2}
      className="h-full [transition:0.3s] p-5 w-full -translate-y-full -translate-x-full"
    >
      <div className="w-full h-[35%] flex items-center gap-5 mb-5">
        <div className="w-[30%] text-white h-full bg-primary p-4 px-7 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 p-1 bg-[#49e679ba] flex justify-center items-center">
              <FaCartShopping className="text-[1.8rem]" />
            </div>
            <div>
              <img className=" scale-150" src="/increaseWhite.png" alt="" />
            </div>
          </div>
          <p className="text-[1.3rem] font-light px-[0]  mt-5 mb-1 ">
            {" "}
            Total Users{" "}
          </p>
          <p className="text-[1.6rem] font-medium mb-7"> {totaleUsers} </p>
          <p className="pt-3 text-center text-[0.9rem] border-t border-white border-solid">
            {" "}
            Started from 1 mars 2024{" "}
          </p>
        </div>
        <div className="w-[30%] h-full bg-white p-4 px-7 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 p-1 bg-[#39cf6a5c] flex justify-center items-center">
              <PiPackageFill className="text-[1.8rem] text-primary" />
            </div>
            <div>
              <img className=" scale-150" src="/increase.png" alt="" />
            </div>
          </div>
          <p className="text-[1.3rem] font-light px-[0]  mt-5 mb-1 ">
            {" "}
            Total Visitors{" "}
          </p>
          <p className="text-[1.6rem] font-medium mb-7"> {totaleVisitor} </p>
          <p className="pt-3 text-center text-[0.9rem] border-t border-black border-solid">
            {" "}
            Started from 1 mars 2024{" "}
          </p>
        </div>
        <div className="w-[40%] h-full bg-white flex justify-center items-center rounded-lg">
          <ChartComponent type="bar" data={dataVisitor} options={options} />
        </div>
      </div>
      <div className="box2 w-full flex items-center gap-5 ">
        <div className="w-full h-full bg-white rounded-lg ">
          <div className="flex justify-between items-center px-3 py-3">
            <div className="w-[30%]">User </div>
            <div className="w-[30%] pl-5"> Email </div>
            <div className="w-[30%] pl-3"> Phone </div>
            <div className="w-[10%] text-end pr-6"> Role </div>
          </div>
          <div className="w-full scroll overflow-y-auto">
            {users?.map((user, i) => (
              <div
                key={user._id}
                className={`flex justify-between items-center p-2 border-b border-[black] border-solid ${
                  i % 2 === 1 ? "bg-primary" : "bg-[white]"
                } ${i === 0 ? "border-t" : ""}`}
              >
                <div className="w-[30%] flex gap-2 items-center">
                  <img
                    className="w-12 rounded-full"
                    src={user.avatar?.url || ""}
                    alt="product img"
                  />
                  <p className="text-[1.1rem]">
                    {user.firstName + " " + user.lastName}{" "}
                  </p>
                </div>
                <div className="w-[30%] font-[600]">{user.email}</div>
                <div className="w-[30%] font-[600]">
                  {user.phoneNumber || "???????"}{" "}
                </div>
                <div className="w-[10%] font-[600] text-end pr-4">
                  {user.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
