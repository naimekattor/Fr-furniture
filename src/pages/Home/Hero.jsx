import React from "react";
import banner from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-center bg-repeat w-[100%] h-screen relative"
    >
      <div className="text-center pt-[80px] md:w-1/2 mx-auto">
        <h1 className="font-primary text-[64px] font-medium text-white text-center  ">
          Make your interior more minimalistic & modern
        </h1>
        <p className="font-primary text-white text-[18px] md:w-1/2 mx-auto mt-[30px]">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="text-center mt-[30px] relative inline-block">
          <input
            className="text-white focus:outline-none p-1 bg-white/15 rounded-full placeholder:text-white/50 border border-gray-300"
            type="text"
            placeholder="Search Furniture"
            name=""
            id=""
          />
          <div className="cursor-pointer absolute top-1 rounded-full p-1 bg-primary text-white right-0 ">
            <FaSearch className="" />
          </div>
        </div>
      </div>

      {/* blur tool tip */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-transparent to-transparent h-3/4 blur-sm" />

      {/* hover button for displaying tootl tip box */}

    </section>
  );
};

export default Hero;
