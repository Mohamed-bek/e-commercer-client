"use client";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
type Props = {};
interface INotification {
  createdAt: Date;
  content: string;
  _id: string;
  destination: string;
}

function Notification({}: Props) {
  const [notifications, setNotifications] = useState<INotification[]>([
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
    {
      createdAt: new Date(2024, 3, 3),
      content: "You Buy a new Product from Steve Smith",
      _id: "id1",
      destination: "id2",
    },
  ]);

  const GetNotifications = async () => {
    const cookie = Cookie();
    const { data } = await axios.get(`http://localhost:8000/notification/all`, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
    setNotifications(data.notifications);
  };
  useEffect(() => {
    // GetNotifications();
  }, []);

  return (
    <div className="w-full h-full px-2 overflow-y-auto">
      {notifications.map((notification, i) => (
        <div
          key={notification._id}
          className="w-full flex p-2 items-center justify-between bg-white my-2 border-b border-solid border-black"
        >
          <p className="text-[0.95rem]">{notification.content}</p>
          <div className="font-[100] ">
            {formatDistanceToNow(new Date(notification.createdAt), {
              addSuffix: false,
            })}{" "}
            ago
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notification;
