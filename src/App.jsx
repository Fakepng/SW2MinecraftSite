import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Skin from './Pages/Skin'
import AboutUS from './Pages/About'
import Contact from './Pages/Contact'
import FourOFour from './Pages/FourOFour'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  )
}

export default App