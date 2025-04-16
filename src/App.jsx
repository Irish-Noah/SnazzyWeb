import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/SnazzyWeb/" element={<Home />} />
        <Route path="/SnazzyWeb/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
