"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import { WindArrowDown } from "lucide";

const Header = () => {
  const handleGo = () => {
    window.open("https://project-two-olive.vercel.app/login");
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-7 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-green-600">MyShop</div>

        <nav className="hidden  md:flex space-x-8 font-medium text-gray-700">
          <div className="flex items-center gap-[24px]">
            <Link className="link" href="/">
              Home
            </Link>
            <Link className="link" href={"/about"}>
              About
            </Link>
            <Link className="link" href={"/user"}>
              User
            </Link>
            <button
              onClick={() => handleGo()}
              className="bg-green-600 rounded-[12px] text-[#fff] px-[20px] py-[8px]"
            >
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
