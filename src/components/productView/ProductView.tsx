import Image from "next/image";
import ProductImage from "../productImage/ProductImage";
import star from "@/assets/Star 3.svg";
interface Category {
  id: number;
  name: string;
}
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;

  images: string[];
}

interface ProductViewProps {
  data: Product[];
}

const ProductView = ({ data }: ProductViewProps) => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-4 gap-[20px] max-[950px]:grid-cols-3 max-[700px]:grid-cols-2">
          {data?.map((item: any) => (
            <div className="" key={item.id}>
              <div className="h-[300px] max-[500px]:h-[260px]">
                <ProductImage
                  rasm={item?.images[0]}
                  id={item?.id}
                  title={item?.title}
                />
              </div>
              <div className="py-[15px]">
                <h3 className="text-[20px] font-bold mb-[8px] line-clamp-1 max-[500px]:text-[18px]" title={item.title}>{item.title}</h3>
                <div className="flex items-center gap-[4px]">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                </div>
                <p className="price mt-[8px] text-[24px] font-bold max-[500px]:text-[20px]">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
