import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { darkContext } from "../DarkContext";

const Footer = () => {
  const theme = useContext(darkContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className={`${darkMode ? "" : "bg-[#f7f7f7]"} p-8`}>
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between md:gap-8 gp4">
          <div className="flex-1">
            <h3 className=" text-[18px] font-bold font-primary">Fr</h3>
            <p className="text-[12px]font-primary">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          <div className=" flex-1">
            <h3 className=" text-primary font-primary font-semibold text-[14px] mb-2">Services</h3>
            <h4 className="font-primary text-[12px] mb-2">Email Marketing</h4>
            <h4 className="font-primary text-[12px] mb-2">Campaigns</h4>
            <h4 className="font-primary text-[12px] mb-2">Branding</h4>
          </div>
          <div className=" flex-1">
            <h3 className=" text-primary font-primary font-semibold text-[14px] mb-2">Furniture</h3>
            <h4 className="font-primary text-[12px] mb-2">Beds</h4>
            <h4 className="font-primary text-[12px] mb-2">Chair</h4>
            <h4 className="font-primary text-[12px] mb-2">All</h4>
          </div>
          <div className=" flex-1">
            <h3 className=" text-primary font-primary font-semibold text-[14px] mb-2">Follow Us</h3>
            <h4 className="font-primary text-[12px] mb-2 flex gap-2 items-center"><span><FaFacebookF /></span>Facebook</h4>
            <h4 className="font-primary text-[12px] mb-2 flex gap-2 items-center"><span><FaTwitter /></span>Twitter</h4>
            <h4 className="font-primary text-[12px] mb-2 flex gap-2 items-center"><span><FaInstagram /></span>Instagram</h4>
          </div>

        </div>
        <div className="flex justify-between gap-8 my-8">
          <h3 className=" flex-1 font-primary text-[12px] ">Copyright © {new Date().getFullYear()}</h3>
          <h3 className="font-primary text-[12px]">Terms & Conditions</h3>
          <h3 className="font-primary text-[12px]">Privacy Policy</h3>
        </div></div>

    </section>
  );
};

export default Footer;