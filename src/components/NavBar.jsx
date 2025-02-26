import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-[#161616] text-white py-4 flex justify-between mx-auto max-w-2xl fixed top-0 left-0 right-0 z-10">
      <h1 className="text-2xl font-bold"><a href="/">fazadev</a><span className='text-2xl font-medium text-blue-500'>_</span></h1>
      <ul className="flex gap-7">
        <li className='hover:scale-110 hover:transition-transform'><a href="#hero" className='hover:text-blue-500 hover:transition-colors'>Home</a></li>
        <li className='hover:scale-110 hover:transition-transform'><a href="#projects" className='hover:text-blue-500 hover:transition-colors'>Projects</a></li>
        <li className='hover:scale-110 hover:transition-transform'><a href="#contact" className='hover:text-blue-500 hover:transition-colors'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar