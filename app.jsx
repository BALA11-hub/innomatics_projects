import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Ensure App.css exists in the same directory as App.js
import "./App.css";

// Ensure App.css file exists
try {
  require("./App.css");
} catch (error) {
  console.warn("App.css file is missing. Please create it in the same directory as App.js.");
}

const Home = () => <div><h1>Home</h1><p>Welcome to my portfolio!</p></div>;
const About = () => <div><h1>About Me</h1><p>Here is some information about me.</p></div>;
const Skills = () => <div><h1>Skills</h1><p>These are my skills.</p></div>;
const Projects = () => <div><h1>Projects</h1><p>Check out my projects.</p></div>;
const Experience = () => <div><h1>Experience</h1><p>My work experience.</p></div>;
const Contact = () => <div><h1>Contact</h1><p>Get in touch with me.</p></div>;

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

