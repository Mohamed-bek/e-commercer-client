"use client";
import Card from "@/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import { IProduct } from "@/components/SmallCard";

type Props = {};

function page({ params }: { params: { productID: string } }) {
  const [product, setProduct] = useState<IProduct>();
  const cookie = Cookie();
  const getProduct = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/product/get/${params.productID}`,
      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (data.success === true) {
      setProduct(data.product);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return <Card product={product as IProduct} />;
}

export default page;
