import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import FourOFour from './Pages/FourOFour'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  )
}

export default App