import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
