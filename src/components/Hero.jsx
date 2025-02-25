import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold animate-text-delay [--delay:0s]">Hi, I'm Faza</h1>
      <p className="text-lg mt-4 animate-text-delay [--delay:0.3s]" >A Full Stack Developer with a passion for Web Technologies.</p>
      <a href="#projects" className="mt-6 bg-white text-black px-6 py-2 rounded-lg animate-text-delay [--delay:0.6s]">View My Work</a>
    </section>
  )
}

export default Hero