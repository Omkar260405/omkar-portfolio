import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "C", "C++", "Java"] },
    { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Databases & Tools", items: ["MySQL", "MongoDB", "Git"] },
    { title: "Frameworks & Libraries", items: ["TensorFlow", "PyTorch", "OpenCV"] },
  ],
  [
    { title: "Core Concepts", items: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning"] },
    { title: "Soft Skills", items: ["Teamwork", "Problem Solving", "Creativity", "Communication"] },
  ],
];

export default function Skills() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const place = () => {
      const circles = Array.from(stage.querySelectorAll(".skill-circle"));
      const rect = stage.getBoundingClientRect();
      const placed = [];
      const size = circles[0]?.offsetWidth || 82;
      const overlap = (x, y) => placed.some((p) => Math.hypot(p.x - x, p.y - y) < size + 26);
      circles.forEach((circle) => {
        let x, y, tries = 0;
        do {
          x = 15 + Math.random() * Math.max(20, rect.width - size - 30);
          y = 15 + Math.random() * Math.max(20, rect.height - size - 30);
          tries++;
        } while (overlap(x, y) && tries < 200);
        placed.push({ x, y });
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
      });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  return (
    <section className="skills-container" id="skills">
      <motion.div className="skills-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>My Skills</h2>
        <div className="skills-line" />
        <p>✨ Technical expertise blended with creativity — explore my core competencies below.</p>
      </motion.div>

      <motion.div ref={stageRef} className="skills-stage" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              x: [0, i % 2 === 0 ? 14 : -14, i % 3 === 0 ? -10 : 10, 0],
              y: [0, i % 3 === 0 ? -16 : 12, i % 2 === 0 ? 10 : -14, 0],
              rotate: [0, i % 2 === 0 ? 3 : -3, 0],
            }}
            transition={{
              opacity: { delay: i * 0.05, duration: 0.45 },
              scale: { delay: i * 0.05, duration: 0.45 },
              x: { duration: 6 + (i % 4) * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 },
              y: { duration: 5.5 + (i % 5) * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 },
              rotate: { duration: 7 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.08 },
            }}
            whileHover={{ scale: 1.18, boxShadow: "0 0 35px 8px rgba(0,255,255,.45)", background: "rgba(0,255,255,.12)" }}
          >
            <motion.img src={s.logo} alt={s.name} whileHover={{ rotate: [0, 6, -6, 0], transition: { duration: .45 } }} />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="skills-table">
        <div className="skills-row skills-row-top">
          {ROWS[0].map((col, i) => (
            <motion.div key={col.title} className="skill-box" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .08 }} whileHover={{ y: -5, scale: 1.02 }}>
              <h3>{col.title}</h3><ul>{col.items.map((item) => <motion.li key={item} whileHover={{ x: 5, color: "#00ffc8" }}>{item}</motion.li>)}</ul>
            </motion.div>
          ))}
        </div>
        <div className="skills-row skills-row-bottom">
          {ROWS[1].map((col, i) => (
            <motion.div key={col.title} className="skill-box" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .08 }} whileHover={{ y: -5, scale: 1.02 }}>
              <h3>{col.title}</h3><ul>{col.items.map((item) => <motion.li key={item} whileHover={{ x: 5, color: "#00ffc8" }}>{item}</motion.li>)}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
