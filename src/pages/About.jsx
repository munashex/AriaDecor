import InfiniteCarousel from "../components/InfiniteCarousel"
import {useState} from 'react'
import Values from "../components/Values"
import InfiniteImageCarousel from "../components/InfiniteImageCarousel"
import Evolution from "../components/Evolution"


const About = () => {

const [tab, setTab] = useState('Mission')

return (
<div className="mt-7 md:mt-10 lg:mt-16">
<InfiniteCarousel/> 

<div className="mt-16 lg:mt-24 space-y-3">
 <h1 className="text-lg lg:text-3xl lg:max-w-7xl font-semibold">Welcome to Ariadeco, your premier destination for event decoration and backdrop designs. Since our establishment, we've been transforming ordinary spaces into extraordinary experiences, one celebration at a time</h1>
 <h1 className="lg:text-lg">What started as a passion for creating beautiful spaces has blossomed into a full-service decoration company. Our journey began with simple backdrop designs and has evolved into creating comprehensive event experiences. Today, we're proud to be trusted by countless clients for their most precious moments - from intimate birthday celebrations to grand ceremonial events.</h1>
</div>

{/* mission & vision   */}
<div className="mt-16 lg:mt-24 flex justify-center w-fit mx-auto p-0.5 rounded-md border-[#DE3163]  gap-2 border">
<button className={`text-xl   ${tab === 'Mission' ? 'bg-[#DE3163] animate-fade-left text-white py-1.5 px-4 font-bold rounded-md' : 'font-bold px-4'}`} onClick={() => setTab('Mission')}>
 Mission
</button> 
<button className={`text-xl   ${tab === 'Vision' ? 'bg-[#DE3163] animate-fade-right text-white py-1.5 px-4 font-bold rounded-md' : 'font-bold px-4'}`} onClick={()  => setTab('Vision')}>
 Vision
</button>
</div>

 {/* tabs content */}
<div className="mt-5">
  {tab === 'Mission' ? 
  <div className="lg:max-w-7xl mx-auto">
   <h1 className="lg:text-xl">At Ariadeco, our mission is to transform ordinary spaces into extraordinary experiences through innovative decoration and design. We are committed to bringing our clients' visions to life by creating stunning, personalized environments that turn moments into lasting memories. Through exceptional service, creative excellence, and meticulous attention to detail, we strive to exceed expectations in every event we touch</h1>
  </div> 
 : 
 <div className="lg:max-w-7xl mx-auto"> 
 <h1 className="lg:text-xl">To be the most trusted and sought-after event decoration company, known for our creativity, reliability, and ability to create magical environments that inspire and delight. We envision a future where every celebration we design becomes a cherished memory, setting new standards in the event decoration industry through innovation, excellence, and personalized service</h1>
 </div>
 }
</div>

{/* values section  */}
<Values/>

{/* images slider carousel  */}
{/* <InfiniteImageCarousel/> */}

{/* our journey section */}
  <Evolution/>
</div> 
)
}

export default About