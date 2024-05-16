import React, { useState } from "react";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
export interface IPurchase {
  _id: string;
  img: string;
  name: string;
  sellerName: string;
  price: number;
  piece: number;
  date: Date;
}
type Props = {
  setRefund: React.Dispatch<React.SetStateAction<IPurchase | undefined>>;
  setDisplayRefund: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Purchases({ setRefund, setDisplayRefund }: Props) {
  const [purchases, setPurchases] = useState<IPurchase[]>([
    {
      _id: "purchases1",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 122737832",
      sellerName: "MohamedDGZGDZADS",
      price: 300,
      piece: 5,
      date: new Date(Date.now()),
    },
    {
      _id: "purchase1",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "pro",
      sellerName: "Mo",
      price: 300,
      piece: 5,
      date: new Date(Date.now()),
    },
    {
      _id: "purchase3",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      sellerName: "Mohamed",
      price: 300,
      piece: 5,
      date: new Date(Date.now()),
    },
    {
      _id: "purchase4",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      sellerName: "Mohamed",
      price: 300,
      piece: 5,
      date: new Date(Date.now()),
    },
    {
      _id: "purchase5",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      sellerName: "Mohamed",
      price: 300,
      piece: 5,
      date: new Date(Date.now()),
    },
  ]);
  return (
    <div className="w-full border-[1px] border-solid border-[#ececec] rounded-md">
      <div className="flex justify-between items-center px-3 py-3">
        <div className="w-[28%]">product </div>
        <div className="w-[22%]"> seller </div>
        <div className="w-[10%]"> price </div>
        <div className="w-[10%]"> piece </div>
        <div className="w-[15%]"> date </div>
        <div className="w-[10%]"> refund </div>
      </div>
      {purchases.map((purchase, i) => (
        <div
          key={purchase._id}
          className={`flex justify-between items-center px-3 py-2 border-b border-[black] border-solid ${
            i % 2 === 1 ? "bg-primary" : "bg-[white]"
          } ${i === 0 ? "border-t" : ""}`}
        >
          <div className="flex gap-2 items-center w-[28%]">
            <img
              className="w-14 rounded-md"
              src={purchase.img}
              alt="product img"
            />
            <p> {purchase.name && purchase.name} </p>
          </div>
          <div className="w-[22%] font-[200]"> {purchase.sellerName} </div>
          <div className="w-[10%] font-[600]"> {purchase.price}$ </div>
          <div className="w-[10%] font-[600]"> {purchase.piece} </div>
          <div className="w-[15%] font-[200]">
            {" "}
            {purchase.date.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}{" "}
          </div>
          <div className="w-[10%] pl-3">
            {" "}
            <HiOutlineReceiptRefund
              onClick={() => {
                setRefund(purchase);
                setDisplayRefund(true);
              }}
              className="text-[1.5rem] cursor-pointer"
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
