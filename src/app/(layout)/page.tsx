import Hero from "@/components/hero/Hero";
import ProductView from "@/components/productView/ProductView";
import { memo } from "react";

const Home = async () => {
  const response = await fetch(
    "https://api.errorchi.uz/product?limit=8&skip=16 ", {next:{revalidate:60}}
  );
  const data = await response.json();
  const allData = data?.data;
  console.log(allData);

  return (
    <div className="Page pb-[70px] pt-[40px] bg-gradient-to-br from-gray-50 to-gray-200">
      <Hero data={allData?.allProducts} />
      <ProductView data={allData?.allProducts} subTitle={"Products"} />
    </div>
  );
};

export default memo(Home);
