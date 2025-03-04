import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure you create this CSS file

const Home = () => {
  return (
    <section className="hero">
      <div className="G BALA KRISHNA">
        <h1>Hi, I'm <span className="highlight">Bala Krishna</span></h1>
        <p>A Passionate Full Stack Developer | React & JavaScript Enthusiast</p>
        <Link to="/projects" className="btn">View My Work</Link>
      </div>
    </section>
  );
};

export default Home;
