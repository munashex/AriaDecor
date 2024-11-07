import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";

const WhatsAppUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-7 z-20 right-11 flex items-center">
      <div className={`p-1 px-3 shadow hidden lg:flex rounded-l-md font-bold bg-slate-200 text-slate-800`}>
        Chat with us
      </div>
      <a href="https://wa.me/+263715022422" target="_blank" rel="noopener noreferrer">
        <button className={`rounded-md shadow font-bold bg-slate-200`}>
          <BiLogoWhatsappSquare size={50} color="#2DB742" />
        </button>
      </a>
    </div>
  );
};

export default WhatsAppUs;