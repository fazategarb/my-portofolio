import React from 'react'

const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`fixed top-0 w-full bg-[#161a1d] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
                    ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>

        <button onClick={() => setMenuOpen(false)} 
                className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' 
                aria-label='Close Menu'>
            &times;
        </button>

        <a href="#home"
            onClick={() => setMenuOpen(false)}
            className={`text-white my-4 transform transition-transform duration-300 font-semibold text-lg
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Home
        </a>
        <a href="#work"
            onClick={() => setMenuOpen(false)} 
            className={`text-white my-4 transform transition-transform duration-300 font-semibold text-lg
                ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Work
        </a>
        <a href="#projects"
            onClick={() => setMenuOpen(false)} 
            className={`text-white my-4 transform transition-transform duration-300 font-semibold text-lg
                ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Projects
        </a>

    </div>
  )
}

export default MobileMenu