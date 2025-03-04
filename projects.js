import React from "react";
import "./Projects.css"; // Create this file for styling

const projects = [
  {
    title: "Memory Match Game",
    description: "A fun and interactive memory match game built with React.",
    technologies: ["React", "JavaScript", "CSS"],
    liveLink: "https://your-memory-game.netlify.app",
    codeLink: "https://github.com/yourusername/memory-match-game",
  },
  {
    title: "BrewHub Digital Billing System",
    description: "A web application for managing digital billing in cafes and restaurants.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-billing-app.netlify.app",
    codeLink: "https://github.com/yourusername/brewhub-billing",
  },
  {
    title: "JavaScript Problem-Solving Pages",
    description: "A collection of JavaScript problem-solving pages, including ATM withdrawal, student grading, and more.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://your-js-problems.netlify.app",
    codeLink: "https://github.com/yourusername/js-problems",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <div className="links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
