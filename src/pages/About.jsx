import React from 'react';
import banner from "../assets/banner.png"
import Experience from './Home/Experience';
const About = () => {
  return (
    <section >
      <div className='bg-cover bg-center w-full h-[400px]' style={{ backgroundImage: `url(${banner})` }}><h1 className='text-center text-[42px] font-bold font-primary pt-[150px] text-white'>About Us</h1></div>
      <div><Experience /></div>
    </section>
  );
};

export default About;