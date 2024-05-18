"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import Header from "./Header";
import { IProduct } from "./SmallCard";
import SwiperSlider from "./Swiper";

type Props = {};

const Landing = (props: Props) => {
  const [numberOfElement, setNumberOfElement] = useState<number>(1);
  useEffect(() => {
    let width = (document.querySelector(".swp") as HTMLElement).offsetWidth;
    if (width) {
      setNumberOfElement(Math.floor(width / 250));
    }
  }, []);
  const [filter, setFilter] = useState<string>("");
  const filterProducts = (marca: string) => {
    setFilter(marca);
  };
  const [MostPopulareProduct, setProducts] = useState<IProduct[]>([
    {
      _id: "1",
      name: "Tshirt Nike",
      price: 20,
      images: [
        {
          public_id:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
          url: "/images/product-5.png",
        },
      ],
      category: "tshirt",
      sellerName: "Jeff",
      rating: 4,
      liked: true,
      creatorId: "2",
      colors: ["red", "blue"],
      brand: "Zara",
      reviews: [
        {
          _id: "123",
          review: "Best rproduct ever",
          name: "Rami Djebly",
          rating: 4,
          image:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sed animi odit modi ipsum consectetur nihil eaque id quis est quia facilis quaerat voluptas praesentium suscipit, saepe tenetur ",
      sizes: ["L", "M", "Xl", "XXL"],
      quantity: 20,
    },
    {
      _id: "2",
      name: "Tshirt Nike",
      price: 20,
      images: [
        {
          public_id:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
          url: "/images/product-5.png",
        },
      ],
      category: "tshirt",
      sellerName: "Jeff",
      rating: 4,
      liked: true,

      creatorId: "123",
      colors: ["red", "blue"],
      brand: "Zara",
      reviews: [
        {
          _id: "123",
          review: "Best rproduct ever",
          name: "Rami Djebly",
          rating: 4,
          image:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sed animi odit modi ipsum consectetur nihil eaque id quis est quia facilis quaerat voluptas praesentium suscipit, saepe tenetur ",
      sizes: ["L", "M", "Xl", "XXL"],
      quantity: 20,
    },
    {
      _id: "3",
      name: "Tshirt Nike",
      price: 20,
      images: [
        {
          public_id:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
          url: "/images/product-5.png",
        },
      ],
      category: "tshirt",
      sellerName: "Jeff",
      rating: 4,
      liked: true,

      creatorId: "123",
      colors: ["red", "blue"],
      brand: "Zara",
      reviews: [
        {
          _id: "123",
          review: "Best rproduct ever",
          name: "Rami Djebly",
          rating: 4,
          image:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sed animi odit modi ipsum consectetur nihil eaque id quis est quia facilis quaerat voluptas praesentium suscipit, saepe tenetur ",
      sizes: ["L", "M", "Xl", "XXL"],
      quantity: 20,
    },
    {
      _id: "4",
      name: "Tshirt Nike",
      price: 20,
      images: [
        {
          public_id:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
          url: "/images/product-5.png",
        },
      ],
      category: "tshirt",
      sellerName: "Jeff",
      rating: 4,
      liked: true,

      creatorId: "123",
      colors: ["red", "blue"],
      brand: "Zara",
      reviews: [
        {
          _id: "123",
          review: "Best rproduct ever",
          name: "Rami Djebly",
          rating: 4,
          image:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sed animi odit modi ipsum consectetur nihil eaque id quis est quia facilis quaerat voluptas praesentium suscipit, saepe tenetur ",
      sizes: ["L", "M", "Xl", "XXL"],
      quantity: 20,
    },
    {
      _id: "5",
      name: "Tshirt Nike",
      price: 20,
      images: [
        {
          public_id:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
          url: "/images/product-5.png",
        },
      ],
      category: "tshirt",
      sellerName: "Jeff",
      rating: 4,
      liked: true,

      creatorId: "123",
      colors: ["red", "blue"],
      brand: "Zara",
      reviews: [
        {
          _id: "123",
          review: "Best rproduct ever",
          name: "Rami Djebly",
          rating: 4,
          image:
            "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sed animi odit modi ipsum consectetur nihil eaque id quis est quia facilis quaerat voluptas praesentium suscipit, saepe tenetur ",
      sizes: ["L", "M", "Xl", "XXL"],
      quantity: 20,
    },
  ]);
  useEffect(() => {
    if (!window.localStorage.getItem("graphColor")) {
      window.localStorage.setItem("graphColor", "rgba(96,125,139,0.5)");
    }
    if (!window.localStorage.getItem("graphBorderColor")) {
      window.localStorage.setItem("graphBorderColor", "rgba(96,125,139,1)");
    }
  }, []);

  return (
    <div className="w-full h-[100vh] bg-white">
      <div className="w-[80%] mx-auto">
        <Header />
        <section className="landing w-full relative">
          <h2 className="absolute z-30 left-[0] top-[10%] [rotate:-90deg] origin-[left_center] -translate-x-full translate-y-1/2 text-[2.2rem]">
            {" "}
            50% OFF PROMO{" "}
          </h2>
          <div className="w-full h-[95%] flex items-center">
            <div className=" w-3/5 bg-white h-full relative">
              <h1 className=" absolute top-[15%] right-1 text-[8rem] font-[600] tracking-[4px] scale-y-[1.6] ">
                fashi
                <p className="text-[0.9rem] scale-y-[0.7] tracking-[0.4px] font-light text-[gray] w-[295px] -mt-[45px]">
                  {" "}
                  Fashion Designers Attempt To Design Clothes Which Are
                  Functional As Well As Aesthetically Pleasing.
                </p>
              </h1>
              <Link
                href="/products"
                className="text-[1.1rem] font-semibold text-white bg-primary absolute top-[55%] px-4 cursor-pointer py-3 right-[295px] translate-x-full flex items-center gap-2"
              >
                Discover More <TbHandClick />
              </Link>
            </div>
            <div className="h-full bg-primary w-3/5 relative">
              <h1 className=" absolute top-[15%] scale-y-[1.6] left-1 text-[8rem] font-[600] tracking-[4px] text-white">
                on
              </h1>
              <img
                className="h-[90%] mt-[13%] ml-auto"
                src="/model.png"
                alt="img"
              />
            </div>
          </div>
        </section>
        <section className="productPage">
          <header className="w-full flex justify-evenly items-center">
            <h1
              className={`text-[3.5rem] [transition:0.3s] font-black text-[gray] tracking-[3px] font-[fantasy] cursor-pointer hover:text-black hover:font-extrabold hover:text-[3.7rem] ${
                filter === "zara"
                  ? "text-black font-extrabold text-[3.7rem]"
                  : ""
              }`}
              onClick={() => filterProducts("zara")}
            >
              ZARA
            </h1>
            <h1
              className={`text-[3.5rem] font-black [transition:0.3s] text-[gray] tracking-[3px] font-[fantasy] cursor-pointer hover:text-black hover:font-extrabold hover:text-[3.7rem] ${
                filter === "nike"
                  ? "text-black font-extrabold text-[3.7rem]"
                  : ""
              }`}
              onClick={() => filterProducts("nike")}
            >
              NIKE
            </h1>
            <h1
              className={`text-[3.5rem] font-black [transition:0.3s] text-[gray] tracking-[3px] font-[fantasy] cursor-pointer hover:text-black hover:font-extrabold hover:text-[3.7rem] ${
                filter === "gucci"
                  ? "text-black font-extrabold text-[3.7rem]"
                  : ""
              }`}
              onClick={() => filterProducts("gucci")}
            >
              GUCCI
            </h1>
            <h1
              className={`text-[3.5rem] [transition:0.3s] font-black text-[gray] tracking-[3px] font-[fantasy] cursor-pointer hover:text-black hover:font-extrabold hover:text-[3.7rem] ${
                filter === "lv" ? "text-black font-extrabold text-[3.7rem]" : ""
              }`}
              onClick={() => filterProducts("lv")}
            >
              LV
            </h1>
          </header>
          <div className="my-10">
            <h1 className="text-[2rem]"> Populare Product </h1>
            <div className="swp">
              <SwiperSlider
                navigationClass="popular-product1"
                products={MostPopulareProduct}
                numberOfElements={numberOfElement}
              />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-[2rem]"> New Product </h1>
            <div className="swp">
              <SwiperSlider
                navigationClass="popular-product2"
                products={MostPopulareProduct}
                numberOfElements={numberOfElement}
              />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-[2rem]"> Product On Promotion </h1>
            <div className="swp">
              <SwiperSlider
                navigationClass="popular-product3"
                products={MostPopulareProduct}
                numberOfElements={numberOfElement}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
