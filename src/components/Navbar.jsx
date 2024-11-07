import darkLogo from '../images/darkLogo.png' 
import lightLogo from '../images/lightLogo.png'  
import { ThemeContext } from '../theme/ThemeProvider' 
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import services from '../data/navServices';

const navLinks = [
  {name: "About", url: "/about"},
]

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const [showServices, setShowServices] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  const location = useLocation()

  return (
    <div className="py-4">
      
      {/* navbar on small screens & md screens  */} 
      <div className="flex lg:hidden items-center justify-between">
        <Link to="/">
          <img
            src={theme === 'light' ? lightLogo : darkLogo} 
            className="w-28 md:32 object-fit"
          />
        </Link>

        <div className="inline-flex items-center gap-3"> 
          <button onClick={() => setOpenNav(!openNav)}>
            {openNav ? <IoMdClose size={30}/> : <HiMiniBars3CenterLeft size={30}/>}
          </button> 

          <>{theme === 'light' ? 
            <button className="outline-none animate-fade-left" onClick={() => setTheme('dark')}>
              <MdDarkMode size={25}/>
            </button> : 
            <button className="outline-none animate-fade-right" onClick={() => setTheme('light')}>
              <MdLightMode size={25}/>
            </button>
          }</>
        </div>
      </div>

      {/* navlinks on sm and md screens */}
      <div className="lg:hidden">
        {openNav && (
          <div className="mt-8 h-screen space-y-9">
            <div className="gap-y-2 flex flex-col text-xl animate-fade-right animate-delay-150 animate-duration-700">
              {navLinks.map((link) => (
                <Link key={link.url} to={link.url} onClick={() => setOpenNav(!openNav)}>{link.name}</Link>
              ))}

              <button className="inline-flex items-center outline-none" onClick={() => setShowServices(!showServices)}> 
                Services
                <span>{showServices ? <MdOutlineKeyboardArrowDown size={23}/> : <MdOutlineKeyboardArrowUp size={23}/>}</span>
              </button>

              {/* services navlinks section  */}
              {showServices && (
                <div className="flex flex-col gap-2 text-lg">
                  {services.map((li) => (
                    <Link to={`/service/${li.id}`} onClick={() => setOpenNav(!openNav)} key={li.id} className="animate-fade-down animate-delay-300 animate-duration-1000">{li.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setOpenNav(!openNav)}  className="text-lg animate-fade-down animate-delay-500 animate-duration-1000 flex justify-center items-center gap-3 font-bold w-full text-white bg-[#DE3163] p-2 rounded-xl">
              Contact Us
              <span><FaArrowRightLong size={22}/></span>
            </Link>

            <div className="flex flex-col gap-1 animate-fade-down animate-delay-1000 animate-duration-1000"> 
              <h1 className="text-xl">Call Us Now</h1> 
              <a href="tel:+263715022422" className="text-lg underline underline-offset-2">+263 71 502 2422</a>
            </div>
          </div>
        )}
      </div>

      {/* navbar on lg screen  */}
      <div className="hidden lg:flex flex-row justify-between items-center">
        <Link to="/">
          <img
            src={theme === 'light' ? lightLogo : darkLogo} 
            className="w-32 md:32 object-fit"
          />
        </Link>
 
        <div className={`inline-flex gap-6 p-2 rounded-lg px-8 ${theme === 'light' ? 'bg-[#edecec]': 'bg-[#242323]'}`}>
          <div className="text-lg flex gap-6 items-center">
            
            {navLinks.map((link) => (
              <Link key={link.url} to={link.url} 
              className={`hover:text-[#DE3163] transition-colors duration-200 ${location.pathname === link.url ? 'p-1 px-4 bg-white shadow  text-black rounded-md' : ''}`}>
              {link.name} 
              </Link>
            ))}  

            <div className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
              <button className="inline-flex items-center"> 
                Services
                <span><MdOutlineKeyboardArrowUp size={23}/></span>
              </button>
              
              {showServices && (
                <div className={`${theme === 'dark' ? 'bg-[#242323]' : 'bg-[#EDECEC]'} absolute z-30 py-6 grid grid-cols-2 gap-2 rounded-lg min-w-[660px] p-4 -left-72`}>
                  {services.map((item) => (
                    <Link 
                      key={item.id}
                      to={`/service/${item.id}`}
                      onClick={() => setShowServices(!showServices)}
                      className={`hover:text-[#DE3163] transition-colors animate-fade-down duration-200 font-bold p-1 rounded-md ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#323131]'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
             
            <Link to='/contact' className="inline-flex rounded-md items-center gap-2 p-1.5 font-bold w-full text-white bg-[#DE3163]">
              Contact Us
              <span><FaArrowRightLong size={20}/></span>
            </Link>
              
          </div>
          <>{theme === 'light' ? 
            <button onClick={() => setTheme('dark')} className="outline-none animate-fade-left">
              <MdDarkMode size={25}/>
            </button> : 
            <button onClick={() => setTheme('light')} className="outline-none animate-fade-right">
              <MdLightMode size={25}/>
            </button>
          }</> 
        </div>
      </div>
    </div>
  )
}

export default Navbar