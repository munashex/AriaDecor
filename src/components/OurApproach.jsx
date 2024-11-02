import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";
import { FaRegCircleDot } from "react-icons/fa6"; 
import { approachData } from "../data/approach";

const OurApproach = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-20 lg:mt-28">
      <div>
        <h1 className="inline-flex gap-1 items-center font-semibold text-sm">
          <FaRegCircleDot size={16}/> Our approach
        </h1>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          This is our journey with you
        </h1>
      </div>
     
      <div className="mt-44 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
        {approachData.map((item) => (
          <div 
            key={item.id} 
            className={`relative mb-16 lg:mb-0 h-full ${
              theme === 'light' 
                ? 'bg-[#EDECEC] p-4 rounded-md' 
                : 'bg-[#242323] p-4 rounded-md'
            }`}
          > 
            <div 
              className={`absolute -top-20 left-7 ${
                theme === 'light' 
                  ? 'bg-[#F5F5F5] px-4 py-4' 
                  : 'bg-[#1B1B1B] px-4 py-4'
              }`}
            >
              <h1 className="text-5xl bg-[#1F3630] w-fit text-white p-6 rounded-md">
                {item.id}
              </h1>
            </div>
            <div className="space-y-2 py-12"> 
              <h1 className="text-xl font-bold">{item.name}</h1> 
              <h1>{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurApproach;