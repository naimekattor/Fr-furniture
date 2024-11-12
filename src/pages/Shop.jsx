import React from 'react';
import banner from "../assets/banner.png"
import Products from '../Component/Products';
const Shop = () => {
  return (
    <section >
      <div className='bg-cover bg-center w-full h-[400px]' style={{ backgroundImage: `url(${banner})` }}><h1 className='text-center text-[42px] font-bold font-primary pt-[150px] text-white'>Happy Shopping</h1></div>
      <div><Products /></div>
    </section>
  );
};

export default Shop;