"use client";
import SmallCard, { IProduct } from "@/components/SmallCard";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      _id: "123",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: true,
    },
    {
      _id: "1230",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: true,
    },
    {
      _id: "13",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: false,
    },
    {
      _id: "1235",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: false,
    },
    {
      _id: "1232",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: false,
    },
    {
      _id: "12",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: true,
    },
    {
      _id: "1234",
      name: "Tshirt Nike",
      price: 20,
      avatar: {
        public_id: "urlll",
        url: "/images/product-5.png",
      },
      sellerName: "Jeff",
      rating: 4,
      liked: true,
    },
  ]);
  const [brands, setBrands] = useState([
    "Chanel",
    "Gucci",
    "Louis Vuitton",
    "Prada",
    "Zara",
    "Dior",
    "Burberry",
    "Balenciaga",
  ]);
  const [numberPages, setnumberPages] = useState<number>(10);
  const [page, setPage] = useState(1);
  return (
    <div className="w-full min-h-[100vh] bg-white py-3 relative">
      <div className="cont">
        <header className="bg-primary mb-5 py-2 text-white rounded-lg flex justify-between items-center px-5">
          {" "}
          <img
            className="w-16 h-16 rounded-full border border-solid border-white"
            src=""
            alt="store img"
          />{" "}
          <div className="w-3/5 flex justify-between items-center py-2 px-3 bg-transparent border border-solid border-white rounded-lg">
            {" "}
            <input
              className="w-[90%] bg-transparent focus:outline-none pl-2 "
              type="text"
              placeholder="Search for products..."
            />{" "}
            <FaSearch className="text-[1.2rem] cursor-pointer" />
          </div>{" "}
        </header>
        <div className="w-full rounded-lg h-fit bg-primary p-5">
          <div className="grid h-[fit-content] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[20px] ">
            {products.map((product) => (
              <div key={product._id}>
                <SmallCard buttonText="Edit" product={product} />
              </div>
            ))}
          </div>
          <div className="pages flex items-center justify-between px-5 py-2 border rounded-lg border-solid border-white mt-5">
            <FaAngleLeft
              className={`p-1 rounded-full bg-white text-[1.9rem] cursor-pointer ${
                page === 1 ? "cursor-not-allowed " : ""
              } `}
              onClick={() => (page > 1 ? setPage(page - 1) : null)}
            />
            <div className="flex items-center gap-2 ">
              {Array.from(Array(numberPages)).map((_, i) => (
                <span
                  onClick={() => setPage(i + 1)}
                  style={{
                    backgroundColor:
                      page === i + 1
                        ? "var(--color-black)"
                        : "var(--color-white)",
                    color:
                      page === i + 1
                        ? "var(--color-white)"
                        : "var(--color-black)",
                  }}
                  className="bg-white w-8 cursor-pointer rounded-md text-center py-1 text-[1.1rem]"
                  key={i}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <FaAngleRight
              className={`p-1 rounded-full bg-white text-[1.9rem] cursor-pointer ${
                page === numberPages ? "cursor-not-allowed " : ""
              } `}
              onClick={() => (page < numberPages ? setPage(page + 1) : null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
