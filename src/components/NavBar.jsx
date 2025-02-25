import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-[#242424] text-white py-4 flex justify-between mx-auto max-w-2xl fixed top-0 left-0 right-0 z-10">
      <h1 className="text-2xl font-bold">fazadev<span className='text-2xl font-medium text-blue-500'>_</span></h1>
      <ul className="flex gap-4">
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar