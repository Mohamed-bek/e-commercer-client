"use client";
import { FaTrash } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import ChartComponent from "./ChartComponent";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { MdAdminPanelSettings } from "react-icons/md";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: number;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
}

type Props = {
  type: string;
  users: IUser[];
  setUsers: any;
  totaleUsers: number;
  GraphTitle: string;
  analytics: {
    months: string[];
    data: number[];
  };
};

export default function App({
  type,
  users,
  analytics,
  setUsers,
  totaleUsers,
  GraphTitle,
}: Props) {
  const deleteRef = useRef<HTMLDivElement>(null);
  const updateRef = useRef<HTMLDivElement>(null);
  const box1 = useRef<HTMLElement>(null);
  const [userDelete, setUserDelete] = useState<IUser | null>(null);
  const [userUpdate, setUserUpdate] = useState<IUser | null>(null);
  useEffect(() => {}, []);

  const DeleteUser = () => {
    const usersUpdate: IUser[] | null = users.filter(
      (user) => user._id !== userDelete?._id
    );
    setUsers(usersUpdate);
  };
  const UpdateUser = () => {};
  const data = {
    labels: analytics.months,
    datasets: [
      {
        label: GraphTitle,
        data: analytics.data,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
  };
  return (
    <article
      ref={box1}
      className="h-full article w-full border border-solid border-white py-1 [transition:0.3s] translate-x-0 overflow-auto rounded-lg"
    >
      <div
        ref={deleteRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]  justify-center items-center z-50 backdrop-blur-[2px] hidden"
      >
        <div className="bg-white p-5 rounded-lg border border-solid border-black z-50">
          <h1 className="text-[1.4rem] capitalize">
            {" "}
            Are You sure That You want To delete This {type}{" "}
          </h1>
          <div className="flex items-center">
            {" "}
            <img
              className="w-16 h-16 rounded-full mr-2"
              src={userDelete?.avatar.url}
              alt=""
            />{" "}
            <p> {userDelete?.firstName + " " + userDelete?.lastName} </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => {
                setUserDelete(null);
                deleteRef.current?.classList.replace("flex", "hidden");
              }}
              className="rounded-[8px] cursor-pointer w-24 py-2 text-center block border border-solid border-black [transition:0.15s] hover:bg-black hover:text-white"
            >
              {" "}
              Cancel
            </button>
            <button
              onClick={() => {
                deleteRef.current?.classList.replace("flex", "hidden");
                DeleteUser();
              }}
              className="bg-[#dd1919] hover:bg-[#b41313] [transition:0.15s] text-[white] py-2 rounded-[8px] cursor-pointer w-24 text-center block "
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
      {type !== "store" ? (
        <div
          ref={updateRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]  justify-center items-center z-50 backdrop-blur-[2px] hidden"
        >
          <div className="bg-white p-5 rounded-lg border border-solid border-black z-50">
            <h1 className="text-[1.4rem]">
              {" "}
              Are You sure That You want To Make This User an Admin{" "}
            </h1>
            <div className="flex items-center">
              {" "}
              <img
                className="w-16 h-16 rounded-full mr-2"
                src={userUpdate?.avatar.url}
                alt=""
              />{" "}
              <p> {userUpdate?.firstName + " " + userUpdate?.lastName} </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => {
                  setUserUpdate(null);
                  updateRef.current?.classList.replace("flex", "hidden");
                }}
                className="rounded-[8px] cursor-pointer w-24 py-2 text-center block border border-solid border-black [transition:0.15s] hover:bg-black hover:text-white"
              >
                {" "}
                Cancel
              </button>
              <button
                onClick={() => {
                  updateRef.current?.classList.replace("flex", "hidden");
                  UpdateUser();
                }}
                className="bg-[#dd1919] hover:bg-[#b41313] [transition:0.15s] text-[white] py-2 rounded-[8px] cursor-pointer w-24 text-center block "
              >
                {" "}
                Update{" "}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="userAna h-[250px] px-3 flex items-center gap-5 pb-2">
        <div className="w-1/3 h-full bg-primary p-4 px-7 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 p-1 bg-[#ffffffc4] rounded-sm flex justify-center items-center">
              <FaUserTie className="text-[1.8rem] text-primary" />
            </div>
            <div>
              <img className=" scale-150" src="/increase.png" alt="" />
            </div>
          </div>
          <p className="text-[1.3rem] font-light px-[0] capitalize  mt-5 mb-1 ">
            {" "}
            Total {type + "s"}{" "}
          </p>
          <p className="text-[1.6rem] font-medium mb-7"> {totaleUsers} </p>
          <p className="pt-3 text-center text-[0.9rem] border-t border-black border-solid">
            {" "}
            Started from 1 mars 2024{" "}
          </p>
        </div>
        <div className="w-2/3 h-full rounded-lg bg-primary flex justify-center items-center">
          <div className="w-full h-[95%] flex justify-center items-center">
            <ChartComponent type="bar" data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="w-full px-3 pt-2 flex items-center border-t border-solid border-black justify-center">
        <div className="bg-transparent border border-solid border-black rounded-xl flex px-3 items-center justify-between w-fit">
          <input
            className="bg-transparent focus:outline-none px-1 py-1 w-[250px] "
            type="text"
            placeholder={`Search for ${type}...`}
          />
          <FaSearch className=" cursor-pointer" />
        </div>
      </div>
      <div className="flex productAdmin justify-between items-center px-3 py-3 border-b border-solid border-black">
        <div className="w-[30%]"> name </div>
        <div className=" grow pl-5"> email </div>
        <div className="w-[20%] text-center hide"> phone </div>
        <div className="w-[10%] text-center "> delete </div>
        {type !== "store" ? (
          <div className="w-[10%] text-center "> admin </div>
        ) : null}
      </div>
      <div className="w-full scrollUser overflow-y-auto">
        {users?.map((user, i) => (
          <div
            key={user._id}
            className={`productAdmin flex justify-between items-center px-3 py-1 pr-4 ${
              i % 2 === 1 ? "bg-primary text-[white]" : "bg-white text-black"
            } ${i === 0 ? "border-t" : ""}`}
          >
            <div className="flex gap-2 items-center w-[30%]">
              <img
                className="w-12 rounded-md"
                src={user.avatar.url}
                alt="product img"
              />
              <p className="hide"> {user.firstName + " " + user.lastName} </p>
            </div>
            <div className="flex gap-2 items-center grow">{user.email}</div>
            <div className="w-[20%] font-[500] text-center hide">
              {" "}
              {user.phoneNumber || "?????"}
            </div>
            <div className="w-[10%] font-[200] justify-center flex items-center gap-2 text-[1.2rem]">
              <FaTrash
                title="Delete the user"
                onClick={() => {
                  setUserDelete(user);
                  deleteRef.current?.classList.replace("hidden", "flex");
                }}
                className=" cursor-pointer"
              />
            </div>
            {type !== "store" ? (
              <div className="w-[10%] font-[200] justify-center flex items-center gap-2 text-[1.2rem]">
                <MdAdminPanelSettings
                  title="Make it an Admin "
                  onClick={() => {
                    setUserUpdate(user);
                    updateRef.current?.classList.replace("hidden", "flex");
                  }}
                  className="text-[1.6rem] cursor-pointer "
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}
