"use client";
import { formatDistanceToNow } from "date-fns";
import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

type Props = {};
interface INotification {
  avatar: string;
  date: Date;
  content: string;
  _id: string;
  name: string;
}

function Notification({}: Props) {
  const readRef = useRef<HTMLDivElement>(null);
  const [notificationRead, setNotificationRead] =
    useState<INotification | null>(null);
  const [notifications, setNotifications] = useState<INotification[]>([
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2024, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id1",
      name: "Nabile",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id2",
      name: "Mohamed",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id3",
      name: "Zaki",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(2011, 3, 3),
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus dolorem deserunt magni fugit iure rem accusamus, sint delectus cum excepturi dolor vitae consequatur facere dolorum, blanditiis quibusdam maiores quis?",
      _id: "id4",
      name: "Ayoube",
    },
    {
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      date: new Date(),
      content: "lorem ipsum dolor sit amet",
      _id: "id4",
      name: "Ayoube",
    },
  ]);

  return (
    <div className="w-full relative h-full px-2 overflow-y-auto">
      <div
        ref={readRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]  justify-center items-center z-50 backdrop-blur-[2px] hidden"
      >
        <div className="bg-white p-5 rounded-lg border border-solid border-black z-50 w-fit max-w-[60%] relative">
          <IoMdClose
            onClick={() => {
              readRef.current?.classList.replace("flex", "hidden");
              setNotificationRead(null);
            }}
            className=" absolute top-0 right-0 z-50 w-10 h-10 rounded-full flex justify-center items-center bg-primary text-[white] translate-x-1/3 cursor-pointer -translate-y-1/3 p-1"
          />
          <div className="flex items-center justify-between gap-8">
            {" "}
            <div className="flex items-center gap-1">
              <img
                className="w-16 h-16 rounded-full mr-2"
                src={notificationRead?.avatar}
                alt=""
              />{" "}
              <p> {notificationRead?.name} </p>
            </div>
            <div>
              {notificationRead?.date &&
                new Date(notificationRead?.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
            </div>
          </div>
          <p className="text-[1.05rem] w-full p-2 bg-primary text-[white] text-center mt-3 rounded-md">
            {notificationRead?.content}
          </p>
        </div>
      </div>
      <div className="w-full h-full overflow-x-auto">
        {notifications.map((notification) => (
          <div
            className="w-full cursor-pointer flex p-2 items-center justify-between bg-white my-2 border-b border-solid border-black"
            key={notification._id}
            onClick={() => {
              setNotificationRead(notification);
              readRef.current?.classList.replace("hidden", "flex");
            }}
          >
            <div className="flex items-center">
              <div className="flex items-center w-[260px]">
                <img
                  className="w-14 h-14 rounded-full mr-2"
                  src={notification.avatar}
                  alt="notification img"
                />
                <p className="font-[600] pr-1 text-[1.1rem] cursor-pointer">
                  {" "}
                  {notification.name}{" "}
                </p>
              </div>
              <p className="text-[0.95rem] px-2">{notification.content}</p>
            </div>
            <div className="font-[100] w-fit">
              {formatDistanceToNow(new Date(notification.date), {
                addSuffix: false,
              })}{" "}
              ago
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
