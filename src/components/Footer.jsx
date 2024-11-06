import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import services from '../data/navServices';
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";

const navLinks = [
  {name: "Home", url: '/'},
  {name: "About", url: "/about"}, 
]

const socialLinks = [
  {name: "Instagram", icon : <IoLogoInstagram size={30}/>}, 
  {name: "X", icon: <BsTwitterX size={30}/>}, 
  {name: "Facebook", icon: <ImFacebook2 size={30}/>}
]

const Footer = ()  => {
const location = useLocation()
const {theme} = useContext(ThemeContext)

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}

    return (
        <div className={`mt-24  px-2 lg:px-9  py-8 lg:py-16  rounded-t-md lg:mt-36  text-white ${theme === 'dark' ? 'bg-[#242323]' : 'bg-[#1D322D]'}`}>
         
         <div className="flex flex-col gap-x-7 gap-y-9 md:flex-row flex-wrap justify-between lg:justify-evenly">
         {/* navlinks  */}
         <div className="space-y-2">
          <h1 className="text-xl lg:text-2xl font-semibold">Menu</h1>
         <div className="flex flex-col gap-2 lg:text-lg">
          {navLinks.map((li) => (
            <Link to={li.url} onClick={() => scrollToTop()}  className={`hover:underline transition-colors duration-200 ${location.pathname === li.url ? ' bg-white w-fit px-1  text-black rounded-md' : ''}`}>{li.name}</Link>
          ))}
         </div> 
         </div>
          
          {/* services  */}
         <div className="space-y-2">
         <h1 className="text-xl lg:text-2xl font-semibold">Services</h1>
         <div className="flex flex-col gap-2 lg:text-lg">
          {services.map((li) => (
            <Link to={li.url} onClick={() => scrollToTop()}  className={`hover:underline transition-colors duration-200`}>{li.name}</Link>
          ))}
         </div> 
         </div>
        
         {/* social media links */}
         <div className="space-y-2">
         <h1 className="text-xl lg:text-2xl font-semibold">Connect with us</h1>
         <div className="flex flex-row gap-2 flex-wrap">
          {socialLinks.map((social) => (
            <div className="flex flex-col  hover:scale-110 delay-100 duration-100 cursor-pointer items-center w-24 h-fit  rounded-md gap-2 p-3 bg-opacity-10 bg-black">
              <span>{social.icon}</span>
              <h1>{social.name}</h1>
            </div>
          ))}
         </div>
         </div>
         </div>

         <div className="space-y-1 mb-9">
         <h1 className="mt-16 lg:mt-24 text-3xl md:text-5xl  text-center font-shantell">Ariadeco</h1>
         <h1 className="text-center">Copyright © 2024</h1>
         </div>
        </div>
    )
}

export default Footer