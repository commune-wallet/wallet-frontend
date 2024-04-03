"use client";
import { FC } from "react";
import { FaAngleLeft, FaRegStar } from "react-icons/fa";
import { Icons } from "../Icons";
import Link from "next/link";

interface HeaderProps {
  currency: string;
  balance: number;
}

const Header: FC<HeaderProps> = ({ currency, balance }) => {
  const CurrencyIcon =
    Icons.currencies[currency as keyof typeof Icons.currencies];

  return (
    <div className="flex my-14 items-center justify-between">
      <Link href={"/"}>
        <div className="h-12 w-12 flex items-center justify-center text-[#e5e5e5] bg-main-bg border-[1px] border-[#e5e5e5] rounded-full">
          <FaAngleLeft className="h-6 w-6" />
        </div>
      </Link>
      <div className="rounded-full flex items-center gap-2 bg-white py-2 px-4">
        <CurrencyIcon />
        <span className="text-stone-500">${balance.toLocaleString()}</span>
        <span className="text-strong-green">+0%</span>
      </div>
      <div className="h-12 w-12 flex items-center justify-center text-[#e5e5e5] bg-main-bg border-[1px] border-[#e5e5e5] rounded-full cursor-pointer">
        <FaRegStar className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
