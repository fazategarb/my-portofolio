import React from 'react'

const About = () => {

    const frontendSkills = ['React', 'TailwindCSS', 'Vue']
    const backendSkills = ['NodeJS', 'Python', 'MySQL', 'Laravel']

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-3xl px-4 mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent'>About Me</h2>
            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6 text-lg'>Passionate developer with expertise in building scalable web applications and creating inovative solutions</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border'>
                        {/* Front end */}
                        <h3 className='text-xl font-bold mb-4 text-gray-300'>FrontEnd Tech</h3>
                        <div className='flex flex-wrap gap-2 justify-center'>
                            {frontendSkills.map((tech, keys) => (
                                <span key={keys} className='bg-orange-300/10 text-orange-300 py-1 px-3 rounded-full text-sm hover:bg-orange-300/20 transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>  
                    </div>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border'>
                        {/* Back end */}
                        <h3 className='text-xl font-bold mb-4 text-gray-300'>BackEnd Tech</h3>
                        <div className='flex flex-wrap gap-2 justify-center'>
                            {backendSkills.map((tech, keys) => (
                                <span key={keys} className='bg-orange-300/10 text-orange-300 py-1 px-3 rounded-full text-sm hover:bg-orange-300/20 transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About