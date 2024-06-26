"use client";
import SmallCard, { IProduct } from "@/components/SmallCard";
import React, { useEffect, useState } from "react";
import { FaSearch, FaStar, FaBookmark } from "react-icons/fa";
import axios from "axios";
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
  const [products, setProducts] = useState<IProduct[]>([]);
  const removeFavorite = async (productId: number) => {
    const result = await fetch(`https://api.`, {
      method: "DELETE",
    });
    if (result.ok) {
      products.splice(productId, 1);
    }
  };
  const GetWishProducts = async () => {
    const cookie = Cookie();
    const { data } = await axios.get(`http://localhost:8000/likedProducts`, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
    setProducts(data.products);
  };
  useEffect(() => {
    GetWishProducts();
  }, []);
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
      <div className="favorite grid bg-primary grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] w-full gap-3 h-[50vh] p-3 overflow-y-auto ">
        {products.map((product) => (
          <SmallCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
