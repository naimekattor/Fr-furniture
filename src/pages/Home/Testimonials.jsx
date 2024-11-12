
import { useState } from 'react';
import { reviews } from '../../Utils/reviews';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Rating from '../../Component/Rating';
const Testimonials = () => {
  const [index, setindex] = useState(0)
  const handleRightBtn = () => {
    setindex(prev => {
      if (prev === reviews.length - 3) {
        return 0
      } return prev + 1;
    })
  }
  const handleLeftBtn = () => {
    setindex(prev => {
      if (prev == 0) {
        return 3
      } return prev - 1;
    })
  }
  /* console.log(index);
  console.log(reviews.length); */
  console.log(reviews[0].rating);

  return (
    <section className="container mx-auto">
      <div><h1 className=' text-primary font-primary text-[18px] mb-[18px] text-center font-bold'>Testimonials</h1>
        <h2 className='  font-primary text-[42px] mb-[30px] text-center font-bold'>Our Client Reviews</h2></div>
      <div className='flex items-center justify-center relative'>
        <div className='w-[400px] h-[400px] relative flex justify-center'>
          <img className=' w-full h-full' src={reviews[index].coverImg} alt="" />
          <div className='bg-white p-2 rounded-[20px] flex flex-col items-center justify-center absolute bottom-[70px] w-[80%] mx-auto'>
            <img className=' absolute top-[-25px] bg-white p-2 rounded-t-[50%]' src={reviews[index].image} alt="" />
            <h2 className='pt-8 text-black font-primary font-bold'>{reviews[index].name}</h2>
            <h4 className='text-black font-primary font-semibold text-[10px]'>From America</h4>
            <p className='font-primary font-semibold text-[12px] my-[8px] text-secondary text-center '>{reviews[index].review}</p>
            <span><Rating rating={reviews[0].rating} /></span>
          </div>
        </div>
        <div className='w-[400px] h-[400px] relative md:flex hidden justify-center'>
          <img className=' w-full h-full' src={reviews[index + 1].coverImg} alt="" />
          <div className='bg-white p-2 rounded-[20px] flex flex-col items-center justify-center absolute bottom-[70px] w-[80%] mx-auto'>
            <img className=' absolute top-[-25px] bg-white p-2 rounded-t-[50%]' src={reviews[index + 1].image} alt="" />
            <h2 className='pt-8 text-black font-primary font-bold'>{reviews[index + 1].name}</h2>
            <h4 className='text-black font-primary font-semibold text-[10px]'>From America</h4>
            <p className='font-primary font-semibold text-[12px] my-[8px] text-secondary text-center '>{reviews[index + 1].review}</p>
            <span><Rating rating={reviews[1].rating} /></span>
          </div>
        </div>
        <div className='w-[400px] h-[400px] relative md:flex hidden justify-center'>
          <img className=' w-full h-full' src={reviews[index + 2].coverImg} alt="" />
          <div className='bg-white p-2 rounded-[20px] flex flex-col items-center justify-center absolute bottom-[70px] w-[80%] mx-auto'>
            <img className=' absolute top-[-25px] bg-white p-2 rounded-t-[50%]' src={reviews[index + 2].image} alt="" />
            <h2 className='pt-8 text-black font-primary font-bold'>{reviews[index + 2].name}</h2>
            <h4 className='text-black font-primary font-semibold text-[10px]'>From America</h4>
            <p className='font-primary font-semibold text-[12px] my-[8px] text-secondary text-center '>{reviews[index + 2].review}</p>
            <span><Rating rating={reviews[2].rating} /></span>
          </div>
        </div>
        <div onClick={handleLeftBtn} className="absolute left-[-10px] "><button className="p-4 rounded-full bg-white text-black drop-shadow-md"><FaArrowLeft />
        </button></div>
        <div onClick={handleRightBtn} className="absolute right-[-10px] "><button className="p-4 rounded-full bg-white text-black drop-shadow-md"><FaArrowRight />
        </button></div>
      </div>
    </section>
  );
};

export default Testimonials;