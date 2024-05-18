"use client";
import { useState, useRef, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { TbShoppingCartPlus } from "react-icons/tb";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBookmark,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa6";
import { FaHeart, FaRegBookmark, FaRegHeart, FaStar } from "react-icons/fa";
import { IProduct } from "./SmallCard";

type Props = {
  product: IProduct;
};
const ProductInitialValue = {
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
};
export default function Card({ product = ProductInitialValue }: Props) {
  // const [rotate, setrotate] = useState(30);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  // const [colors, setColors] = useState(["red", "blue", "green", "yellow"]);
  // const [sizes, setSizes] = useState([38, 39, 40, 41, 42, 43, 44]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [productImg, setProductImg] = useState(0);
  useEffect(() => {
    console.log("the all props is : ", product);
  });
  const [faqs, setFaqs] = useState([
    {
      question: "Question 1",
      response: "Response 1",
    },
    {
      question: "Question 1",
      response: "Response 1",
    },
    {
      question: "Question 1",
      response: "Response 1",
    },

    {
      question: "Question 1",
      response: "Response 1",
    },
  ]);
  const stars = [0, 1, 2, 3, 4];
  const [nbrRating, setNbrRating] = useState(78);
  const [slider, setSlider] = useState(1);

  const sliderLigne = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const sizesRef = useRef<HTMLDivElement>(null);
  const productImgRef = useRef<HTMLImageElement>(null);

  const moveSlider = (nbSlider: number) => {
    setSlider(nbSlider);
    if (sliderLigne.current) {
      sliderLigne.current.style.width = `10px`;
      setTimeout(() => {
        if (sliderLigne.current) sliderLigne.current.style.width = `50px`;
      }, 210);
      const move = (100 / 3) * (nbSlider - 1) + 16.6;
      sliderLigne.current.style.left = `${move}%`;
    }
  };

  const toggleImgProduct = (imgUrl: number) => {
    if (imgUrl !== productImg) {
      productImgRef.current?.classList.add("-translate-x-[120%]");
      setTimeout(() => {
        setProductImg(imgUrl);
        productImgRef.current?.classList.remove("-translate-x-[120%]");
      }, 300);
    }
  };

  const changeColor = (color: string, element: EventTarget) => {
    const colors = colorRef.current?.childNodes;
    colors?.forEach((el) => {
      if (el != element) {
        (el as HTMLElement).classList.remove(
          "w-10",
          "h-10",
          "[box-shadow:rgb(9_7_22_/_60%)_2px_1px_10px_1px]"
        );
        (el as HTMLElement).classList.add("my-2");
      } else {
        (el as HTMLElement).classList.add(
          "w-10",
          "h-10",
          "[box-shadow:rgb(9_7_22_/_60%)_2px_1px_10px_1px]"
        );
        (el as HTMLElement).classList.remove("my-2");
      }
    });
  };

  const toggleFaq = (index: any) => {
    if (index === activeFaq) setActiveFaq(null);
    else setActiveFaq(index);
  };

  const changeSize = (size: string | number, element: EventTarget) => {
    const sizes = sizesRef.current?.childNodes;
    sizes?.forEach((el) => {
      if (el != element) {
        (el as HTMLElement).classList.remove(
          "text-black",
          "font-[500]",
          "[box-shadow:rgb(9_7_22_/_60%)_2px_1px_10px_1px]"
        );
      } else {
        (el as HTMLElement).classList.add(
          "text-black",
          "font-[500]",
          "[box-shadow:rgb(9_7_22_/_60%)_2px_1px_10px_1px]"
        );
      }
    });
  };

  return (
    <div className="card w-[80%] text-black h-[90vh] mt-[5vh] mx-auto flex items-center gap-[20px]">
      <div className="w-[25%] h-full relative">
        <div className="cardImage h-[70%] p-[8%] absolute left-0 top-0 bg-white rounded-br-[80px] ">
          <div className="w-[100%] h-[100%] bg-primary rounded-lg rounded-br-[80px] overflow-hidden">
            <img
              ref={productImgRef}
              className="w-[80%] mx-auto [transition:0.3s]"
              src={product.images[productImg]?.url}
              alt="new"
            />
          </div>
        </div>
      </div>
      <div className="w-[75%] h-full ">
        <header className="flex py-4 px-4 pl-[90px] h-[55px] items-center justify-between">
          <h1 className="relative text-2xl after:content-['ctaegory'] after:bottom-[50%] after:translate-y-full after:left-[0%] after:text-gray-600 after:absolute after:text-[0.8rem] after:font-light">
            Product Name
          </h1>
          <div className="flex items-center gap-4">
            {saved ? (
              <FaBookmark
                onClick={() => setSaved(!saved)}
                className="text-2xl cursor-pointer text-black"
              />
            ) : (
              <FaRegBookmark
                onClick={() => setSaved(!saved)}
                className="text-2xl cursor-pointer"
              />
            )}
            {liked ? (
              <FaHeart
                onClick={() => setLiked(!liked)}
                className="text-2xl cursor-pointer text-red-600"
              />
            ) : (
              <FaRegHeart
                onClick={() => setLiked(!liked)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </header>
        <section className="cardSection w-full pl-[70px] bg-primary pr-3 pb-2">
          <div className="w-full flex py-4 px-2 justify-between items-center">
            <div>
              <div className="flex gap-2 mb-1 items-center">
                <p> 100.00 $ </p>
                <p className=" relative after:absolute after:w-full after:bg-black after:h-[2px] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] ">
                  {" "}
                  150.00 ${" "}
                </p>
              </div>
              <div className="flex items-center gap-1">
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    className={`[transition:0.3s] cursor-pointer ${
                      product.rating > star ? "text-orange-300" : ""
                    }`}
                    // onClick={() => setRating(star + 1)}
                  />
                ))}
                ({nbrRating})
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border-solid border-[1px] border-black">
                <img
                  className="w-[30px]"
                  src="/images/Avatar-Profile-Vector-PNG-File.png"
                  alt="sellerPhoto"
                />
              </div>
              <p> {product.sellerName} </p>
            </div>
          </div>
          <header className="w-full relative flex p-2 items-center mb-2">
            <div
              ref={sliderLigne}
              className=" absolute w-[50px] h-[2px] [transition:0.4s] bg-black bottom-0 left-[16.67%] translate-x-[-50%]"
            ></div>
            <p
              onClick={() => {
                moveSlider(1);
              }}
              className={`w-1/3 text-center cursor-pointer ${
                slider === 1 ? "font-semibold" : ""
              }`}
            >
              Description
            </p>
            <p
              onClick={() => {
                moveSlider(2);
              }}
              className={`w-1/3 text-center cursor-pointer ${
                slider === 2 ? "font-semibold" : ""
              }`}
            >
              FAQ
            </p>
            <p
              onClick={() => {
                moveSlider(3);
              }}
              className={`w-1/3 text-center cursor-pointer ${
                slider === 3 ? "font-semibold" : ""
              }`}
            >
              Reviews
            </p>
          </header>
          <article className="articleSlider overflow-hidden py-2 relative pr-[8px]">
            <div
              className={`w-full h-full [transition:0.3s] absolute top-0 left-0 ${
                slider === 1 ? "" : "translate-x-[-100%]"
              }`}
            >
              <div>
                <div className="text-[#636363] font-light text-[0.9rem] lowercase leading-[1.6] py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  esse eveniet voluptates eos quaerat, sed dolo remque fugit duc
                  imus odio itaque blanditiis accusamus, facere veritatis quo
                  harum corrupti dicta accusantium. Beatae?
                </div>
                <span> Color </span>
                <div ref={colorRef} className="flex gap-2 items-center px-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={color}
                      className={`w-6 h-6 [transition:0.3s] cursor-pointer rounded-full my-2`}
                      style={{ backgroundColor: color }}
                      onClick={(e) => changeColor(color, e.target)}
                    ></div>
                  ))}
                </div>
                <span> Size </span>
                <div
                  ref={sizesRef}
                  className="flex gap-2 items-center py-3 px-4"
                >
                  {product.sizes.map((size, index) => (
                    <div
                      key={size}
                      className={`border-[1px] border-[solid] border-[black] font-extralight text-[#706e6e] rounded-[12px] p-[5px] w-[40px] h-[40px] flex justify-center items-center [transition:0.3s] cursor-pointer`}
                      onClick={(e) => changeSize(size, e.target)}
                    >
                      {" "}
                      {size}{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`w-full h-full [transition:0.3s]  absolute top-0 left-0 pr-2 ${
                slider === 2 ? "" : "translate-x-[-100%]"
              }`}
            >
              <ul>
                {faqs.map((faq, i) => (
                  <li
                    className=" border-b-[1px] border-solid border-black mb-2 pb-1 "
                    key={i}
                  >
                    <p className="w-full flex items-center justify-between py-1 pl-1 pr-5 ">
                      <span className="flex items-center gap-1">
                        {" "}
                        <GoDotFill /> {faq.question + "?"}{" "}
                      </span>
                      {i === activeFaq ? (
                        <FaAngleUp
                          className=" cursor-pointer"
                          onClick={() => toggleFaq(i as any)}
                        />
                      ) : (
                        <FaAngleDown
                          className=" cursor-pointer"
                          onClick={() => toggleFaq(i as any)}
                        />
                      )}
                    </p>
                    <p
                      className={`overflow-hidden pl-1 pr-5 w-full font-light text-[#656161] lowercase [transition:0.5s] ${
                        i !== activeFaq ? "h-[0px]" : "h-[26px]"
                      }`}
                    >
                      {" "}
                      {faq.response}{" "}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`w-full h-full [transition:0.3s] absolute top-0 left-0 overflow-y-auto bg-white p-2 rounded-[12px] ${
                slider === 3 ? "" : "translate-x-[-100%]"
              }`}
            >
              {product.reviews.map((review, i) => (
                <div
                  key={i}
                  className={`bg-primary py-2 px-2 rounded-[8px] ${
                    i !== product.reviews.length - 1 ? "mb-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={review.image}
                      alt=""
                    />
                    <div>
                      <p className="font-normal mb-1"> {review.name} </p>
                      <p className="flex gap-1 items-center">
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>
                            <FaStar
                              className={`${
                                index < review.rating ? "text-orange-300" : ""
                              }`}
                            />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <p className=" mt-2 pl-1 font-light text-[0.9rem]">
                    {" "}
                    {review.review}{" "}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
        <div className="flex items-center justify-around w-[70vw] translate-x-[-22%]">
          <div className="productImages w-[60%] p-[10px] gap-[15px]">
            <h3> Product images </h3>
            <div
              className={`sliderContainer flex justify-center items-center gap-3 overflow-hidden`}
            >
              <FaChevronLeft
                className="cursor-pointer text-xl"
                onClick={() =>
                  productImg > 1
                    ? toggleImgProduct(productImg + 1)
                    : toggleImgProduct(product.images.length - 1)
                }
              />
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className={`p-3 bg-primary rounded-[8px] cursor-pointer w-[${
                    100 / product.images.length
                  }%]`}
                >
                  <img
                    onClick={() => {
                      toggleImgProduct(i);
                      console.log(image);
                    }}
                    src={image as any}
                    alt="product image"
                    className="w-[90%]"
                  />
                </div>
              ))}
              <FaChevronRight
                className="cursor-pointer text-xl"
                onClick={() =>
                  productImg < product.images.length - 1
                    ? toggleImgProduct(productImg + 1)
                    : toggleImgProduct(0)
                }
              />
            </div>
          </div>{" "}
          <button className="cartButton after:-z-10 hover:text-white hover:after:w-[210px] after:[transition:0.3s] after:content-[''] after:h-full after:w-[0] after:absolute after:left-[10px] after:top-2/4 after:-translate-y-1/2 after:bg-[black]  relative w-[220px] text-cente after:rounded-[20px] rounded-[20px] h-[50px] border-[1px] border-solid border-black py-2 mt-5 ">
            <TbShoppingCartPlus className="bg-black text-white border-[1px] border-solid [transition:0.3s] border-black absolute top-1/2 left-[-4px] translate-y-[-50%] h-[56px] w-[56px] p-3 rounded-full" />
            <p>Add to card</p>{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
