import React, { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import MobileMenu from './components/MobileMenu'
import Home from './components/pages/Home'
import About from './components/pages/About'
// import Experience from './components/pages/Experience'
// import Projects from './components/pages/Projects'
// import Error from './components/Error'
import NavBar from './components/NavBar'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    {!isLoaded ? (
      <LoadingScreen onComplete = {() => setIsLoaded(true)}/>
      
    ) : (
      <>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
      </>
    )}
    </>
  )
}

export default App
