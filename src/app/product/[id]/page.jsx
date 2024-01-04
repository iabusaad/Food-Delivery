"use client"
import Price from "@/components/price";
import { singleProduct } from "@/utils/data";
import Image from "next/image";
import React from "react";

const ProductId = () => {
  return (
    <div className="mt-5 lg:px-20 xl:px-40 h-screen text-red-500 flex justify-around flex-col md:flex-row  px-5 gap-5">
      <div className="w-full h-1/2 relative  md:h[70%]">
        {singleProduct.img && (
          <Image
            src="/pizza.jpg"
            alt=""
            className="object-contain"
            fill
          />
        )}
      </div>
      <hr />
      <div className="h-1/2 flex flex-col gap-4 md:h[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="font-bold text-2xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} option={singleProduct.options} />
      </div>
    </div>
  );
};

export default ProductId;
