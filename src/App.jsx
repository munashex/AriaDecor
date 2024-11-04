import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from './pages/home'
import Navbar from './components/Navbar' 
import WhatsAppUs from './components/WhatsAppUs'
import {ThemeContext} from './theme/ThemeProvider' 
import { useContext } from 'react'
import About from './pages/About'
import Service from './pages/Service'

const App = () => {

const {theme} = useContext(ThemeContext) 

  return (
    <div className={`min-h-screen px-2 md:px-5 lg:px-16  ${theme === 'light' ? "bg-[#F5F5F5] text-[#1D322D]" : "text-white bg-[#1B1B1B]"}`}>
     <Router> 
      <Navbar/>
      <WhatsAppUs/>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service/:id" element={<Service/>}/>
      </Routes>
      </div>
     </Router>
    </div>
  )
}

export default App