import React, { useEffect } from "react";
import { FaStar, FaHeart, FaBookmark } from "react-icons/fa";
export interface IProduct {
  _id: string;
  avatar: {
    public_id: string;
    url: string;
  };
  name: string;
  sellerName: string;
  price: number;
  rating: number;
  liked: boolean;
}

type Props = {
  product: IProduct;
  buttonText?: string;
};

const SmallCard = ({ product, buttonText = "Buy" }: Props) => {
  function likeProduct(e: React.MouseEvent<SVGElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if (element.tagName === "svg") {
      element.classList.toggle("text-[#bfbfbf]");
      element.classList.toggle("text-[red]");
    } else {
      (element.parentNode as HTMLElement).classList.toggle("text-[#bfbfbf]");
      (element.parentNode as HTMLElement).classList.toggle("text-[red]");
    }
  }
  function saveProduct(e: React.MouseEvent<SVGElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if (element.tagName === "svg") {
      element.classList.toggle("text-[#bfbfbf]");
      element.classList.toggle("text-[black]");
    } else {
      (element.parentNode as HTMLElement).classList.toggle("text-[#bfbfbf]");
      (element.parentNode as HTMLElement).classList.toggle("text-[black]");
    }
  }

  function PlaySound(product: IProduct) {
    const audio = new Audio("/sound.mp3");
    audio.play();
  }

  return (
    <div className="h-fit bg-white rounded-lg p-2 text-black" key={product._id}>
      <div className="w-full h-[180px] flex items-center justify-center mb-1 rounded-lg bg-[#EEE] relative">
        <img className="h-[100%]" src={product.avatar.url} alt="product img" />{" "}
        <FaHeart
          className="text-[1.3rem] text-[#bfbfbf] absolute right-2 top-2 z-50 w-7 h-7 cursor-pointer [transition:0.3s]"
          onClick={(e) => {
            likeProduct(e);
            PlaySound(product);
          }}
        />
        <FaBookmark
          className="text-[1.3rem] text-[#bfbfbf] absolute left-2 top-2 z-50 w-6 h-6 cursor-pointer [transition:0.3s]"
          onClick={(e) => {
            saveProduct(e);
            PlaySound(product);
          }}
        />
      </div>
      <div className="px-1">
        <p className="text-[0.9rem] text-[gray] my-1 w-fit"> t-shirt </p>
        <p className="text-[1.2rem] font-semibold capitalize ">
          {" "}
          {product.name}{" "}
        </p>

        <p className="flex gap-1 items-center my-1">
          {" "}
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <FaStar
                className={`${index < product.rating ? "text-orange-300" : ""}`}
              />
            </span>
          ))}{" "}
        </p>
        <p className="text-[1.1rem] text-[#dd2020] mb-1 flex justify-between items-center">
          {" "}
          {product.price}DA{" "}
          <button className="bg-primary text-white py-1 text-[1.1rem] font-semibold rounded-3xl  px-5 cursor-pointer">
            {buttonText}
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
