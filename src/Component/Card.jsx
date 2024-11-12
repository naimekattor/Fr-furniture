import React from 'react';
import { getImgUrl } from '../Utils/getImgUrl';
import Rating from './Rating';
import { AiOutlinePlus } from "react-icons/ai";
const Card = ({ items }) => {
  return (
    <div className=' drop-shadow-md bg-[#fafafa]'>
      <div className='rounded-[20px]'><img className='rounded' src={getImgUrl(`${items.imageUrl}`)} alt="" /></div>

      <div className='bg-white text-secondary rounded-[20px] p-[10px]'>
        <h4>{items.category}</h4>
        <h2>{items.name}</h2>
        <div ><Rating rating={items.rating} /></div>
        <div className='flex justify-between'>
          <span><sup>$</sup>{items.price}</span>
          <span className='text-white text-[25px] size-6 rounded-full cursor-pointer bg-black'><AiOutlinePlus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;