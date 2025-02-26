import React from 'react';
import imgCover from '../assets/cover.jpg';

const Hero = () => {
  return (
    <section id="hero" className="h-full items-center justify-center mx-auto max-w-2xl mt-25 mb-25">
      <img src={imgCover} alt="cover" className=' w-full h-40 rounded-2xl object-cover overflow-hidden mb-15 animate-delay [--delay:0s]'/>
      <h1 className="text-2xl font-bold animate-delay [--delay:0.2s]">Hi, I'm Faza Tegar Balintra</h1>
      <p className="text-lg mt-4 animate-delay [--delay:0.5s]">A Full Stack Developer with a passion for Web Technologies.</p>
      <button className=' bg-white text-black mt-6 px-6 py-2 rounded-lg animate-delay [--delay:0.7s]'>
      <a href="/projects">View My Work</a>
      </button>
    </section>
  )
}

export default Hero