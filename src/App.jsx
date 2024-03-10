import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from'./components/Home'
import { useState, useEffect} from 'react'
import You from './pages/You'
import Mind from './pages/Mind'
import Us from '../src/pages/Us'
import Navbar from './components/navBar'
import HeroPage from './pages/HeroPage'




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


  return (
      <Router>
        <div className="app-container">
        <Navbar />
        <Routes>

      <Route path="/heropage" element ={<Home data={data} />} />
      <Route path="/home" element ={<HeroPage />} />
      <Route path="/us" element ={<Us />} />
      <Route path="/you" element ={<You />} />
      <Route path="/mind" element ={<Mind />} />
      <Route path="/you" element ={<You />} />

        </Routes>
        {/* <Footer /> */}
        </div>
      </Router>
  
  
  )
}

export default App
