import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS/Contact.css";

const CONTACT_EMAIL = "omiwadkar2005@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/omkar-wadkar";
const GITHUB_URL = "https://github.com/Omkar260405";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
    if (status) setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (Object.values(form).some((value) => !value.trim())) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setStatus("📨 Sending your message...");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio Contact: ${form.subject}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent");

      setStatus("✅ Message sent successfully! Thank you for reaching out.");
      setForm({ name: "", contact: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Could not send the message. Please email me directly at omiwadkar2005@gmail.com.");
    } finally {
      setIsSending(false);
    }
  };

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: GITHUB_URL },
    { img: "/linkedin.png", title: "LinkedIn", link: LINKEDIN_URL },
    { img: "/gmail.png", title: "Gmail", link: `mailto:${CONTACT_EMAIL}` },
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.h1 initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="contact-title">
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="contact-subtitle">
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`Open ${item.title}`} whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 250 }}>
            <motion.img src={item.img} alt={item.title} className="social-icon" animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
          </motion.a>
        ))}
      </motion.div>

      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button type="submit" className="contact-btn" disabled={isSending} whileHover={{ scale: isSending ? 1 : 1.05 }} whileTap={{ scale: isSending ? 1 : 0.95 }}>
          {isSending ? "📨 Sending..." : "🚀 Send Message"}
        </motion.button>
        {status && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="contact-status">{status}</motion.p>}
      </motion.form>
    </section>
  );
}
