import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from'./components/Home'
import About from './pages/About'
import Contact from'./pages/Contact'
// Is  best practice to just make a home component or do i make a pages folder with home in it?

// http://localhost:5173/home
// http://localhost:5173/about
// http://localhost:5173/contact

function App() {
  

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
