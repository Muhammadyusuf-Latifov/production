"use client";

import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import img from "@/assets/hero.png";
import Image from "next/image";
import versace from "@/assets/logos/Vector.svg";
import zara from "@/assets/logos/Vector (1).svg";
import gucci from "@/assets/logos/Vector (2).svg";
import prada from "@/assets/logos/Vector (3).svg";
import calvin from "@/assets/logos/Vector (4).svg";

const Hero = () => {
  const logos = [versace, zara, gucci, prada, calvin];
  return (
    <>
      <div className="bg-[#F2F0F1] pt-[30px]">
        <div className=" container">
          <div className="flex items-center justify-between gap-[20px] max-[1000px]:flex-col">
            <div className="w-[50%] max-[1000px]:w-[100%] ">
              <h2 className="hero_title text-[64px] w-[90%] max-[1150px]:w-full max-[700px]:text-[38px] ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>
              <p className="text-[#00000099] font-medium mt-[28px] w-[80%] max-[700px]:w-[100%] max-[700px]:mt-[12px]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="px-[67px] py-[15px] text-white bg-[#000] rounded-[60px] mt-[30px] max-[700px]:w-[100%]">
                Shop Now
              </button>
              <div className="grid grid-cols-3 mt-[45px] max-[800px]:grid-cols-2">
                <div className="px-[30px] border-r  border-[#0000001A]">
                  <h3 className="text-[40px] font-bold">200+</h3>
                  <p className="text-[#00000099] "> International Brands</p>
                </div>
                <div className="px-[30px]  border-r  border-[#0000001A] max-[800px]:border-r-0">
                  <h3 className="text-[40px] font-bold">2,000+</h3>
                  <p className="text-[#00000099] ">High-Quality Products</p>
                </div>
                <div className="px-[30px] max-[800px]:mt-[15px] ">
                  <h3 className="text-[40px] font-bold">30,000+</h3>
                  <p className="text-[#00000099] "> Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="h-[660px] max-[1150px]:h-auto flex flex-row-reverse w-[50%] max-[1000px]:w-[100%] max-[1000px]:justify-center">
              <Image
                className="block  h-[100%] w-[100%] max-w-[90%] max-[1000px]:max-w-[80%] object-cover max-[1000px]:h-[600px] max-[1000px]:mt-[30px] max-[600px]:max-w-[100%]"
                src={img}
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black overflow-hidden py-10">
        <div className="marquee">
          <div className="marquee__group">
            {logos.map((logo, i) => (
              <Image key={i} src={logo} alt="brand" className="h-12 w-auto" />
            ))}
          </div>
          <div className="marquee__group second-gr ">
            {logos.map((logo, i) => (
              <Image
                key={`dup-${i}`}
                src={logo}
                alt="brand"
                className="h-12 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Hero);
