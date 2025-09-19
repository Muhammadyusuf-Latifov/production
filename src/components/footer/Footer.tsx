import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import a from "@/assets/Badge.svg";
import b from "@/assets/Badge (1).svg";
import c from "@/assets/Badge (2).svg";
import d from "@/assets/Badge (3).svg";
import e from "@/assets/Badge (4).svg";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,94%)] border-t relative border-gray-200 ">
      <div className="container   text-[#fff] absolute w-[100%] top-[-100px] left-[50%] -translate-x-1/2 max-[820px]:static max-[820px]:translate-x-0">
        <div className=" px-[70px] bg-[#000]  rounded-[20px] py-[40px] flex items-center justify-between max-[860px]:px-[18px] max-[720px]:flex-col">
          <div className="w-[45%] max-[1200px]:w-[55%] max-[720px]:w-[100%] max-[720px]:mb-[30px]">
            <h2 className="text-[40px] font-black max-[600px]:text-[34px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-[35%] max-[860px]:w-[45%] max-[720px]:w-[100%]">
            <div className=" flex items-center bg-[#fff] py-[12px] gap-[12px] px-[16px] rounded-[60px]">
              <MdOutlineMailOutline className="text-[#00000066]" />
              <input
                className="  placeholder:text-[#727272] text-[#000] outline-0 flex-1"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <button className="w-[100%] bg-[#fff] rounded-[60px] text-[#000] py-[12px] mt-[12px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 pt-[180px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-600 max-[820px]:pt-[60px]">
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-xl font-bold text-gray-900">E-commerce</h2>
          <p className="mt-4 text-sm text-gray-500 max-w-xs">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <Twitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <Facebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <Instagram />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <Github />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Help</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">FAQ</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Resources</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <p>Shop.co © 2025. All Rights Reserved</p>
        <div className="flex items-center gap-3">
          <Image src={a} alt="visa" />
          <Image src={b} alt="visa" />
          <Image src={c} alt="visa" />
          <Image src={d} alt="visa" />
          <Image src={e} alt="visa" />
        </div>
      </div>
    </footer>
  );
}
