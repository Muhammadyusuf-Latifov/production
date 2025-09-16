import ProductImage from "../productImage/ProductImage";
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
  subTitle: string;
}

const ProductView = ({ data, subTitle }: ProductViewProps) => {
  return (
    <section className=" ">
      <div className="container">
        <h2 className="text-center text-[30px] font-medium text-green-600 mt-[50px] mb-[30px]">
          {subTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] p-8  ">
          {data?.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-lg flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full ">
                <ProductImage
                  rasm={item?.images[0]}
                  id={item?.id}
                  title={item?.title}
                />
              </div>

              <div className="flex flex-col flex-1 p-5 ">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-green-600 font-medium">
                  {item.category.name}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2 flex-1">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-green-600">
                    ${item.price.toLocaleString()}
                  </span>
                  <button className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default ProductView;
