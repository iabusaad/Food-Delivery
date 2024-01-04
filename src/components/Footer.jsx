import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 lg:p-20 xl:p-40 flex items-center justify-between text-red-500 px-5
    ">
      <Link href="/" className="font-bold text-lg">MASSIMO</Link>
      <p>@ ALL RIGHT RESERVED</p> 
    </div>
  );
};

export default Footer;
