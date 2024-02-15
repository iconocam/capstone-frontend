import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from'./components/Home'
import About from './pages/About'
import Contact from'./pages/Contact'
import { useState, useEffect} from 'react'
// Is  best practice to just make a home component or do i make a pages folder with home in it?

// http://localhost:5173/home
// http://localhost:5173/about
// http://localhost:5173/contact

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
        <Routes>

      <Route path="/home" element ={<Home  message="Chamber of Misery"  />} />
      <Route path="/about" element ={<About />} />
      <Route path="/contact" element ={<Contact />} />

        </Routes>
        </div>
      </Router>
  
  )
}

export default App
