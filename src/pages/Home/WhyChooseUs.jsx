import React, { useContext } from 'react';
import ArrowIcon from '../../Component/ArrowIcon';
import { darkContext } from '../../DarkContext';
const WhyChooseUs = () => {
  const theme = useContext(darkContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className='flex md:flex-row flex-col px-[2%] md:container mx-auto gap-[25px] py-[65px]'>
      <div className={`${darkMode ? "text-white" : "text-secondary"}`}><h1 className='  text-[42px] font-primary font-bold mr-[20px]'>Why
        Choosing Us</h1></div>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-[24px] font-primary mb-[16px] '>Luxury facilities</h3>
        <p className='text-[16px] font-primary  mb-[8px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <ArrowIcon />
      </div>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-[24px] font-primary mb-[16px] '>Luxury facilities</h3>
        <p className='text-[16px] font-primary  mb-[8px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <ArrowIcon />
      </div>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-[24px] font-primary mb-[16px] '>Luxury facilities</h3>
        <p className='text-[16px] font-primary  mb-[8px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <ArrowIcon />
      </div>
    </section>
  );
};

export default WhyChooseUs;