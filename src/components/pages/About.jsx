import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMysql, SiPython } from "react-icons/si";
import { FaJava } from 'react-icons/fa6';

const About = () => {
    const birthYear = 2004; 
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const frontendSkills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'Vue', icon: <FaVuejs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
    ];

    const backendSkills = [
        { name: 'NodeJS', icon: <FaNodeJs /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Laravel', icon: <FaLaravel /> },
        { name: 'Java', icon: <FaJava/>}
    ];

    const experiences = [
        {
            title: "Software Engineer at Lorem Ipsum Corp (2023-present)",
            description: "Developed and maintained microservices for website applications.",
        },
        {
            title: "Intern at Lorem Ipsum Contributed Company (2020)",
            description: "Developed and maintained Cloud service.",
        },
        {
            title: "Officialy at Lorem Ipsum Contributed Company (2020)",
            description: "Developed and maintained Cloud service.",
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <motion.div 
                className="max-w-3xl px-4 mx-auto"
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent text-center">
                    About me
                </h2>

                {/* Description */}
                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(252,175,81,0.1)]">
                    <p className="text-gray-300 mb-6 text-lg">
                        Hi, I'm Faza Tegar Balintra 😄. A passionate developer, 
                        specializing in website applications. I'm {age} years old and live in Indonesia, 
                        Central Java. I'm a college student with curiosity beyond limits. 
                        I keep my track to be the best developer for you or someone 🚀
                    </p>

                    {/* Tech Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[{ title: "FrontEnd Tech", skills: frontendSkills }, { title: "BackEnd Tech", skills: backendSkills }]
                        .map((category, index) => (
                            <motion.div 
                                key={index} 
                                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(252,175,81,0.1)]"
                                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-4 text-gray-300">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className="bg-orange-300/10 text-orange-300 py-1 px-3 rounded-full text-sm flex items-center gap-x-2"
                                        >
                                            {tech.icon} {tech.name}
                                        </span>
                                    ))}
                                </div>  
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Work Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Education */}
                    <motion.div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(252,175,81,0.1)]"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-4">🏫 Education</h3>
                        <ul className="list-none list-inside text-gray-300 space-y-2">
                            <li><strong>B.S. in Computer Science</strong> - USM Semarang (2023-present)</li>
                            <li>Relevant Coursework:</li>
                            <ul className="list-disc list-inside ml-4">
                                <li>Data Structures</li>
                                <li>Web Development</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </ul>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(252,175,81,0.1)]"
                        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            {experiences.map((exp, index) => (
                                <div key={index}>
                                    <h4 className="font-bold">{exp.title}</h4>
                                    <p>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
