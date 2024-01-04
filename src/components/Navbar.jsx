import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const user = false;
  return (
    <div className=" py-4 bg-red-50 flex justify-between items-center px-4 border-b-2 border-b-red-600 md:h-24 md:w-full">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" className="text-red-500">Home Page</Link>
        <Link href="/menu" className="text-red-500">Menu</Link>
        <Link href="/contact" className="text-red-500">Contact</Link>
      </div>
      <div className="text-xl text-red-500 md:font-bold  flex-1">
        <Link href="/"> MASSIMO</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-end flex-1">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 rounded md:absolute top-3 right-1 lg:static">
          <FaPhoneAlt />
          <span>90442020</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">menu Page</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
