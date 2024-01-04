import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/dark.jpeg')] md:h-[70vh]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-white text-center xl:text-6xl">Delicious Burger  <br/> & Frenh fry</h1>
        <p className="text-white text-center px-6 mt-5 mb-5 xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis laudantium minus ex ratione? nostrum dolore repellendus!</p>
          <CountDown/>
        <button className="p-2 bg-red-500 rounded-md text-white">
          order now
        </button>
      </div>
      <div className="relative w-full flex-1 md:w-full">
        <Image src="/bburger.jpeg" alt="burger" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
