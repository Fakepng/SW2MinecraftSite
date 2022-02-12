import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Skin from './Pages/Skin'
import AboutUS from './Pages/About'
import FourOFour from './Pages/FourOFour'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  )
}

export default App