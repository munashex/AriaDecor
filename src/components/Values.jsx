import {values} from '../data/values' 
import { ThemeContext } from '../theme/ThemeProvider'
import { useContext } from 'react'

const Values = () => {
const {theme} = useContext(ThemeContext) 

    return (
        <div  className={`mt-20 lg:mt-28 py-11 rounded-md ${theme === 'light' ? 'bg-[#EDECEC]' : 'bg-[#2E2D2D]'}`}>
          <h1 className={`text-3xl lg:text-6xl text-center font-bold ${theme === 'dark' ? 'text-[#FEFEFA]' : ''}`}>Values</h1>
        
        
        <div className="mt-7 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 md:px-5 lg:px-8"> 
         {values.map((value) => (
        <div key={value.name} className={`flex items-center gap-x-5 p-0.5 rounded-md ${theme === 'dark' ? 'bg-[#393838]': 'bg-[#e3e0e0]'}`}>
         <div className={theme === 'light' ? 'bg-[#EDECEC] p-1 rounded-md' : 'bg-[#2E2D2D] p-1 rounded-md' }> 
            <img src={value.image} 
            className="h-11 object-cover" 
            />
         </div>
         <h1 className='text-lg font-semibold'>{value.name}</h1>
        </div>
         ))}
        </div>
        
        </div>
    )
}

export default Values