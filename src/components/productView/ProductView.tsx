"use client";
import Image from "next/image";
import ProductImage from "../productImage/ProductImage";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProductViewProps {
  data: Product[];
}

const ProductView = ({ data }: ProductViewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <div className="relative w-full h-52">
                  <ProductImage rasm={item.images} id={ item.id} />
          </div>
          <div className="flex flex-col flex-1 p-4">
            <h3 className="text-lg font-bold line-clamp-1">{item.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 flex-1">
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xl font-semibold text-green-600">
                {item.price.toLocaleString()} so'm
              </span>
              <button className="px-3 py-1.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition">
                Sotib olish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
