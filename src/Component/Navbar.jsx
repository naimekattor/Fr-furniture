import { useContext, useEffect, useState } from 'react';
import { FaBars, FaCross } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { IoMoon } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { darkContext } from '../DarkContext';


const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
]
const NavItems = ({ handleMenu }) => {

  return (
    <ul className='flex gap-8 md:flex-row flex-col'>
      {
        navItems.map((items, index) => (<li onClick={handleMenu} key={index}><NavLink className={({ isActive }) =>
          isActive
            ? " text-primary font-bold"
            : "hover:text-primary"
        } to={items.path}>{items.label}</NavLink></li>))
      }
    </ul>

  )
}

const Navbar = () => {
  const [ismenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false)
  const handleMenu = () => {
    setIsMenu(prevMenu => !prevMenu)
  }
  console.log(ismenu);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [])
  console.log((isScroll));
  /* Dark mode light mode */
  const theme = useContext(darkContext);
  const darkMode = theme.state.darkMode;
  const handleDarkmode = () => {
    theme.dispatch({ type: "toggle" });
  }
  return (
    <header className={`fixed top-0 left-0 w-[100%] transition ease-in-out duration-300 z-10 ${isScroll ? "bg-white shadow-md text-black" : "bg-transparent text-white"}`}>
      <nav className='flex justify-between container mx-auto py-4 px-4'>
        <div>
          <NavLink to="/"><h1 className='font-bold font-primary text-xl'>Fr</h1></NavLink>

        </div>
        {/* Menu for Mobile devices */}
        <div onClick={handleMenu} className='cursor-pointer md:hidden block'>
          <FaBars />
        </div>

        {/* Menu Items for desktop */}
        <div className='hidden md:block '>
          <NavItems />
        </div>
        {/* Menu Items for mobile */}
        <div className={`md:hidden fixed top-0 left-0 bg-black/50 w-full h-[100%] flex items-center justify-center flex-col gap-8 transition-transform transform text-white  ${ismenu ? "translate-x-0" : "-translate-x-full"}`}>
          <RxCross1 onClick={handleMenu} />
          <NavItems handleMenu={handleMenu} />
        </div>
        <div className='hidden md:block relative '>
          <FaBagShopping />
          <sup className=' absolute top-0 -right-3 size-4 rounded-full bg-primary flex justify-center items-center text-white'>0</sup>
        </div>
        <div className='md:flex border-2 items-center px-2 rounded-full border-[#ec943a] hidden cursor-pointer relative'>
          <div className='flex'><IoMoon className={`${darkMode ? "bg-primary rounded-full px-2 py-1" : ""}`} onClick={handleDarkmode} />
            <MdOutlineLightMode className={`${!darkMode ? "bg-primary rounded-full px-2 py-1" : ""}`} onClick={handleDarkmode} /></div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;