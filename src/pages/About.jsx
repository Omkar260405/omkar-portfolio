import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaBrain, FaCode, FaChartLine } from "react-icons/fa";
import "../CSS/About.css";

const focus = [
  { icon: <FaBrain />, title: "AI & Machine Learning", text: "Building practical ML solutions and exploring intelligent applications." },
  { icon: <FaChartLine />, title: "Data & Analytics", text: "Working with data to find patterns, evaluate models and support better decisions." },
  { icon: <FaCode />, title: "Software Development", text: "Turning ideas into clean, usable applications across the web and backend." },
];

export default function AboutMe() {
  return (
    <section id="about" className="about-container">
      <motion.div className="about-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
        <div className="about-intro">
          <span className="about-kicker">A LITTLE ABOUT ME</span>
          <h2 className="about-header">About Me</h2>
          <p className="about-text lead-text">Hi, I’m <strong>Omkar Wadkar</strong> — an MCA student, AI/ML enthusiast and software developer who enjoys turning ideas into practical, data-driven applications.</p>
          <p className="about-text">I’m particularly interested in machine learning, data analytics and modern software development. I like learning by building — from predictive models and data applications to projects that combine intelligent systems with useful user experiences.</p>
          <p className="about-text">My current goal is simple: keep strengthening my technical foundation, build meaningful projects and grow into a well-rounded software developer who can work confidently across AI/ML and application development.</p>
        </div>

        <div className="focus-grid">
          {focus.map((item, index) => (
            <motion.div className="focus-card" key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -6 }}>
              <div className="focus-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="education-section">
          <div>
            <span className="about-kicker">EDUCATION</span>
            <h3 className="education-header">Academic Journey</h3>
          </div>
          <motion.div className="edu-card" whileHover={{ y: -4 }}>
            <div className="edu-icon"><FaUniversity /></div>
            <div>
              <h4 className="edu-title">Master of Computer Applications (MCA)</h4>
              <p className="edu-institute">D Y Patil Deemed to be University, Navi Mumbai</p>
              <span className="edu-details">Academic Year 2025–2026</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
