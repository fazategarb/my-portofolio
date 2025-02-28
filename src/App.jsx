import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/project" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
