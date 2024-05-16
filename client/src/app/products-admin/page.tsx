"use client";
import { RiDashboardFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaCartShopping, FaStar, FaTrash } from "react-icons/fa6";
import { FaSearch, FaUsers } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import ChartComponent from "../../components/ChartComponent";
import { useState, useEffect, useRef } from "react";
import { IProduct } from "@/components/SmallCard";
export enum ERole {
  USER = "user",
  SPECIALIST = "specialist",
  SELLER = "seller",
  FREELANCER = "freelancer",
  ADMIN = "admin",
  ORGANISME = "organisme",
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  avatar: {
    public_id: string;
    url: string;
  };
  role: ERole;
}

export default function App() {
  const deleteRef = useRef<HTMLDivElement>(null);
  const box1 = useRef<HTMLElement>(null);
  const [productDelete, setproductDelete] = useState<IProduct | null>(null);
  const [months, setMonths] = useState();
  const [totaleSellers, setTotaleSellers] = useState();
  const [totalePlants, setTotalePlants] = useState();
  const [totaleSales, setTotaleSales] = useState();
  const [purchasesData, setPurchasesData] = useState([
    1000, 1200, 800, 1500, 2000, 1800,
  ]);
  const [visitorData, setVisitorData] = useState([0, 0, 0, 0, 0, 0]);
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
  useEffect(() => {}, []);
  const data = {
    labels: months,
    datasets: [
      {
        label: "Purchases Analysis",
        data: purchasesData,
        backgroundColor: "rgb(3 217 104 / 65%)",
        borderColor: "rgb(0 146 68)",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const dataVisitor = {
    labels: months,
    datasets: [
      {
        label: "Visitor Analysis",
        data: visitorData,
        backgroundColor: "rgb(3 217 104 / 65%)",
        borderColor: "rgb(0 146 68)",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  const DeleteProduct = () => {
    const productsUpdate = products.filter(
      (product) => product._id !== productDelete?._id
    );
    setProducts(productsUpdate);
  };

  return (
    <article
      ref={box1}
      className="h-full article w-full border border-solid border-white py-1 [transition:0.3s] translate-x-0 overflow-auto rounded-lg"
    >
      <div
        ref={deleteRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]  justify-center items-center z-50 backdrop-blur-[2px] hidden"
      >
        <div className="bg-white p-5 rounded-lg border border-solid border-black z-50">
          <h1 className="text-[1.4rem]">
            {" "}
            Are You sure That You want To delete This Product{" "}
          </h1>
          <div className="flex items-center">
            {" "}
            <img
              className="w-16 h-16 rounded-full mr-2"
              src={productDelete?.avatar.url}
              alt=""
            />{" "}
            <p> {productDelete?.name} </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => {
                setproductDelete(null);
                deleteRef.current?.classList.replace("flex", "hidden");
              }}
              className="rounded-[8px] cursor-pointer w-24 py-2 text-center block border border-solid border-black [transition:0.15s] hover:bg-black hover:text-white"
            >
              {" "}
              Cancel
            </button>
            <button
              onClick={() => {
                deleteRef.current?.classList.replace("flex", "hidden");
                DeleteProduct();
              }}
              className="bg-[#dd1919] hover:bg-[#b41313] [transition:0.15s] text-[white] py-2 rounded-[8px] cursor-pointer w-24 text-center block "
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-3 pt-2 flex items-center justify-between">
        <div className="bg-transparent border border-solid border-black rounded-xl flex px-3 items-center justify-between w-fit">
          <input
            className="bg-transparent focus:outline-none px-1 py-1 w-[180px]"
            type="text"
            placeholder="Search Product..."
          />
          <FaSearch className=" cursor-pointer" />
        </div>
        <div>
          <label className="hide" htmlFor="category">
            {" "}
            Category{" "}
          </label>
          <select className="ml-2 focus:outline-none border border-solid border-black rounded px-2 cursor-pointer">
            <option value="">All</option>
            <option value="T-shirts">T-shirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Jeans">Jeans</option>
          </select>
        </div>
      </div>
      <div className="flex productAdmin justify-between items-center px-3 py-3 border-b border-solid border-black">
        <div className="w-[30%]"> product </div>
        <div className="w-[30%] pl-5"> seller </div>
        <div className="w-[15%] text-center"> price </div>
        <div className="w-[20%] text-center "> rating </div>
        <div className="w-[5%]"> edit </div>
      </div>
      <div className="w-full scroll overflow-y-auto">
        {products?.map((product, i) => (
          <div
            key={product._id}
            className={`productAdmin flex justify-between items-center px-3 py-1 ${
              i % 2 === 1 ? "bg-primary" : "bg-[white]"
            } ${i === 0 ? "border-t" : ""}`}
          >
            <div className="flex gap-2 items-center w-[30%]">
              <img
                className="w-12 rounded-md"
                src={product.avatar.url}
                alt="product img"
              />
              <p className="hide"> {product.name} </p>
            </div>
            <div className="flex gap-2 items-center w-[30%]">
              <img
                className="w-12 rounded-full"
                src={product.avatar.url}
                alt="product img"
              />
              <p className="hide"> {product.sellerName} </p>
            </div>
            <div className="w-[15%] font-[600] text-center">
              {" "}
              {product.price}DA{" "}
            </div>
            <div className="w-[20%] font-[200] justify-center flex items-center gap-1">
              {Array.from(Array(product.rating)).map((_, i) => (
                <FaStar className="text-[gold]" key={i} />
              ))}
            </div>
            <div className="w-[5%] font-[600] pl-3 text-end">
              <FaTrash
                onClick={() => {
                  setproductDelete(product);
                  deleteRef.current?.classList.replace("hidden", "flex");
                }}
                className=" cursor-pointer text-[1.1rem]"
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
