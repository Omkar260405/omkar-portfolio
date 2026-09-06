import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Certificates.css";

const CERTS = {
  tech: [
    { title: "Python", org: "Kaggle", date: "September 1, 2026", img: "/certs/kaggle-python.png" },
    { title: "Intro to Deep Learning", org: "Kaggle", date: "September 1, 2026", img: "/certs/kaggle-dl.png" },
    { title: "Advanced SQL", org: "Kaggle", date: "September 1, 2026", img: "/certs/kaggle-sql.png" },
  ],
  other: [
    { title: "Data Analytics Job Simulation", org: "Deloitte / Forage", date: "September 1, 2026", img: "/certs/deloitte.png", pdf: "/certs/deloitte.pdf" },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-shell">
        <div className="section-heading">
          <span className="section-kicker">MY ACHIEVEMENTS</span>
          <h2>Certificates <span>🏅</span></h2>
          <p>Verified learning and professional achievements that support my journey in AI, machine learning and data analytics.</p>
        </div>

        <div className="cert-tabs" role="tablist" aria-label="Certificate categories">
          <button className={tab === "tech" ? "cert-tab active" : "cert-tab"} onClick={() => setTab("tech")}>Technical</button>
          <button className={tab === "other" ? "cert-tab active" : "cert-tab"} onClick={() => setTab("other")}>Professional</button>
        </div>

        <div className="certs-grid">
          <AnimatePresence mode="popLayout">
            {CERTS[tab].map((cert, index) => (
              <motion.article
                key={cert.title}
                className="certificate-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <button className="certificate-image-button" onClick={() => setSelectedCert(cert)} aria-label={`View ${cert.title} certificate`}>
                  <img src={cert.img} alt={`${cert.org} ${cert.title} certificate`} />
                  <span className="image-overlay">View Certificate ↗</span>
                </button>
                <div className="certificate-info">
                  <span className="certificate-org">{cert.org}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.date}</p>
                  <div className="certificate-actions">
                    <button className="view-cert-btn" onClick={() => setSelectedCert(cert)}>View Certificate</button>
                    {cert.pdf && <a className="pdf-link" href={cert.pdf} target="_blank" rel="noreferrer">Open PDF</a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div className="certificate-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)}>
            <button className="modal-close" onClick={() => setSelectedCert(null)} aria-label="Close certificate">×</button>
            <motion.div className="modal-inner" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <img src={selectedCert.img} alt={`${selectedCert.org} ${selectedCert.title} certificate`} />
              {selectedCert.pdf && <a className="modal-pdf" href={selectedCert.pdf} target="_blank" rel="noreferrer">Open original PDF ↗</a>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
