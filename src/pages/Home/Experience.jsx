import exp from "../../assets/expricences.png"
import material1 from "../../assets/material1.png"
import material2 from "../../assets/material2.png"
import material3 from "../../assets/material3.png"
import ArrowIcon from "../../Component/ArrowIcon";
const Experience = () => {
  return (
    <section className="container mx-auto">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-8 gap-2">
        <img src={exp} alt="" />
        <div className="mx-2"><h3 className=" text-primary font-semibold font-primary text-[18px] mb-[18px] mt-[40px]">experiences</h3>
          <h1 className=" font-bold text-[42px] font-primary  mb-[14px]">we provide you the best experience</h1>
          <p className="text-[18px] font-primary  mb-[20px]">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
          <ArrowIcon /></div>

      </div>

      <div className="flex md:flex-row-reverse flex-col-reverse justify-center items-center mx-2 ">
        <div className="md:w-3/4"><img src={material3} alt="" /></div>
        <div className="md:w-3/4"><img src={material1} alt="" /><img src={material2} alt="" /></div>


        <div className="md:w-1/2"><h3 className=" text-primary font-semibold font-primary text-[18px] mb-[18px]">Materials</h3>
          <h1 className=" font-bold text-[42px] font-primary  mb-[14px]">Very serious materials for making furniture</h1>
          <p className="text-[18px] font-primary  mb-[20px]">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
          <ArrowIcon /></div>
      </div>
    </section>
  );
};

export default Experience;