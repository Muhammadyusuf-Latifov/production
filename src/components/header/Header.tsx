"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
 

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-7 py-4 flex items-center justify-between">
       
        <div className="text-2xl font-bold text-green-600">MyShop</div>

     
        <nav className="hidden  md:flex space-x-8 font-medium text-gray-700">
          <a href="#" className="hover:text-green-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Products
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Deals
          </a>
          <a href="#" className="hover:text-green-600 transition">
            About Us
          </a>
        </nav>
      </div>

   
    </header>
  );
};

export default Header;
