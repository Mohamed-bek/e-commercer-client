"use client";
import { RiDashboardFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
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
  const [totaleSellers, setTotaleSellers] = useState(1003);
  const [totalePlants, setTotalePlants] = useState(2000);
  const [totaleSales, setTotaleSales] = useState(98004);
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
        backgroundColor: "rgb(255 255 255)",
        borderColor: "rgb(255 255 255)",
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
        backgroundColor: "rgb(255 255 255)",
        borderColor: "rgb(255 255 255)",
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
  return (
    <article
      ref={box1}
      className="gridAna h-full w-full p-5 [transition:0.3s] grid grid-cols-[repeat(auto-fit_,_minmax(400px_,_1fr))] gap-[20px]"
    >
      <div className="text-white bg-primary p-4 px-7 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 p-1 bg-[#49e679ba] rounded-sm flex justify-center items-center">
            <FaCartShopping className="text-[1.8rem]" />
          </div>
          <div>
            <img className="scale-150" src="/increaseWhite.png" alt="" />
          </div>
        </div>
        <p className="text-[1.3rem] font-light px-[0]  mt-5 mb-1 ">
          {" "}
          Total Sales{" "}
        </p>
        <p className="text-[1.6rem] font-medium mb-7"> {totaleSales} </p>
        <p className="pt-3 text-center text-[0.9rem] border-t border-white border-solid">
          {" "}
          Started from 1 mars 2024{" "}
        </p>
      </div>
      <div className=" bg-primary p-4 px-7 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 p-1 rounded-sm bg-[#39cf6a5c] flex justify-center items-center">
            <PiPackageFill className="text-[1.8rem] text-primary" />
          </div>
          <div>
            <img className=" scale-150" src="/increase.png" alt="" />
          </div>
        </div>
        <p className="text-[1.3rem] font-light px-[0]  mt-5 mb-1 ">
          {" "}
          Total Products{" "}
        </p>
        <p className="text-[1.6rem] font-medium mb-7"> {totalePlants} </p>
        <p className="pt-3 text-center text-[0.9rem] border-t border-black border-solid">
          {" "}
          Started from 1 mars 2024{" "}
        </p>
      </div>
      <div className=" bg-primary p-4 px-7 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 p-1 bg-[#39cf6a5c] rounded-sm flex justify-center items-center">
            <FaUserTie className="text-[1.8rem] text-primary" />
          </div>
          <div>
            <img className=" scale-150" src="/increase.png" alt="" />
          </div>
        </div>
        <p className="text-[1.3rem] font-light px-[0]  mt-5 mb-1 ">
          {" "}
          Total Stores{" "}
        </p>
        <p className="text-[1.6rem] font-medium mb-7"> {totaleSellers} </p>
        <p className="pt-3 text-center text-[0.9rem] border-t border-black border-solid">
          {" "}
          Started from 1 mars 2024{" "}
        </p>
      </div>
      <div className="rounded-lg bg-primary text-white flex justify-center items-center">
        <ChartComponent type="bar" data={data} options={options} />
      </div>
    </article>
  );
}
