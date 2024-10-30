import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from './pages/home'
import Navbar from './components/Navbar' 
import {ThemeContext} from './theme/ThemeProvider' 
import { useContext } from 'react'

const App = () => {

const {theme} = useContext(ThemeContext) 

  return (
    <div className={`min-h-screen   ${theme === 'light' ? "bg-[#F5F5F5]" : "text-white bg-[#1B1B1B]"}`}>
      <Navbar/>
     <Router> 
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App