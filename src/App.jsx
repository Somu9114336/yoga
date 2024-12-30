import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div style={{backgroundColor:"#DCDCDC"}}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
