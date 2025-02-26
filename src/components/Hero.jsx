import React from 'react';
import imgCover from '../assets/cover.jpg';

const Hero = () => {
  return (
    <section id="hero" className="h-full items-center justify-center mx-auto max-w-2xl mt-20 mb-20">
      
      {/* image cover */}
      <img src={imgCover} alt="cover" className=' w-full h-50 rounded-2xl object-cover overflow-hidden mb-15 animate-delay [--delay:0s]'/>

      {/* introducing website */}
      <h1 className="text-2xl font-semibold animate-delay [--delay:0.2s]">Hi, I'm <span className='hover:text-orange-200 transition-color duration-300'>Faza Tegar Balintra</span></h1>
      <p className="text-lg my-5 animate-delay [--delay:0.5s]">Welcome to my portofolio, friends!</p>
      <p className='text-lg my-5 animate-delay [--delay:0.8s]'>This website might be for share my experience and projects for future use. Planning so share cool projects I've created complete with case of study. Wanna 'chit chat' to me? you can follow or hangout there with me. Let me know for future colaborations with me, stay tune!</p>
      <p className='text-lg my 5 animate-delay [--delay:1.1s]'>Keep in mind, this website is still under development, stay with me for updated contents!/</p>

      {/* about me */}
      

    </section>
  )
}

export default Hero