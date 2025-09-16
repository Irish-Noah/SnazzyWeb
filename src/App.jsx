import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Albums from './components/pages/Albums';
import AutoMaintenance from './components/pages/AutoMaintenance';

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/SnazzyWeb/" element={<Home />} />
        <Route path="/SnazzyWeb/resume" element={<Resume />} />
        <Route path="/SnazzyWeb/albums" element={<Albums />} />
        <Route path="/SnazzyWeb/vehicle-maintenance" element={<AutoMaintenance />} />
      </Routes>
    </>
  )
}

export default App
