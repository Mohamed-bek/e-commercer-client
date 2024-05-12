"use client";
import SmallCard, { IProduct } from "@/components/SmallCard";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";

type Props = {};

const Products = (props: Props) => {
  const headerRef = useRef<HTMLElement>(null);
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

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setTimeout(() => {
      if (currentScrollY > window.scrollY) {
        if (currentScrollY > 150) {
          headerRef.current?.classList.add("-translate-y-full");
        }
        headerRef.current?.classList.add("sticky", "top-0", "translate-y-0");
      }
      if (currentScrollY < window.scrollY) {
        headerRef.current?.classList.remove("sticky", "top-0");
      }
    }, 100);
  };

  window.addEventListener("scroll", handleScroll);

  const [numberPages, setnumberPages] = useState<number>(10);
  const [page, setPage] = useState(1);
  const filter = useRef<HTMLElement>(null);
  return (
    <div className="w-full min-h-[100vh] bg-white py-3 relative">
      <nav
        ref={filter}
        className="filter text-white fixed left-0 pl-4 pr-7 py-5 h-[100vh] overflow-y-auto w-fit bg-primary top-0 -translate-x-full z-[10000000] [transition:0.3s]"
      >
        <div className="w-full h-fit pb-5">
          <h1 className="text-[1.8rem] font-semibold tracking-[1.5px] mb-5">
            {" "}
            Filter{" "}
          </h1>
          <form className="text[1.1rem]" action="w-full h-fit">
            <label className="text-[1.3rem] mb-3" htmlFor="">
              {" "}
              Gender{" "}
            </label>
            <div className="pl-2 ">
              {" "}
              <input
                className="mr-1 cursor-pointer"
                type="radio"
                name="gender"
                id="male"
              />{" "}
              <label className=" cursor-pointer" htmlFor="male">
                {" "}
                Male{" "}
              </label>{" "}
            </div>
            <div className="pl-2 ">
              <input
                className="mr-1 cursor-pointer"
                type="radio"
                name="gender"
                id="female"
              />
              <label className=" cursor-pointer" htmlFor="female">
                {" "}
                Female{" "}
              </label>
            </div>
            <label className="text-[1.3rem] mb-1 mt-5 block" htmlFor="">
              {" "}
              Category{" "}
            </label>
            <div className="pl-2 flex items-center py-1">
              {" "}
              <input
                className="mr-1 cursor-pointer"
                type="checkbox"
                name="category"
                id="tops"
              />{" "}
              <label className=" cursor-pointer" htmlFor="tops">
                {" "}
                Shirts, Blouses, Sweaters
              </label>{" "}
            </div>
            <div className="pl-2 flex items-center py-1">
              <input
                className="mr-1 cursor-pointer"
                type="checkbox"
                name="category"
                id="bottoms"
              />
              <label className=" cursor-pointer" htmlFor="bottoms">
                {" "}
                Pants, Jeans, Skirts
              </label>
            </div>
            <div className="pl-2 flex items-center py-1">
              <input
                className="mr-1 cursor-pointer"
                type="checkbox"
                name="category"
                id="dresses"
              />
              <label className=" cursor-pointer" htmlFor="dresses">
                {" "}
                Dresses
              </label>
            </div>
            <div className="pl-2 flex items-center py-1">
              <input
                className="mr-1 cursor-pointer"
                type="checkbox"
                name="category"
                id="outerwear"
              />
              <label className=" cursor-pointer" htmlFor="outerwear">
                {" "}
                Jackets, Coats
              </label>
            </div>
            <div className="pl-2 flex items-center py-1">
              <input
                className="mr-1 cursor-pointer"
                type="checkbox"
                name="category"
                id="accessories"
              />
              <label className=" cursor-pointer" htmlFor="accessories">
                {" "}
                Hats, Scarves, Belts
              </label>
            </div>
            <label className="text-[1.3rem] mb-1 mt-5 block" htmlFor="">
              {" "}
              Brands{" "}
            </label>
            {brands.map((brand: string) => (
              <div className="pl-2 flex items-center py-1">
                <input
                  className="mr-1 cursor-pointer"
                  type="checkbox"
                  name="brand"
                  id={brand}
                />
                <label className="cursor-pointer text-[1.1rem]" htmlFor={brand}>
                  {" "}
                  {brand}
                </label>
              </div>
            ))}
            <label className="text-[1.3rem] mb-1 mt-5 block" htmlFor="">
              {" "}
              Rating{" "}
            </label>
            {Array.from(Array(5)).map((_, i) => (
              <div className="pl-2 flex items-center py-1" key={i}>
                <input
                  className="mr-1 cursor-pointer"
                  type="radio"
                  name="rating"
                  id={`${i + 1}`}
                />
                <label
                  className="cursor-pointer text-[1.1rem] flex gap-1 items-center"
                  htmlFor={`${i + 1}`}
                >
                  {Array.from(Array(i + 1)).map((_, j) => (
                    <FaStar className="text-[gold]" key={j} />
                  ))}{" "}
                </label>
              </div>
            ))}
            <label className="text-[1.3rem] mb-1 mt-5 block" htmlFor="color">
              {" "}
              Color{" "}
            </label>
            <input
              type="color"
              name="color"
              className="ml-2 cursor-pointer"
              id=""
            />
            <label className="text-[1.3rem] mb-1 mt-5 block" htmlFor="">
              {" "}
              Price{" "}
            </label>
            <div className="flex items-center gap-2 mb-3">
              <label className="w-12" htmlFor="from">
                {" "}
                From :{" "}
              </label>
              <div className="flex px-2 gap-1 rounded-2xl border border-solid border-white w-fit items-center ">
                <input
                  type="text"
                  name="price"
                  className="ml-2 py-1 cursor-pointer focus:outline-none bg-transparent border-none w-24"
                  id="from"
                />
                <label htmlFor="from"> DA </label>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="w-12" htmlFor="from">
                {" "}
                To :{" "}
              </label>
              <div className="flex px-2 gap-1 rounded-2xl border border-solid border-white w-fit items-center ">
                <input
                  type="text"
                  name="price"
                  className="ml-2 py-1 cursor-pointer focus:outline-none bg-transparent border-none w-24"
                  id="to"
                />
                <label htmlFor="from"> DA </label>
              </div>
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="py-2 px-8 mx-auto mt-6 bg-white text-black text-[1.15rem] uppercase cursor-pointer  rounded-full block"
            >
              {" "}
              filter{" "}
            </button>
          </form>
        </div>
      </nav>
      <div className="cont">
        <header
          ref={headerRef}
          className="bg-primary [transition:0.15s] z-[10000] mb-5 py-2 text-white rounded-lg flex justify-between items-center px-5"
        >
          <div className="w-3/5 flex justify-between items-center py-2 px-3 bg-transparent border border-solid border-white rounded-lg">
            {" "}
            <input
              className="w-[90%] bg-transparent focus:outline-none pl-2 "
              type="text"
              placeholder="Search for products..."
            />{" "}
            <FaSearch className="text-[1.2rem] cursor-pointer" />
          </div>{" "}
          <RiMenu3Line
            onClick={() => {
              filter.current?.classList.toggle("-translate-x-full");
              filter.current?.classList.toggle("translate-x-0");
            }}
            className="text-[1.6rem] cursor-pointer"
          />
        </header>
        <div className="w-full rounded-lg h-fit bg-primary p-5">
          <div className="grid h-[fit-content] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[20px] ">
            {products.map((product) => (
              <div key={product._id}>
                <SmallCard product={product} />
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
