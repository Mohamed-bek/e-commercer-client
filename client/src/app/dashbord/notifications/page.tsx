"use client";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
type Props = {};
interface INotification {
  avatar: string;
  date: Date;
  content: string;
  _id: string;
  name: string;
}

function Notification({}: Props) {
  const [notifications, setNotifications] = useState<INotification[]>([
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2024, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id1",
      name: "Nabile",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id2",
      name: "Mohamed",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id3",
      name: "Zaki",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
  ]);

  return (
    <div className="w-full h-full px-2 overflow-y-auto">
      {notifications.map((notification) => (
        <div
          className="w-full flex p-2 items-center justify-between bg-white my-2 border-b border-solid border-black"
          key={notification._id}
        >
          <div className="flex items-center">
            <img
              className="w-14 h-14 rounded-full mr-3"
              src={notification.avatar}
              alt="notification img"
            />
            <p className="font-[600] pr-1 text-[1.1rem] cursor-pointer">
              {" "}
              {notification.name}{" "}
            </p>
            <p className="text-[0.95rem]">{notification.content}</p>
          </div>
          <div className="font-[100] ">
            {formatDistanceToNow(new Date(notification.date), {
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
