import { FC, memo } from 'react';
interface props {
    rasm?: any
    id?:number
}
const ProductImage: FC<props> = ({ rasm, id}) => {
    console.log(rasm);
    
  return (
    <></>
  );
};

export default memo(ProductImage);