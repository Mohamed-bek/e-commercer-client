"use client";
import { useState } from "react";
import UserStore from "@/components/UserStore";

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

export default function App() {
  const [months, setMonths] = useState([
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
  ]);
  const [totaleUsers, setTotaleUsers] = useState<number>(20000);
  const [usersData, setUsersData] = useState([
    1000, 2000, 4000, 4500, 8000, 10000,
  ]);
  const [users, setUsers] = useState<IUser[]>([
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
    {
      _id: "1",
      firstName: "Tayeb",
      lastName: "Marzigue",
      email: "tayebmer12@gmail.com",
      avatar: {
        public_id: "kjkncxwcwx",
        url: "jssqx",
      },
      role: "user",
    },
  ]);
  return (
    <UserStore
      users={users}
      type={`user`}
      analytics={{ data: usersData, months }}
      setUsers={setUsers}
      GraphTitle="User Statistics"
      totaleUsers={totaleUsers}
    />
  );
}
