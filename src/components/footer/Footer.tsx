import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import a from "@/assets/Badge.svg";
import b from "@/assets/Badge (1).svg";
import c from "@/assets/Badge (2).svg";
import d from "@/assets/Badge (3).svg";
import e from "@/assets/Badge (4).svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white border-t relative border-gray-200 ">
      <div className="px-[120px] absolute top-[-90px] left-[50%] -translate-x-1/2 w-[100%]">
        <div className="container rounded-[28px] bg-black text-white py-10 ">
          <div className="flex items-center justify-between px-[80px]">
            <h3 className="title text-[40px] font-extrabold  w-[40%]">
              Stay up to date about our latest offers
            </h3>
            <form className="flex flex-col w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-full px-4 py-3 text-sm text-gray-800 focus:outline-none bg-[#fff] mb-[14px]"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-black  py-3 text-sm font-medium hover:bg-gray-100 px-[80px]"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 pt-[180px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-600">
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
         <Image src={a} alt="visa"/>
         <Image src={b} alt="visa"/>
         <Image src={c} alt="visa"/>
         <Image src={d} alt="visa"/>
         <Image src={e} alt="visa"/>
        </div>
      </div>
    </footer>
  );
}
