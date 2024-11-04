import { whyYouChooseUs } from '../data/whyChooseUs';
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { ThemeContext } from '../theme/ThemeProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

function WhyYouChooseUs() {
  const {theme} = useContext(ThemeContext)
  const [activeTab, setActiveTab] = useState(null)

  const toggleTab = (question) => {
    if (activeTab === question) {
      setActiveTab(null)  // Close if already open
    } else {
      setActiveTab(question)  // Open if closed
    }
  }

  return (
    <div>
      {whyYouChooseUs.map((item, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* first item */}
          <div className="relative">
            <img src={item.image} 
            className="object-cover rounded-md h-96  lg:h-[650px] w-full" 
            />
            <div className="absolute bottom-0  space-y-2 py-7 bg-black bg-opacity-20 text-[#FDFCEE] px-2 rounded-md"> 
             <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.motto}</h1> 
             <h1 className="">{item.mottoDescription}</h1>
             <div className="pt-2 inline-flex gap-2">
              <Link to="/contact" className="bg-[#FDFCEE] p-2 hover:scale-105 delay-150 duration-150 px-4 lg:text-lg font-bold rounded-md text-[#1D322D]">Start a Project</Link>
               <Link to="/contact" className="bg-[#DE3163] p-2 hover:scale-105 delay-150 duration-150 px-4 lg:text-lg font-bold rounded-md text-white"><FaArrowRight size={23}/></Link>
             </div>
            </div>
          </div>

            {/* second item */}
          <div className="space-y-2">
           <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{item.whyUs}</h1>
            
            <div className={`pt-4 p-2 rounded-md lg:p-4 ${theme === 'dark' ? 'bg-[#242323]' : 'bg-[#EDECEC]'}`}>
           <h1>{item.whyUsDescription}</h1> 
            
            <div className="mt-11 space-y-2"> 
             {item.faqs.map((faq, faqIndex) => (
             <div key={faqIndex}>
                <button 
                  className={`flex justify-between items-center w-full py-2 text-left ${theme === 'dark' ? 'hover:bg-[#2E2D2D] px-2 rounded-md' : 'hover:bg-[#DCD9D9] px-2 rounded-md'}`} 
                  onClick={() => toggleTab(faq.question)}
                >
                  <h1 className="text-lg font-bold">{faq.question}</h1>
                  <span>
                    {activeTab === faq.question ? 
                      <MdOutlineKeyboardArrowUp size={30}/> : 
                      <MdOutlineKeyboardArrowDown size={30}/>
                   }
                  </span>
                </button>
                {activeTab === faq.question && (
                  <div className="pb-4">
                    <h1 className={`animate-fade-down  p-1 rounded-md animate-delay-150 animate-duration-1000`}>{faq.answer}</h1>
                  </div>
                )}
             </div>
             ))}
            </div>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyYouChooseUs;