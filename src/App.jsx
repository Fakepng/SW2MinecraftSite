import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Skin from './Pages/Skin'
import MiniGame from './Pages/Minigame'
import Games from './Pages/Minigame/Game'
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
        <Route path="/mini-game" element={<MiniGame />} />
        <Route path="/mini-game/:id" element={<Games />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<FourOFour />} status={404}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App