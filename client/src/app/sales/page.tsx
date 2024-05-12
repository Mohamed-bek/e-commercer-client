"use client";
import CircleBar from "@/components/CircleBar";
import React, { useState, useRef, useEffect } from "react";
import ChartComponent from "@/components/ChartComponent";
import { userStore } from "../UserContext";
import { json } from "stream/consumers";

type Props = {};

function page({}: Props) {
  useEffect(() => {
    console.log();
  }, []);

  const [pecantage, setPecantage] = useState(30);
  const MINQTE = 10;
  const MOYQTE = 40;
  const [products, setproducts] = useState([
    {
      _id: "purchases1",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 122737832",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      price: 300,
      piece: 5,
      delevred: true,
    },
    {
      _id: "purchase1",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "pro",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      price: 300,
      piece: 5,
      delevred: true,
    },
    {
      _id: "purchase3",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      price: 300,
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      piece: 5,
      delevred: false,
    },
    {
      _id: "purchase4",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      price: 300,
      piece: 5,
      delevred: true,
    },
    {
      _id: "purchase5",
      img: "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
      name: "product 1",
      userImg:
        "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png",
      userName: "Mohamed Bekkouche",
      price: 300,
      piece: 5,
      delevred: false,
    },
  ]);
  const [bestSellingProducts, setbestSellingProducts] = useState([
    {
      _id: "bestSellingProduct1",
      name: "Product for Hear",
      sellingQte: 100,
      Qte: 300,
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
    },
    {
      _id: "bestSellingProduct2",
      name: "Nike shoes",
      sellingQte: 877,
      Qte: 1000,
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
    },
    {
      _id: "bestSellingProduct2",
      name: "Iphone 15 pro max",
      sellingQte: 200,
      Qte: 500,
      avatar:
        "http://res.cloudinary.com/dt8qbasyh/image/upload/v1710094290/avatars/nwahkveg4w53s6212jm4.jpg",
    },
  ]);
  const bestSellingProductsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bestSellingProductsRef) {
      const products = bestSellingProductsRef.current
        ?.querySelectorAll("div .bestSellingProduct")
        .forEach(
          (product) =>
            ((product as HTMLDivElement).style.width = `${product.getAttribute(
              "data-width"
            )}%`)
        );
    }
  }, []);

  const months = ["January", "February", "March", "April", "May", "June"];

  // Dummy data for number of website visitors for each month (replace with actual data)
  const visitorsData = [1000, 1200, 800, 1500, 2000, 1800];

  // Data object for the chart
  const data = {
    labels: months,
    datasets: [
      {
        label: "Store Visitors",
        data: visitorsData,
        backgroundColor: `${window.localStorage.getItem("graphColor")}`,
        borderColor: `${window.localStorage.getItem("graphBorderColor")}`,
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  // Options object for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
      },
    },
  };

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"]; // Assuming 4 weeks in a month

  // Dummy data for sales analytics for every week in the month (replace with actual data)
  const salesData = [
    5500, 880, 3000, 1000,
    // [1000, 1200, 800, 1500], // Sales data for Week 1
    // [1200, 1300, 900, 1600], // Sales data for Week 2
    // [1100, 1250, 850, 1550], // Sales data for Week 3
    // [1300, 1400, 950, 1700], // Sales data for Week 4
  ];

  // Aggregate sales data for all products into a single value for each week
  //   const aggregatedSalesData = salesData.map((weekSales) =>
  //     weekSales.reduce((total, sales) => total + sales, 0)
  //   );

  // Data object for the chart
  const dataline = {
    labels: weeks,
    datasets: [
      {
        label: "Total Sales",
        data: salesData,
        backgroundColor: `${window.localStorage.getItem("graphColor")}`,
        borderColor: `${window.localStorage.getItem("graphBorderColor")}`,
        fill: false,
      },
    ],
  };

  // Options object for the chart
  const optionsline = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
        ticks: {
          callback: function (value: any) {
            if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + "M";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + "K";
            } else {
              return value.toString();
            }
          },
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
    <div className="h-[100vh] w-full bg-primary flex justify-center items-center sell">
      <div className="cont">
        <div className="flex box1 w-full items-center gap-[20px] mb-5 justify-center">
          <div className="bg-white w-1/3 rounded-xl h-[300px] p-2">
            <h2 className="text-[1.7rem] -mb-1"> Totale Sales </h2>
            <p className=" capitalize text-[0.9rem] font-[300] pl-1">
              {" "}
              this year total data{" "}
            </p>
            <div className="w-[180px] h-[180px] flex justify-center items-center my-2 mx-auto">
              <CircleBar percentage={pecantage} />
            </div>
            <p className="text-[1.2rem] font-[300] capitalize px-2">
              {" "}
              sales volume{" "}
              {pecantage < 0
                ? "infortunately decreased "
                : "fortunately increased "}{" "}
            </p>
          </div>
          <div className="bg-white rounded-xl h-[300px] p-2 w-1/3 ">
            <h2 className="text-[1.7rem] -mb-1"> Best Selling Products </h2>
            <div ref={bestSellingProductsRef}>
              {bestSellingProducts.map((product) => (
                <div className="py-2" key={product._id}>
                  <h3 className="text-[1rem] font-[400] mb-1 capitalize">
                    {" "}
                    {product.name}{" "}
                  </h3>
                  <div className="w-4/5 h-8 bg-primary rounded-full relative">
                    <div
                      data-width={(product.sellingQte * 100) / product.Qte}
                      className="bestSellingProduct [transition:0.4s] w-0  h-full bg-blue-500 rounded-full flex justify-center items-center text-[0.9rem] font-[300]"
                    >
                      {" "}
                      {product.sellingQte}{" "}
                    </div>{" "}
                    <span className=" absolute top-1/2 right-0 pr-3 -translate-y-1/2 text-[0.9rem] font-[300]">
                      {product.Qte}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl h-[300px] p-2 w-1/3 ">
            <h2 className="text-[1.7rem] mb-1 "> Store Visitors </h2>
            <div className="w-full h-max flex justify-center items-center chart">
              <ChartComponent type="bar" data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full box2 gap-[20px] h-1/2">
          <div className="bg-white rounded-xl h-full w-[32.3%] p-3">
            <h2 className="text-[1.7rem] mb-1 "> Store Visitors </h2>
            <div className="w-full chart h-max flex justify-center items-center py-3">
              <ChartComponent
                type="line"
                data={dataline}
                options={optionsline as any}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl h-full w-[67.7%] p-2">
            <div className="h-[100px]">
              <h2 className="text-[1.7rem] -mb-1"> Totale Sales </h2>
              <p className=" capitalize text-[0.9rem] font-[300] pl-1">
                {" "}
                this year total data{" "}
              </p>
              <ul className="flex items-center border-b border-solid border-[gray] py-2">
                <li className="w-[25%] text-[gray] text-[0.9rem] product">
                  Product
                </li>
                <li className="w-[25%] text-[gray] text-[0.9rem] pl-3 user">
                  Client
                </li>
                <li className="w-[10%] text-center text-[gray] text-[0.9rem]">
                  Piece{" "}
                </li>
                <li className="w-[20%] text-center text-[gray] text-[0.9rem] delevred">
                  {" "}
                  Delevred{" "}
                </li>
                <li className="w-[20%] text-end text-[gray] text-[0.9rem] pr-3">
                  {" "}
                  Price{" "}
                </li>
              </ul>
            </div>
            <div className="productStock overflow-auto">
              {products &&
                products.map((product) => (
                  <ul
                    key={product._id}
                    className="flex items-center border-b border-solid border-[gray] py-2"
                  >
                    <li className="w-[25%] flex items-center product">
                      {" "}
                      <img
                        className="w-10 h-10 rounded-full mr-2"
                        src={product.img}
                        alt="product Img"
                      />{" "}
                      <span className="text-[0.9rem] productName">
                        {" "}
                        {product.name}{" "}
                      </span>
                    </li>
                    <li className="w-[25%] flex items-center text-center user">
                      {" "}
                      <img
                        className="w-10 h-10 rounded-full mr-2"
                        src={product.userImg}
                        alt="product Img"
                      />{" "}
                      <span className="text-[0.9rem] userName">
                        {" "}
                        {product.userName}{" "}
                      </span>
                    </li>
                    <li className="w-[10%] text-center"> {product.piece} </li>
                    <li className="w-[20%] text-center delevred">
                      <span
                        className="w-fit px-3 py-2 rounded-3xl"
                        style={{
                          backgroundColor: `${
                            product.delevred ? "#06d006d4" : "#fb1818b3"
                          }`,
                        }}
                      >
                        {product.delevred ? "delevred" : "not yet"}
                      </span>
                    </li>
                    <li className="w-[20%] text-end"> {product.price}DA </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
