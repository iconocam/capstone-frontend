import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from'./components/Home'
import Contact from'./pages/Contact'
import { useState, useEffect} from 'react'
import You from './pages/You'
import Mind from './pages/Mind'
import Us from '../src/pages/Us'
import Navbar from './components/navBar'
import HeroPage from './pages/HeroPage'


// Is  best practice to just make a home component or do i make a pages folder with home in it?

// http://localhost:5173/home
// http://localhost:5173/about
// http://localhost:5173/contact
// http://localhost:5173/you
// http://localhost:5173/mind
// http://localhost:5173/us
// http://localhost:5173/heropage

// querying database to grab information with a useEffect hook
//Fetch doesn't automatically return JSON so turn data into response.json
function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    const getPersonalities = async () => {
      try {
        const response = await fetch('http://localhost:8000/personalities')
        const data = await response.json()
        setData(data)
      } catch(err) {
        console.log(err)
      }
    }

    getPersonalities()
  }, [])

// function to check if route is /hero, because we dont want navbar there
// const navigate = useNavigate();
// // !isHomePage() true, then <Navbar /> will be rendered;
//   const isHomePage = () => {
//     return navigate().location.pathname === '/home';
//   };
  return (
      <Router>
        <div className="app-container">
        <Navbar />
        <Routes>

      <Route path="/heropage" element ={<Home data={data} />} />
      <Route path="/home" element ={<HeroPage />} />
      <Route path="/contact" element ={<Contact />} />
      <Route path="/us" element ={<Us />} />
      <Route path="/you" element ={<You />} />
      <Route path="/mind" element ={<Mind />} />
      <Route path="/you" element ={<You />} />

        </Routes>
        
        </div>
      </Router>
  
  
  )
}

export default App
