import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hi, I'm Faza <span className="text-black">👋👋</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-200 text-lg mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          I'm a full-stack developer who loves crafting clean, scalable web applications. 
          My goal is to build solutions that offer both exceptional performance and a delightful user experience.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#projects"
            className="bg-orange-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(252,175,81,0.3)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            View Project
          </motion.a>
          <motion.a
            href="#about"
            className="text-orange-300 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 border border-orange-300 hover:bg-orange-300/10 hover:shadow-[0_0_15px_rgba(252,175,81,0.3)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            View About
          </motion.a>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
