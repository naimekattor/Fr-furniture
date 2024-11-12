import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  const totalStar = 5;

  return (
    <div className='flex'>
      {
        Array.from({ length: totalStar }, (_, index) => {
          const starIndex = index + 1;
          return starIndex <= rating ? <AiFillStar className=' text-primary' />
            : <AiOutlineStar className='text-gray-500' />
        })
      }
    </div>
  );
};

export default Rating;