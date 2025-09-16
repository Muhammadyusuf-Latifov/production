import Hero from '@/components/hero/Hero';
import ProductView from '@/components/productView/ProductView';
import { memo } from 'react';

const Home = async () => {
  const response = await fetch(`https://api.errorchi.uz/product?limit=8`);
  const data = await response.json()
  const allData = data?.data
  console.log(allData);

  
  return (
    <div className="Page">
    <Hero/>
      <ProductView data={ allData?.allProducts} />
    </div>
  )
};

export default memo(Home);