import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Resume", id: "resume" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  /* =========================================
     SCROLL TO SECTION
     ========================================= */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 68;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    setActive(id);
    setIsOpen(false);
  };

  /* =========================================
     ACTIVE NAV LINK WHILE SCROLLING
     ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 90;

      // At the very top
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

      let currentSection = "home";
      let closestDistance = Infinity;

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
          Only consider sections that have reached
          the navbar area.
        */
        if (rect.top <= navbarHeight + 80) {
          const distance = Math.abs(rect.top - navbarHeight);

          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = link.id;
          }
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE MOBILE MENU WITH ESC
     ========================================= */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =========================================
          NAVBAR
          ========================================= */}
      <nav className="nav">

        {/* =========================================
            LEFT BRAND
            ========================================= */}
        <button
          className="brand-button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
          >
            OW
          </motion.div>

          <div className="brand-text">
            <h1>Omkar Wadkar</h1>
            <div>ML • AI • Developer</div>
          </div>
        </button>

        {/* =========================================
            DESKTOP NAVIGATION
            ========================================= */}
        <div className="nav-links desktop-nav">

          {links.map((link) => (
            <button
              key={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => scrollToSection(link.id)}
            >

              <motion.span
                animate={{
                  color:
                    active === link.id
                      ? "var(--accent)"
                      : "#ffffff",
                }}
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  color: {
                    duration: 0.2,
                  },
                  scale: {
                    duration: 0.2,
                  },
                }}
              >
                {link.label}
              </motion.span>

              {/* Active underline */}
              {active === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />
              )}

            </button>
          ))}

        </div>

        {/* =========================================
            MOBILE MENU BUTTON
            ========================================= */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>


      {/* =========================================
          MOBILE MENU
          ========================================= */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            {links.map((link) => (
              <button
                key={link.id}
                className={
                  active === link.id
                    ? "mobile-active"
                    : ""
                }
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}