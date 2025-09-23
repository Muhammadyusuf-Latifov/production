"use client";
import { useState } from "react";

import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart,  } from "react-icons/lu";
import Me from "../me/Me";
import SignIn from "../singinAndProfileButtons/SignIn";

const Header = () => {
  const handleGo = () => {
    window.open("https://project-two-olive.vercel.app/login");
  };

  return (
    <>
      <Me />
      <div className="bg-[#000]">
        <nav className="container flex items-center justify-center py-[14px]">
          <p className="text-[#fff]">
            Sign up and get 20% off to your first order.
            <span
              className="hover:underline cursor-pointer"
              onClick={() => handleGo()}
            >
              Sign Up Now
            </span>
          </p>
        </nav>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container  flex items-center justify-between font-medium text-gray-700 py-[24px]">
          <div className="">
            <Link href={"/"}>
              <h2 className="text-[#000] text-[32px] font-extrabold max-[430px]:text-[24px]">
                E-commerce
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-[24px] max-[700px]:hidden">
            <Link className="link" href="/">
              Home
            </Link>
            <Link className="link" href={"/about"}>
              About
            </Link>
            <Link className="link" href={"/user"}>
              User
            </Link>
            <Link className="link" href={"/user"}>
              Brands
            </Link>
          </div>
          <div className=" flex items-center gap-[10px] max-w-[500px]  px-[16px] py-[12px] w-[100%] rounded-[30px] bg-[#F0F0F0] max-[1170px]:hidden">
            <IoSearchOutline className="text-[22px] text-[#00000066]" />
            <input
              type="text"
              className="outline-0 flex-1"
              placeholder="Search for products... "
            />
          </div>
          <div className="flex items-center gap-[10px] text-[22px]">
            <LuShoppingCart />
            <SignIn />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
