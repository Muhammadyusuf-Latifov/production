"use client";
import Image from "next/image";
import { FC, memo } from "react";
import no from "@/assets/noImage.jpg";
import { useRouter } from "next/navigation";
interface props {
  rasm?: string;
  id?: number;
  title?: string;
}

const ProductImage: FC<props> = (props) => {
  const { id, title, rasm } = props;
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push(`/product/${id}`)}
        src={rasm ? "https://api.errorchi.uz/product/image/" + rasm : no}
        width={300}
        alt={title || ""}
        height={300}
        loading="lazy"
        className="w-full h-[250px] object-cover"
      />
    </div>
  );
};

export default memo(ProductImage);
