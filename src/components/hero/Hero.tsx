"use client";

import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Props {
  data: any;
}

const Hero: FC<Props> = ({ data }) => {
  return (
    <div>
      <div className=" container">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper "
        >
          {data?.map((item: any) =>
            item?.images?.length === 0 ? null : (
              <SwiperSlide key={item.id}>
                <div className=" bg-gray-100 h-[570px]  rounded-lg shadow-md text-center">
                  <Image
                    src={
                      "https://api.errorchi.uz/product/image/" + item?.images[0]
                    }
                    width={300}
                    alt={item.title}
                    height={300}
                    loading="lazy"
                    className="w-full object-cover rounded-[22px] h-[100%]"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Hero);
