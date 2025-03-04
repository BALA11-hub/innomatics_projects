import React from "react";
import { FaReact, FaJs, FaNode, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import "./Skills.css"; // Ensure this file exists for styling

const skills = [
  { name: "React", icon: <FaReact />, level: "Advanced" },
  { name: "JavaScript", icon: <FaJs />, level: "Advanced" },
  { name: "Node.js", icon: <FaNode />, level: "Intermediate" },
  { name: "MongoDB", icon: <FaDatabase />, level: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
