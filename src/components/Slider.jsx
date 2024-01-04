"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slider.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slider3.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slider3.jpg",
  },
];

const Slider = () => {

  const [slider, setSlider] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      () => setSlider((prev) =>(prev===data.length-1 ?0 :prev+1))
      return ()=>clearInterval(interval)
  },2000)
  }, [])
  
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[slider].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-md">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[slider].image}
          alt="img"
          height={500}
          width={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
