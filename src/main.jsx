import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Contact from './pages/Contact.jsx'
import Regestrion from './pages/Regestrion.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/regestrion' element={<Regestrion />} />
      
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
