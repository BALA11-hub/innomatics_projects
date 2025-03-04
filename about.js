import React from "react";
import "./about.css"; 
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Me</h1>
        <p>
          Hello! I'm <span className="highlight">Bala Krishna</span>, a passionate full-stack developer with expertise in 
          **React, JavaScript, and backend technologies**. I love building interactive and user-friendly web applications.
        </p>
        <p>
          With a strong foundation in front-end and back-end technologies, I have worked on multiple projects, 
          including **web apps, billing systems, and interactive games**. My goal is to create **high-performing, scalable, 
          and beautiful applications**.
        </p>
        <p><strong>Hobbies & Interests:</strong> Coding, Gaming, Reading Tech Blogs, and Traveling.</p>
      </motion.div>
    </section>
  );
};

export default About;
