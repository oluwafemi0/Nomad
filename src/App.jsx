import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Dash from './pages/Dash';
import Services from './pages/Services';
import Care from './pages/Care';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/service' element={<Services />} />
        <Route path='/care' element={<Care />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



