import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Error from './components/Error'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Projects />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
