import DressStyle from "@/components/dressStyle/DressStyle";
import Hero from "@/components/hero/Hero";
import ProductView from "@/components/productView/ProductView";
import { skip } from "node:test";
import { memo } from "react";

const Home = async () => {
  const response = await fetch("https://api.errorchi.uz/product?limit=4", {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  const allData = data?.data;
  console.log(allData);
  const secondData = await fetch(
    "https://api.errorchi.uz/product?limit=4&skip=4",
    { next: { revalidate: 60 } }
  );
  const twoData = await secondData.json();

  return (
    <div className="Page pb-[200px] ">
      <Hero />
      <h2 className="text-center text-[48px] mt-[60px] mb-[55px] font-extrabold">
        NEW ARRIVALS
      </h2>
      <ProductView data={allData?.allProducts} />
      <div className="flex items-center justify-center mt-[36px] mb-[60px]">
        <button className="px-[80px] py-[15px] rounded-[60px] border border-[#0000001A]">
          View All
        </button>
      </div>
      <hr className="container border-0 h-[1px] bg-[#ddd]" />
      <h2 className="text-center text-[48px] mt-[60px] mb-[55px] font-extrabold">
        NEW ARRIVALS
      </h2>
      <ProductView data={twoData?.data?.allProducts} />
      <div className="flex items-center justify-center mt-[36px] mb-[60px]">
        <button className="px-[80px] py-[15px] rounded-[60px] border border-[#0000001A]">
          View All
        </button>
      </div>
      <DressStyle />
    </div>
  );
};

export default memo(Home);
