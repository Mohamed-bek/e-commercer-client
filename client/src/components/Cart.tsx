import { cartStore } from "@/app/UserContext";
import React, { useRef } from "react";
import { IoAdd, IoTrash } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import router from "next/router";

type Props = {};

const Cart = (props: Props) => {
  const orderSuccess = useRef<HTMLDivElement>(null);
  const cart = cartStore((state) => state.cart);
  const addToCart = cartStore((state) => state.addToCart);
  const SubFromCart = cartStore((state) => state.SubFromCart);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const getTotalPrice = cartStore((state) => state.getTotalPrice);
  const clearCart = cartStore((state) => state.clearCart);
  function PlaySoundDelete() {
    const audio = new Audio("/delete.m4a");
    audio.play();
  }
  const MakeOrder = async () => {
    const { data } = await axios.post("http://localhost:8000/buy/create", {
      order: cart,
      shippingSupplier: "deliver",
      price: getTotalPrice(),
      paymentMode: "Stripe",
    });
    if (!data.success) {
    }
    if (data.success) {
      orderSuccess.current?.classList.replace("scale-0", "scale-1");
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div
        ref={orderSuccess}
        className=" absolute scale-0 [transition:0.3s] z-50 flex justify-center items-center backdrop-filter backdrop-blur-[4px] w-full h-full"
      >
        <div className="w-[80%] h-4/5 bg-primary flex justify-center items-center">
          <img className="h-[90%]" src="/order.png" alt="" />
          <div className="flex justify-center items-center w-1/2 h-full">
            <div>
              <h1 className="text-[2rem] text-center">
                {" "}
                Your order has been successfully{" "}
                <span className="block"> processed </span>{" "}
              </h1>
              <button
                onClick={() => {
                  orderSuccess.current?.classList.replace("scale-1", "scale-0");
                  document
                    .querySelector(".Cart")
                    ?.classList.replace("translate-x-0", "translate-x-full");
                  clearCart();
                }}
                className="py-2 w-[200px] bg-[white] text-[black] text-[1.2rem] cursor-pointer mt-5 block mx-auto rounded-md"
              >
                {" "}
                Back to Shop{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 h-full bg-white py-[3.5%]">
        <div className="w-4/5 h-full mx-auto">
          <h1 className="text-[2.2rem] relative mb-7"> Your Shoping Cart </h1>
          <div className="h-[70vh] p-2 w-full overflow-y-auto border border-solid border-black rounded-sm">
            {cart &&
              cart.map((order) => (
                <div className="w-full items-center flex gap-5 mb-5 rounded-md bg-[#EEE] pr-2">
                  <div className="px-3 py-2 text-[black] flex items-center flex-1">
                    <div className="w-1/5 flex justify-center items-center text-center">
                      <img
                        className="w-[80%]"
                        src={order.product.images[0]?.url}
                        alt=""
                      />
                    </div>
                    <div className="w-1/5 text-center">
                      <p> {order.product.name} </p>
                      <p> {order.product.category} </p>
                    </div>
                    <div className="w-1/5 text-center">
                      <span
                        className={`block w-10 h-10 rounded-full bg-[${order.product.colors[0]}]`}
                      ></span>{" "}
                    </div>
                    <div className="w-1/5 text-center flex gap-4 items-center">
                      <div> {order.quantity.toString()} </div>
                      <div>
                        {" "}
                        <IoAdd
                          onClick={() =>
                            addToCart({
                              product: order.product,
                              quantity: 1,
                            })
                          }
                          className="mb-5 w-7 h-7 flex justify-center items-center bg-primary text-[white] cursor-pointer rounded-full"
                        />{" "}
                        <RiSubtractLine
                          onClick={() => SubFromCart(order.product._id)}
                          className="w-7 h-7 flex justify-center items-center bg-primary text-[white] cursor-pointer rounded-full"
                        />{" "}
                      </div>
                    </div>
                    <div className="w-1/5 text-center">
                      {" "}
                      {order.product.price * order.quantity} DA{" "}
                    </div>
                  </div>
                  <IoTrash
                    onClick={() => {
                      removeFromCart(order.product._id);
                      PlaySoundDelete();
                    }}
                    className="text-[1.7rem] text-[black] cursor-pointer"
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-between items-center w-full pt-3">
            <div className="flex items-center gap-2">
              <FaArrowLeftLong
                className="text-[1.6rem] cursor-pointer"
                onClick={() =>
                  document
                    .querySelector(".Cart")
                    ?.classList.replace("translate-x-0", "translate-x-full")
                }
              />
              <span className="text-[1.3rem]"> Back To Shop </span>
            </div>
            <p className="text-[1.4rem] text-[red]">
              {" "}
              {getTotalPrice().toString()} Da{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/12 pt-[10%] h-full bg-[#252525] text-[white] relative">
        <div className="w-[70%] h-full mx-auto">
          <h1 className="text-[2rem] w-fit pb-[100px] "> Card Details </h1>
          <label htmlFor=""> Card Number </label>
          <input
            type="text"
            placeholder=""
            className="bg-transparent border-b mb-10 border-[white] border-solid focus:outline-none w-full"
          />
          <div className="flex items-center justify-between w-full">
            <div>
              <label htmlFor="" className="block">
                {" "}
                Expiry Date{" "}
              </label>
              <p className="flex items-start justify-start">
                <input className="bg-transparent border-b mb-7 border-[white] border-solid focus:outline-none w-10 px-1 " />
                <span className="mt-[7px] ml-[3px]"> / </span>
                <input className="bg-transparent border-b mb-7 border-[white] border-solid focus:outline-none w-10 px-1" />
                <span className="mt-[7px] ml-[3px]"> / </span>
                <input className="bg-transparent border-b mb-7 border-[white] border-solid focus:outline-none w-10 px-1" />
              </p>
            </div>
            <div>
              <label className="block" htmlFor="">
                {" "}
                CW{" "}
              </label>
              <input
                type="text"
                className="bg-transparent border-b mb-7 border-[white] border-solid focus:outline-none w-12"
              />
            </div>
          </div>
        </div>
        <button className=" absolute bottom-0 left-0 w-full py-5 text-center bg-primary text-[white] cursor-pointer">
          {" "}
          Checkout{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
