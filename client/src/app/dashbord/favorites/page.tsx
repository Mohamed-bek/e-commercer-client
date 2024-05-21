"use client";
import { IUser } from "@/app/layout";
import SmallCard, { IProduct } from "@/components/SmallCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch, FaStar, FaHeart } from "react-icons/fa";
import Cookie from "cookie-universal";

type Props = {
  products: {
    avatar: string;
    name: string;
    sellerName: string;
    _id: string;
    rating: number;
    price: number;
  }[];
};

function Favorites() {
  const cookies = Cookie();
  const [products, setProducts] = useState<IProduct[]>([
    {
      _id: "123",
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
      _id: "123",
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
      _id: "123",
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
      _id: "123",
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
      _id: "123",
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
  const storedUserData = window.localStorage.getItem("user");
  const initialUserState = storedUserData ? JSON.parse(storedUserData) : {};
  const [user, setUser] = useState<IUser>(initialUserState);
  const GetFavouritesProducts = async () => {
    const cookie = Cookie();
    const { data } = await axios.get(`http://localhost:8000/likedProducts`, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
    setProducts(data.products);
  };
  useEffect(() => {
    GetFavouritesProducts();
  }, []);
  const removeFavorite = async (productId: number) => {
    const result = await fetch(`https://api.`, {
      method: "DELETE",
    });
    if (result.ok) {
      products.splice(productId, 1);
    }
  };
  return (
    <div className=" py-3 px-5 h-full">
      <div className="flex justify-between items-center py-2 pb-3 px-3">
        <h1 className="font-light text-[1.3rem]">
          {" "}
          Find your Favorites items and get ready to order them{" "}
        </h1>
        <div className="flex justify-between px-2 py-2 items-center border-solid border-[black] border-[1px] w-fit rounded-xl">
          <input
            className=" border-none bg-transparent focus:outline-none pr-2"
            type="text"
          />
          <FaSearch />
        </div>
      </div>
      <div className="favorite grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] w-full gap-3 h-[50vh] bg-primary rounded-md overflow-y-auto p-3">
        {products.map((product, i) => (
          <SmallCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
