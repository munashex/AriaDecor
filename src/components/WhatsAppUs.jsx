import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";


const WhatsAppUs = () => {

const {theme} = useContext(ThemeContext) 

    return (
        <div className="fixed bottom-7 z-20 right-11 flex items-center">
          <div className={`p-1 hidden md:flex  font-bold rounded-md ${theme === 'light' ? 'bg-[#242323] text-white':  'bg-[#F5F5F5] text-black'  }`}>
            Chat with us
          </div>
          <button>
            <BiLogoWhatsappSquare size={60} color="#2DB742"/>
          </button>
        </div>
    )
}

export default WhatsAppUs