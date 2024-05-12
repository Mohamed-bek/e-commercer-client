"use client";
import { RiDashboardFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaCartShopping, FaTrash } from "react-icons/fa6";
import { FaSearch, FaUsers } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import ChartComponent from "../../components/ChartComponent";
import { useState, useEffect, useRef } from "react";

export interface IPurchase {
  _id: string;
  clientId: {
    firstName: string;
    lastName: string;
    _id: string;
    avatar: {
      public_id: string;
      url: string;
    };
  };
  createdAt: Date;
  purchases: {
    _id: string;
    plantId: {
      _id: string;
      name: string;
      images: { public_id: string; url: string }[];
    };
    price: number;
    quantity: number;
    sellerId: {
      firstName: string;
      lastName: string;
      _id: string;
      avatar: { public_id: string; url: string };
    };
  }[];
}

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
  const box1 = useRef<HTMLElement>(null);
  const [months, setMonths] = useState();
  const [totaleSellers, setTotaleSellers] = useState();
  const [totalePlants, setTotalePlants] = useState();
  const [totaleSales, setTotaleSales] = useState();
  const [purchasesData, setPurchasesData] = useState([
    1000, 1200, 800, 1500, 2000, 1800,
  ]);
  const [visitorData, setVisitorData] = useState([0, 0, 0, 0, 0, 0]);
  const [purchases, setPurchases] = useState<IPurchase[]>([
    {
      _id: "1",
      clientId: {
        firstName: "John",
        lastName: "Doe",
        _id: "client1_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase1_id",
          plantId: {
            _id: "plant1_id",
            name: "Rose",
            images: [
              {
                public_id: "rose_image1_id",
                url: "https://example.com/rose1.jpg",
              },
              {
                public_id: "rose_image2_id",
                url: "https://example.com/rose2.jpg",
              },
            ],
          },
          price: 10,
          quantity: 2,
          sellerId: {
            firstName: "Jane",
            lastName: "Smith",
            _id: "seller1_id",
            avatar: {
              public_id: "seller_avatar_id",
              url: "https://example.com/avatar.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "2",
      clientId: {
        firstName: "Alice",
        lastName: "Johnson",
        _id: "client2_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase2_id",
          plantId: {
            _id: "plant2_id",
            name: "Lily",
            images: [
              {
                public_id: "lily_image1_id",
                url: "https://example.com/lily1.jpg",
              },
              {
                public_id: "lily_image2_id",
                url: "https://example.com/lily2.jpg",
              },
            ],
          },
          price: 15,
          quantity: 1,
          sellerId: {
            firstName: "Bob",
            lastName: "Brown",
            _id: "seller2_id",
            avatar: {
              public_id: "seller2_avatar_id",
              url: "https://example.com/avatar2.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "3",
      clientId: {
        firstName: "Emily",
        lastName: "Williams",
        _id: "client3_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase3_id",
          plantId: {
            _id: "plant3_id",
            name: "Tulip",
            images: [
              {
                public_id: "tulip_image1_id",
                url: "https://example.com/tulip1.jpg",
              },
              {
                public_id: "tulip_image2_id",
                url: "https://example.com/tulip2.jpg",
              },
            ],
          },
          price: 8,
          quantity: 3,
          sellerId: {
            firstName: "Sarah",
            lastName: "Jones",
            _id: "seller3_id",
            avatar: {
              public_id: "seller3_avatar_id",
              url: "https://example.com/avatar3.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "1",
      clientId: {
        firstName: "John",
        lastName: "Doe",
        _id: "client1_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase1_id",
          plantId: {
            _id: "plant1_id",
            name: "Rose",
            images: [
              {
                public_id: "rose_image1_id",
                url: "https://example.com/rose1.jpg",
              },
              {
                public_id: "rose_image2_id",
                url: "https://example.com/rose2.jpg",
              },
            ],
          },
          price: 10,
          quantity: 2,
          sellerId: {
            firstName: "Jane",
            lastName: "Smith",
            _id: "seller1_id",
            avatar: {
              public_id: "seller_avatar_id",
              url: "https://example.com/avatar.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "2",
      clientId: {
        firstName: "Alice",
        lastName: "Johnson",
        _id: "client2_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase2_id",
          plantId: {
            _id: "plant2_id",
            name: "Lily",
            images: [
              {
                public_id: "lily_image1_id",
                url: "https://example.com/lily1.jpg",
              },
              {
                public_id: "lily_image2_id",
                url: "https://example.com/lily2.jpg",
              },
            ],
          },
          price: 15,
          quantity: 1,
          sellerId: {
            firstName: "Bob",
            lastName: "Brown",
            _id: "seller2_id",
            avatar: {
              public_id: "seller2_avatar_id",
              url: "https://example.com/avatar2.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "3",
      clientId: {
        firstName: "Emily",
        lastName: "Williams",
        _id: "client3_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase3_id",
          plantId: {
            _id: "plant3_id",
            name: "Tulip",
            images: [
              {
                public_id: "tulip_image1_id",
                url: "https://example.com/tulip1.jpg",
              },
              {
                public_id: "tulip_image2_id",
                url: "https://example.com/tulip2.jpg",
              },
            ],
          },
          price: 8,
          quantity: 3,
          sellerId: {
            firstName: "Sarah",
            lastName: "Jones",
            _id: "seller3_id",
            avatar: {
              public_id: "seller3_avatar_id",
              url: "https://example.com/avatar3.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "1",
      clientId: {
        firstName: "John",
        lastName: "Doe",
        _id: "client1_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase1_id",
          plantId: {
            _id: "plant1_id",
            name: "Rose",
            images: [
              {
                public_id: "rose_image1_id",
                url: "https://example.com/rose1.jpg",
              },
              {
                public_id: "rose_image2_id",
                url: "https://example.com/rose2.jpg",
              },
            ],
          },
          price: 10,
          quantity: 2,
          sellerId: {
            firstName: "Jane",
            lastName: "Smith",
            _id: "seller1_id",
            avatar: {
              public_id: "seller_avatar_id",
              url: "https://example.com/avatar.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "2",
      clientId: {
        firstName: "Alice",
        lastName: "Johnson",
        _id: "client2_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase2_id",
          plantId: {
            _id: "plant2_id",
            name: "Lily",
            images: [
              {
                public_id: "lily_image1_id",
                url: "https://example.com/lily1.jpg",
              },
              {
                public_id: "lily_image2_id",
                url: "https://example.com/lily2.jpg",
              },
            ],
          },
          price: 15,
          quantity: 1,
          sellerId: {
            firstName: "Bob",
            lastName: "Brown",
            _id: "seller2_id",
            avatar: {
              public_id: "seller2_avatar_id",
              url: "https://example.com/avatar2.jpg",
            },
          },
        },
      ],
    },
    {
      _id: "3",
      clientId: {
        firstName: "Emily",
        lastName: "Williams",
        _id: "client3_id",
        avatar: {
          public_id: "seller3_avatar_id",
          url: "https://example.com/avatar3.jpg",
        },
      },
      createdAt: new Date(),
      purchases: [
        {
          _id: "purchase3_id",
          plantId: {
            _id: "plant3_id",
            name: "Tulip",
            images: [
              {
                public_id: "tulip_image1_id",
                url: "https://example.com/tulip1.jpg",
              },
              {
                public_id: "tulip_image2_id",
                url: "https://example.com/tulip2.jpg",
              },
            ],
          },
          price: 8,
          quantity: 3,
          sellerId: {
            firstName: "Sarah",
            lastName: "Jones",
            _id: "seller3_id",
            avatar: {
              public_id: "seller3_avatar_id",
              url: "https://example.com/avatar3.jpg",
            },
          },
        },
      ],
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
  function DeleteProduct(_id: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <article
      ref={box1}
      className="h-full article w-full border border-solid border-white py-1 [transition:0.3s] translate-x-0 overflow-auto rounded-lg"
    >
      <div className="w-full px-3 pt-2 flex items-center justify-between">
        <div className="bg-transparent border border-solid border-black rounded-xl flex px-3 items-center justify-between w-fit">
          <input
            className="bg-transparent focus:outline-none px-1 py-1 w-[160px]"
            type="text"
            placeholder="Search Product..."
          />
          <FaSearch className=" cursor-pointer" />
        </div>
        <div>
          <label className="hide" htmlFor="Date">
            {" "}
            Date{" "}
          </label>
          <select
            name="Date"
            className="ml-2 focus:outline-none border border-solid border-black rounded px-2 cursor-pointer"
          >
            <option value="">All</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>
      </div>
      <div className="purchase flex justify-between items-center px-3 py-3 border-b border-solid border-black">
        <div className="w-[25%]"> product </div>
        <div className="w-[25%]"> client </div>
        <div className="w-[25%]"> store </div>
        <div className="w-[10%] text-center"> price </div>
        <div className="w-[15%] text-center "> date </div>
      </div>
      <div className="w-full scroll overflow-y-auto">
        {purchases?.map((purchase, i) =>
          purchase.purchases.map((p) => (
            <div
              key={p._id}
              className={`purchase flex justify-between items-center px-3 py-1 ${
                i % 2 === 1 ? "bg-primary" : "bg-[white]"
              } ${i === 0 ? "border-t" : ""}`}
            >
              <div className="flex gap-2 items-center w-[25%]">
                <img
                  className="w-12 rounded-md"
                  src={p.plantId.images[0]?.url || ""}
                  alt="product img"
                />
                <p className="hide"> {p.plantId.name && p.plantId.name} </p>
              </div>
              <div className="flex gap-2 items-center w-[25%]">
                <img
                  className="w-12 rounded-full"
                  src={purchase.clientId.avatar.url}
                  alt="product img"
                />
                <p className="hide">
                  {" "}
                  {purchase.clientId.firstName +
                    " " +
                    purchase.clientId.lastName}{" "}
                </p>
              </div>
              <div className="flex gap-2 items-center w-[25%]">
                <img
                  className="w-12 rounded-full"
                  src={p.sellerId.avatar?.url || ""}
                  alt="product img"
                />
                <p className="hide">
                  {" "}
                  {p.sellerId.firstName + " " + p.sellerId.lastName}{" "}
                </p>
              </div>
              <div className="w-[10%] font-[600] text-center">
                {" "}
                {p.price}DA{" "}
              </div>
              <div className="w-[15%] font-[200] text-center">
                {new Date(purchase.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
}
