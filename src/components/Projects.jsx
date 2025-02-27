import React from 'react'

const Projects = () => {
    const projects = [
            { title: "Attendance System", description: "Laravel 11 + QR Code", link: "#" },
            { title: "Portfolio", description: "React + Vite + Tailwind", link: "#" },
        ];  
    return (
        <section id="projects" className="p-10 bg-gray-100 mx-auto max-w-2xl scroll-smooth">
            <h2 className="text-3xl font-bold text-center text-blue-500 underline">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {projects.map((project, index) => (
                <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                    <p className='text-black'>{project.description}</p>
                    <a href={project.link} className="text-blue-500 mt-2 block">View Project</a>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Projects