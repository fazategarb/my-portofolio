import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-[#161a1d]/50 px-5 text-white py-4 flex justify-between mx-auto max-w-2xl fixed top-0 left-0 right-0 z-10 backdrop-blur-lg rounded">
      <h1 className="text-2xl font-bold"><a href="/">fazxie</a><span className='text-xl font-bold text-blue-500'>.</span></h1>
      <ul className="flex gap-7">
        <li><a href="/" className='hover:text-blue-500 hover:transition-colors text-lg'>Home</a></li>
        <li><a href="/work" className='hover:text-blue-500 hover:transition-colors text-lg'>Work</a></li>
        <li><a href="/project" className='hover:text-blue-500 hover:transition-colors text-lg'>projects</a></li>
      </ul>
    </nav>
  )
}

export default NavBar