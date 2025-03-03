import React from 'react'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent leading-right'>Hi, I'm Faza</h2>
            <p className='text-gray-200 text-lg mb-8 max-w-lg mx-auto'>
                I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a deligtful user experience.
            </p>
            <div className='flex justify-center space-x-4'>
                <a href="#projects" className='bg-orange-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1'>
                    View Project
                </a>
                <a href="#work" className=' text-orange-300 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 border border-orange-300 hover:bg-orange-300/10'>
                    View Works
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home