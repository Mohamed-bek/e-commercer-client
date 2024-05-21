"use client";
import Refund, { IRefund } from "@/components/Refund";
import React, { useState } from "react";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
export interface IPurchase {
  _id: string;
  client: {
    firstName: string;
    lastName: string;
    image: {
      url: string;
      public_id: string;
    };
  };
  order: {
    store: {
      firstName: string;
      lastName: string;
      image: {
        url: string;
        public_id: string;
      };
    };
    product: {
      name: string;
      _id: string;
      images: {
        url: string;
        public_id: string;
      }[];
      price: number;
      quantity: Number;
    };
  }[];
  paymentMode: String;
  price: Number;
  createdAt: Date;
}
type Props = {};
export default function Purchases({}: Props) {
  const [displayRefund, setDisplayRefund] = useState<boolean>(false);
  const [refund, setRefund] = useState<IRefund | null>(null);
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  return (
    <div className="w-full border border-solid border-[black] rounded-md">
      <div
        className={`w-[100vw] h-[100vh] backdrop-filter backdrop-blur-[1px] top-0 left-0 z-50 bg-transparent absolute flex justify-center items-center ${
          displayRefund ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => setDisplayRefund(false)}
          className="absolute w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center top-[10%] right-[10%] translate-x-1/2  -translate-y-1/2"
        >
          <IoMdClose className="text-[1.4rem] hover:text-[1.8rem] font-semibold [transition:0.2s]" />
        </button>
        <Refund refund={refund} />
      </div>
      <div className="flex justify-between items-center px-3 py-3">
        <div className="w-[28%]">product </div>
        <div className="w-[22%]"> seller </div>
        <div className="w-[10%]"> price </div>
        <div className="w-[10%]"> piece </div>
        <div className="w-[15%]"> date </div>
        <div className="w-[10%]"> refund </div>
      </div>
      {purchases.map((purchase) =>
        purchase.order.map((order, i) => (
          <div
            key={purchase._id + i}
            className={`flex text-black justify-between items-center px-3 py-2 border-b border-black border-solid ${
              i % 2 !== 1 ? "bg-primary text-white" : "bg-white text-black"
            } ${i === 0 ? "border-t" : ""}`}
          >
            <div className="flex gap-2 items-center w-[28%]">
              <img
                className="w-14 rounded-md"
                src={order.product.images[0]?.url}
                alt="product img"
              />
              <p> {order.product.name} </p>
            </div>
            <div className="w-[22%] font-[200]">
              {" "}
              {order.store.firstName + " " + order.store.lastName}{" "}
            </div>
            <div className="w-[10%] font-[600]"> {order.product.price}DA </div>
            <div className="w-[10%] font-[600]">
              {" "}
              {order.product.quantity.toString()}{" "}
            </div>
            <div className="w-[15%] font-[200]">
              {" "}
              {purchase.createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}{" "}
            </div>
            <div className="w-[10%] pl-3">
              {" "}
              <HiOutlineReceiptRefund
                onClick={() => {
                  console.log(refund);
                  setRefund({
                    store: order.store,
                    product: order.product,
                    createdAt: purchase.createdAt,
                  });
                  setDisplayRefund(true);
                }}
                className="text-[1.5rem] cursor-pointer"
              />{" "}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
