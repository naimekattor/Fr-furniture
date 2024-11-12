import banner from "../assets/banner.png"
import office from "../assets/house.png"
import mail from "../assets/mail.png"
import headphone from "../assets/headphone.png"
import clock from "../assets/clock.png"

const Contact = () => {
  return (
    <section className="">
      <div className='bg-cover bg-center w-full h-[400px]' style={{ backgroundImage: `url(${banner})` }}><h1 className='text-center text-[42px] font-bold font-primary pt-[150px] text-white'>Contact Us</h1></div>
      <div className="flex md:flex-row flex-col container mx-auto gap-4 my-8">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex flex-col items-center p-8 drop-shadow-md bg-white hover:-translate-y-4 duration-300">
            <span><img className=" w-20 h-20" src={office} alt="" /></span>
            <h2 className=" text-secondary font-semibold font-primary text-[18px] my-[12px]">Office Address</h2>
            <p className="text-secondary font-primary text-[16px] ">25/B Milford Elm Drive Road,<br />> New York, USA</p>
          </div>
          <div className="flex flex-col items-center p-8 drop-shadow-md bg-white hover:-translate-y-4 duration-300">
            <span><img className=" w-20 h-20" src={headphone} alt="" /></span>
            <h2 className=" text-secondary font-semibold font-primary text-[18px] my-[12px]">Call Us</h2>
            <p className="text-secondary font-primary text-[16px] ">+8801518920316,<br /> +8801851613453</p>
          </div>
          <div className="flex flex-col items-center p-8 drop-shadow-md bg-white hover:-translate-y-4 duration-300">
            <span><img className=" w-20 h-20" src={mail} alt="" /></span>
            <h2 className=" text-secondary font-semibold font-primary text-[18px] my-[12px]">Email Us</h2>
            <p className="text-secondary font-primary text-[16px] ">hr@gmail.com</p>
          </div>
          <div className="flex flex-col items-center  p-8 drop-shadow-md bg-white hover:-translate-y-4 duration-300">
            <span><img className=" w-20 h-20" src={clock} alt="" /></span>
            <h2 className=" text-secondary font-semibold font-primary text-[18px] my-[12px]">Open Time</h2>
            <p className="text-secondary font-primary text-[16px] ">Mon - Sat (10AM - 05PM),<br /> Sunday - <span className="text-red-600">Closed</span></p>
          </div>

        </div>
        <div className=" flex-1 p-4">
          <form className="bg-white drop-shadow-md p-8" action="submit">
            <h2 className=" text-secondary font-bold font-primary text-[25px] my-4">Get In Touch</h2>
            <div className="flex gap-4">
              <input className="w-full h-16 border " type="text" placeholder="Your Name" name="" id="" />
              <input className="w-full h-16 border " type="email" placeholder="Email" name="" id="" />
            </div>
            <input className="w-full h-16 border my-4" type="text" placeholder="Subject" name="" id="" />
            <textarea className="w-full h-32 border " name="" placeholder="Write Your Messege Here.." id=""></textarea>
            <button className="p-4 bg-primary rounded hover:bg-[#1f2125] hover:text-primary duration-300 transition-all ease-in-out mt-4">Send Messege</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;