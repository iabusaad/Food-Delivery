import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <div className="flex items-center gap-2 flex-1 md:w-5 md:h-5">
        <Image
          src="/cart.png"
          alt="cart"
          height={40}
          width={40}
        
        />
        <span>Cart(3)</span>
      </div>
    </Link>
  );
};

export default CartIcon;
