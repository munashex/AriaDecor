import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";
import { aboutExperience } from '../data/about';
import { FaPlus } from "react-icons/fa6";
import { whatWeProvide } from "../data/services";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-7 md:mt-10 lg:mt-16">
      {/* on our slogan */}
      <div className="space-y-2 lg:space-y-5">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl lg:max-w-4xl">Crafting Magical Moments Through Design</h1>
        <h1 className="md:text-lg lg:max-w-6xl">Transform your special moments into magical memories with AriaDeco's premier event decoration and setup services. We specialize in creating enchanting spaces that capture the essence of your celebration, whether it's an intimate birthday gathering, a ceremonial event, or a professional photoshoot setting. Our attention to detail and artistic vision brings your dreams to life, one beautiful backdrop at a time.</h1>
      </div>

      <div className="mt-11 lg:mt-16 space-y-2.5">
        <h1 className="text-xl font-bold lg:text-2xl">Our Signature Touch</h1>
        <h1 className="text-lg lg:max-w-3xl">From intimate birthday celebrations to grand ceremonies, we bring your vision to life through expertly crafted:</h1>
        
        <div className="flex">
          <div className={`inline-block p-2 rounded-md py-6 md:max-w-5xl ${theme === 'light' ? "bg-[#EDECEC]" : "bg-[#242323]"}`}>
            <ul className="grid grid-cols-1 px-5 lg:grid-cols-2 marker:text-[#DE3163] list-disc gap-y-1.5 lg:gap-x-8">
              <li className={theme === 'light' ? 'bg-[#dcd9d9] p-1 rounded-md text-black' : 'bg-[#2e2d2d] p-1 rounded-md'}>Custom backdrop designs that tell your story</li>
              <li className={theme === 'light' ? 'bg-[#dcd9d9] p-1 rounded-md text-black' : 'bg-[#2e2d2d] p-1 rounded-md'}>Elegant event structures that define your space</li>
              <li className={theme === 'light' ? 'bg-[#dcd9d9] p-1 rounded-md text-black' : 'bg-[#2e2d2d] p-1 rounded-md'}>Enchanting table arrangements that delight your guests</li>
              <li className={theme === 'light' ? 'bg-[#dcd9d9] p-1 rounded-md text-black' : 'bg-[#2e2d2d] p-1 rounded-md'}>Ambient décor that sets the perfect mood</li>
            </ul>
          </div>
        </div>
      </div>

      {/* our experience, our projected completed, years of expertise & happy clients */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16 lg:mt-28">
        {aboutExperience.map((item) => (
          <div key={item.name} className={`px-3 py-9 rounded-md space-y-11 ${theme === 'light' ? 'bg-[#EDECEC]' : 'bg-[#242323]'}`}> 
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-8xl font-bold">{item.num}</h1>
              <span><FaPlus size={40}/></span>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold">{item.name}</h1> 
              <h1>{item.description}</h1> 
            </div>
          </div>
        ))}
      </div>

      {/* our services we provide section */}
      <div className={`mt-20 lg:mt-28 py-11 rounded-md ${theme === 'light' ? 'bg-[#EDECEC]' : 'bg-[#454547] text-black'}`}>
        <h1 className={`text-3xl lg:text-6xl text-center font-bold ${theme === 'dark' ? 'text-[#FEFEFA]' : ''}`}>Services</h1>
        
        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-11 p-3 md:px-7">
          {whatWeProvide.map((service) => (
            <div key={service.name} className="flex flex-col items-center gap-y-6"> 
              <img src={service.image} 
              className="w-36 object-fit"
              />

              <div className='flex flex-col gap-1 items-center'>
                <h1 className={`text-xl font-bold lg:text-2xl ${theme === 'dark' ? 'text-[#FEFEFA]' : ''}`}>{service.name}</h1>
                <h1 className={`${theme === 'dark' ? 'text-[#FEFEFA]' : ''}`}>{service.description} :</h1>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <h1 className="bg-red-200 p-1 px-3 rounded-full text-red-800 font-bold">{service.service1}</h1>
                  <h1 className="bg-blue-200 p-1 px-3 rounded-full text-blue-800 font-bold">{service.service2}</h1> 
                  <h1 className="bg-green-200 p-1 px-3 rounded-full text-green-800 font-bold">{service.service3}</h1>   
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
