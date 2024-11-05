import { useParams } from "react-router-dom"
import { service } from "../data/service"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";
import services from "../data/navServices";

const Service = () => {
const {id} = useParams()
const findServiceById = service.find((item) => item.id === Number(id)) 
const {theme} = useContext(ThemeContext)

const filteredServices = services.filter((service) => service.id !== Number(id)) 

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}

    return (
      <div className="mt-9 lg:mt-16">
      {findServiceById ? (
        <div>
         <div className="space-y-2">
        <h1 className="text-2xl  font-bold  md:text-3xl lg:text-5xl">{findServiceById.name}</h1>
         <h1 className="lg:text-lg">{findServiceById.description}</h1>
         </div>

         <Link to="/contact" className={`inline-flex hover:scale-105 lg:text-lg rounded-md duration-200 delay-100  mt-7 items-center gap-2 p-2 font-bold w-fit   ${theme === 'light' ? 'bg-[#1D322D] text-white' : 'bg-white text-black'}`}>
              Contact Us
              <span><FaArrowRightLong size={23}/></span>
          </Link>

          <img src={findServiceById.image}
          className="w-full h-96 object-cover rounded-md  lg:h-[600px] mt-11" 
          />
               
           <div  className="flex flex-col  lg:flex-row gap-y-11 mt-11 lg:mt-20 justify-between lg:items-start">
             {/* process */}
           <div className="space-y-3"> 
              <h1 className="text-2xl lg:text-3xl font-bold">Process</h1> 

              <div className="space-y-2">
                {findServiceById.process.map((item) => (
                  <div>
                  <h1 className="space-y-3">
                    <span className="font-bold">
                    {item.split(':')[0]}: 
                    </span>
                    <span>  {item.split(':')[1]}</span>
                  </h1>
                  </div>
                ))}
              </div>
           </div> 

           {/* what we includes  */}
           <div className="space-y-3"> 
              <h1 className="text-2xl lg:text-3xl font-bold">What’s Included</h1> 

              <div className="space-y-2">
                {findServiceById.whatsIncluded.map((item) => (
                  <div>
                  <h1 className="space-y-3">
                    <span className="font-bold">
                    {item.split(':')[0]}: 
                    </span>
                    <span>  {item.split(':')[1]}</span>
                  </h1>
                  </div>
                ))}
              </div>
           </div> 
           </div>


           {/* other services we provide */}
           <div className="mt-20 lg:mt-28"> 
            <h1 className="text-2xl lg:text-3xl font-bold">Other Services</h1>
           <div className={`${theme === 'dark' ? 'bg-[#242323]' : 'bg-[#EDECEC]'} mt-6 lg:mt-11 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-lg p-4`}>
              {filteredServices.map((item) => (
                    <Link 
                      key={item.id}
                      to={`/service/${item.id}`}
                      onClick={scrollToTop}
                      className={`hover:text-[#DE3163] transition-colors animate-fade-down duration-200 font-bold p-1 lg:text-lg rounded-md ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#323131]'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
           </div>
        </div> 
      ): 
      (
      <div className="flex justify-center"> 
       <h1 className="text-2xl  font-bold lg:text-4xl bg-red-200 w-fit p-2 rounded-md text-red-800">
        Service Not Found 
        </h1>
      </div>
      ) 
    }
    </div>
    )
}

export default Service 