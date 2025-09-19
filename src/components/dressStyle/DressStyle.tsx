import { memo } from "react";
import casual from "@/assets/browserStyle/image 11.png";
import party from "@/assets/browserStyle/image 12.png";
import formal from "@/assets/browserStyle/image 13.png";
import gym from "@/assets/browserStyle/image 14.png";

import Image from "next/image";
const DressStyle = () => {
  return (
    <div className="container">
      <div className=" bg-[#F0F0F0] rounded-[40px]">
        <h2 className="text-center text-[48px] pt-[50px] font-black max-[700px]:text-[36px]">
          BROWSE BY DRESS STYLE
        </h2>
        <div className=" px-[70px] pb-[65px] pt-[60px] grid grid-cols-3 gap-[20px] max-[850px]:grid-cols-2 max-[780px]:px-[0] max-[540px]:grid-cols-1">
          <div className="flex relative ">
            <h4 className="absolute top-[25px] left-[35px] text-[36px] font-bold">
              Casual
            </h4>
            <Image
              className="rounded-[25px]  w-full h-[300px] object-cover duration-150 hover:shadow-lg"
              src={casual}
              alt="casual"
            />
          </div>
          <div className="flex relative col-span-2 max-[850px]:col-span-1">
            <h4 className="absolute top-[25px] left-[35px] text-[36px] font-bold">
              Formal
            </h4>
            <Image
              className="rounded-[25px]  w-full h-[300px] object-cover duration-150 hover:shadow-lg"
              src={formal}
              alt="formal"
            />
          </div>
          <div className="flex relative col-span-2 max-[850px]:col-span-1">
            <h4 className="absolute top-[25px] left-[35px] text-[36px] font-bold">
              Party
            </h4>
            <Image
              className="rounded-[25px] w-full h-[300px] object-cover duration-150 hover:shadow-lg"
              src={party}
              alt="party"
            />
          </div>
          <div className="flex relative">
            <h4 className="absolute top-[25px] left-[35px] text-[36px] font-bold">
              Gym
            </h4>
            <Image
              className="rounded-[25px]  w-full h-[300px] object-cover duration-150 hover:shadow-lg"
              src={gym}
              alt="gym"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DressStyle);
