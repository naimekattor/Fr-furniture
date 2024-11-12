import React, { useContext, useState } from 'react';
import Card from './Card';
import { products } from '../Utils/products';
import { NavLink } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import { darkContext } from '../DarkContext';
const Products = () => {
  const [product, setProduct] = useState(products)
  const [category, setCategory] = useState("")
  const [visibleProducts, setVisibleProducts] = useState(4);
  const categoryItems = ["Chair", "Beds", "Sofa", "Lamp"]
  const handleFilter = (categoryName) => {
    setCategory(categoryName);
    const filteredCategory = products.filter((productsCategory) => productsCategory.category == categoryName);
    setProduct(filteredCategory);
  }
  const loadMoreProducts = () => {
    setVisibleProducts((preview) => preview + 4);
  }
  console.log(category.length);
  /* theme from context */
  const theme = useContext(darkContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className={`${darkMode ? "bg-black" : "bg-[#F7F7F7]"} `}>
      <div className='container mx-auto'>
        <div className='text-center'><h1 className='text-[42px] font-primary font-bold mb-[10px] pt-[30px]'>Best Selling Product</h1></div>
        <ul className={`flex  bg-[#eeeeee]/50 p-1 rounded-full md:w-1/4 mx-auto justify-between cursor-pointer mb-[30px]`}>
          {
            categoryItems.map((items) => <li key={items} onClick={() => { handleFilter(items); setVisibleProducts(4) }} className={` p-1 rounded-full hover:bg-primary ${category == items ? " bg-primary" : ""}`}><NavLink>{items}</NavLink></li>)
          }
        </ul>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4'>
          {
            product.slice(0, visibleProducts).map((items, index) => <div key={index}><Card items={items} /></div>)
          }

        </div>
        {visibleProducts < category.length + 1 && <div onClick={loadMoreProducts} className=' flex justify-center gap-4 items-center py-[30px] text-primary text-[15px] cursor-pointer'><span>View All</span><IoMdArrowForward />
        </div>}
      </div>


    </section>
  );
};

export default Products;