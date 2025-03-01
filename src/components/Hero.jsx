import React from 'react';
import imgCover from '../assets/cover.jpg';

const Hero = () => {
  const birthYear = 2005; // Replace with your actual birth year
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section id="hero" className="px-5 h-full items-center justify-center mx-auto max-w-2xl pt-20">
      
      {/* image cover */}
      <img src={imgCover} alt="cover" className=' w-full h-50 rounded-2xl object-cover overflow-hidden mb-15 animate-delay [--delay:0s]'/>

      {/* introducing website */}
      <h1 className="text-2xl font-semibold animate-delay [--delay:0.2s]">Hi, I'm <span className='text-[#f5b642] underline'>Faza Tegar Balintra</span></h1>
      <div className='p-2'>
        <p className=" my-5 animate-delay [--delay:0.5s] ">Welcome to my portofolio, friends!</p>
        <p className=' my-5 animate-delay [--delay:0.8s] '>This website might be for share my experience and projects for future use. Planning so share cool projects I've created complete with case of study. Wanna 'chit chat' to me? you can follow or hangout there with me. Let me know for future colaborations with me, stay tune!</p>
        <p className=' my 5 animate-delay [--delay:1.1s] '>Keep in mind, this website is still under development, stay with me for updated contents!</p>
      </div>

      {/* about me */}
      <h1 className='text-2xl font-semibold animate-delay [--delay:1.4s] mt-10'>About <span className='text-[#f5b642] underline'>Me</span></h1>
      <div className='p-2'>
        <p className=' my-5 animate-delay [--delay:1.7s]'>So.. hi, I'm Faza Tegar Balintra. Call me Faza or Tegar whatever. I'm {age} years old. I live in Indonesia, specialty at Central Java. I'm in collage life, still curious what coding are and wanna explore deep to it</p>
        <p className=' my-5 animate-delay [--delay:2s]'> I'm a Full Stack Website Developer Student. I'm learning Laravel, NextJS, React now. I'm still student though, i will try my best to earn people statisfy. Oh ya i have experience to Native Language like PHP, JavaScript, HTML/CSS. I wish to collaborate with people like you.</p>
      </div>
    </section>
  )
}

export default Hero