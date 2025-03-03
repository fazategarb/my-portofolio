import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempora consequuntur deleniti similique nisi ad?",
    techStack: [<FaReact />, <FaNodeJs />, <SiTailwindcss />]
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempora consequuntur deleniti similique nisi ad?",
    techStack: [<FaReact />, <FaLaravel />, <SiTailwindcss />]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent text-center py-2"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-300/30 hover:shadow-[0_0_15px_rgba(252,175,81,0.1)] transition"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }}
            >
              {/* Project Title */}
              <motion.h3 
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((icon, idx) => (
                  <motion.span 
                    key={idx} 
                    className="bg-orange-300/10 text-orange-300 py-1 px-3 rounded-full text-sm hover:bg-orange-300/20 transition flex items-center gap-x-2"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }} 
                    viewport={{ once: true }}
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>

              {/* Project Link */}
              <motion.div 
                className="text-orange-300 text-medium font-bold mt-3"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}
              >
                <a href="#" className="hover:animate-pulse">&gt;&gt;</a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
