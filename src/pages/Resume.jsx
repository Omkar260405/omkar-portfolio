import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return <section id="resume" className="container" style={{padding:"60px 0"}}>
    <motion.div className="card" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} style={{background:"#0b0b0b",borderRadius:16,padding:"40px 30px",color:"#e5e5e5",boxShadow:"0 0 25px rgba(0,153,255,.1)"}}>
      <motion.h2 initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:.2}} style={{fontSize:28,color:"#00b4ff",marginBottom:12}}>📄 Resume</motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} style={{color:"#aaa",marginBottom:25}}>A quick glance at my journey.</motion.p>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.4}} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:20,background:"rgba(255,255,255,.03)",padding:"24px 20px",borderRadius:12}}>
        <div><h3 style={{fontSize:24,color:"#00b4ff",marginBottom:4}}>👨‍💻 OMKAR WADKAR</h3><p style={{marginTop:10,fontSize:15,color:"#ccc"}}>Master of Computer Applications (MCA) | D Y Patil Deemed to be University</p><p style={{margin:"4px 0",fontSize:14,color:"#aaa"}}>📍 Navi Mumbai, India</p><p style={{margin:"4px 0",fontSize:14,color:"#aaa"}}>💻 GitHub: Omkar260405</p></div>
        <motion.div whileHover={{scale:1.05}} style={{background:"linear-gradient(135deg,#00b4ff44,#0b0b0b)",borderRadius:12,padding:"14px 20px",border:"1px solid rgba(255,255,255,.1)",maxWidth:560,fontSize:14,lineHeight:1.6}}><strong style={{color:"#00b4ff"}}>Professional Summary:</strong><p style={{marginTop:6,color:"#ccc"}}>MCA student and AI/ML enthusiast with hands-on experience in software development, machine learning and data-driven projects. Interested in building practical solutions and growing as a software developer.</p></motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.6}} style={{marginTop:40,border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:"20px 24px",background:"rgba(255,255,255,.03)"}}>
        <h4 style={{fontSize:20,color:"#00b4ff",marginBottom:12}}>🎓 Education</h4>
        <ul style={{listStyle:"none",padding:0,margin:0,lineHeight:1.8}}><li><strong>Master of Computer Applications (MCA)</strong> — D Y Patil Deemed to be University, Navi Mumbai<br/><span style={{color:"#aaa"}}>Academic Year: 2025–2026</span></li></ul>
      </motion.div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.8}} style={{marginTop:40}}><h4 style={{fontSize:20,color:"#00b4ff",marginBottom:12}}>💼 Projects</h4><ul style={{listStyle:"none",padding:0,margin:0,lineHeight:1.8}}><li>1️⃣ CineWatch</li><li>2️⃣ Global Currency Exchange Rate Prediction</li><li>3️⃣ Virtual Study Group</li></ul></motion.div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1}} style={{marginTop:40}}><h4 style={{fontSize:20,color:"#00b4ff",marginBottom:12}}>⚙️ Skills</h4><div style={{display:"flex",flexWrap:"wrap",gap:10}}>{["Python","Java","C++","HTML","CSS","JavaScript","React","SQL","Machine Learning","Deep Learning","TensorFlow","PyTorch","OpenCV","Git","Streamlit"].map(skill=><motion.span key={skill} whileHover={{scale:1.1,backgroundColor:"rgba(0,180,255,.3)"}} style={{background:"rgba(255,255,255,.05)",padding:"6px 12px",borderRadius:8,fontSize:13,color:"#ccc"}}>{skill}</motion.span>)}</div></motion.div>
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.4}} style={{display:"flex",justifyContent:"center",gap:30,marginTop:40}}><motion.a href="https://github.com/Omkar260405" target="_blank" rel="noreferrer" whileHover={{scale:1.1,color:"#00b4ff"}} style={{color:"#ccc",textDecoration:"none",fontSize:15,fontWeight:500}}>💻 GitHub</motion.a></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} style={{marginTop:50,borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,.1)"}}><div style={{height:650,display:"flex",alignItems:"center",justifyContent:"center",background:"#111",color:"#777",fontSize:16}}>Resume PDF will be added here.</div></motion.div>
    </motion.div>
  </section>
}
