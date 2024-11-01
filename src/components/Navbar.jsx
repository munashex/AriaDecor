import darkLogo from '../images/darkLogo.png' 
import lightLogo from '../images/lightLogo.png'  
import { ThemeContext } from '../theme/ThemeProvider' 
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const navLinks = [
{name: "About", url: "/about"},
{name: "Services", url: "/contact"},
{name: "Portfolio", url: "/Portfolio"}
]

const Navbar = () => {
const {theme, setTheme} = useContext(ThemeContext)
const [openNav, setOpenNav] = useState(false)

return (
    <div className="py-4">
      
      {/* navbar on small screens & md screens  */} 
      <div className="flex lg:hidden items-center justify-between">
         <img
          src={theme === 'light' ? lightLogo : darkLogo} 
          className="w-28  md:32 object-fit"
          />

          <div className="inline-flex items-center gap-3 "> 
           <button onClick={() => setOpenNav(!openNav)}>{ openNav ? <IoMdClose size={30}/> : <HiMiniBars3CenterLeft size={30}/>}</button> 

           <>{theme === 'light' ? 
           <button onClick={() => setTheme('dark')}><MdDarkMode size={25}/></button> : 
           <button onClick={() => setTheme('light')}><MdLightMode size={25}/></button>
           } 
           </>
          </div>
        </div>

        {/* navlinks on sm and md screens */}
        <div className="lg:hidden">
          {openNav ? 
          (
          <div className="mt-8 h-screen space-y-9">

            <div className="gap-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link key={link.url} to={link.url} className="text-xl">{link.name}</Link>
            ))}
            </div>

            <button className="text-lg flex justify-center items-center gap-3 font-bold w-full text-white bg-[#DE3163] p-2 rounded-xl">
              Contact Us
              <span><FaArrowRightLong size={22}/></span>
            </button>

            <div className="flex flex-col gap-1"> 
              <h1 className="text-xl">Call Us Now</h1> 
              <a href="tel:" className="text-lg underline underline-offset-2">+2763 546 0625</a>
            </div>
          </div>
          ) 
          : null}
        </div>

        {/* navbar ob lg screen  */}
        <div className="hidden lg:flex flex-row justify-between items-center">
        <img
          src={theme === 'light' ? lightLogo : darkLogo} 
          className="w-32  md:32 object-fit"
          />
 
          <div className={`inline-flex gap-6 p-2 rounded-lg px-8 ${theme === 'light' ? 'bg-[#edecec]': 'bg-[#242323]'}`}>
            <div className="text-lg flex gap-6  items-center">
            
            {navLinks.map((link) => (
              <Link key={link.url} to={link.url}>{link.name}</Link>
            ))}  
             
             <button className="inline-flex  rounded-md items-center gap-2 p-1.5 font-bold w-full text-white bg-[#DE3163]">
              Contact Us
              <span><FaArrowRightLong size={20}/></span>
            </button>
              
            </div>
            <>{theme === 'light' ? 
           <button onClick={() => setTheme('dark')}><MdDarkMode size={25}/></button> : 
           <button onClick={() => setTheme('light')}><MdLightMode size={25}/></button>
           } 
           </>
          </div>

        </div>
     
    </div>
)
}


export default Navbar