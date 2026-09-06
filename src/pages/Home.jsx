import React from 'react'
import { motion } from 'framer-motion'
import {
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa'

import "../CSS/Home.css"
import '../index.css'

const professions = [
  'AI/ML Enthusiast',
  'Software Developer',
  'Python Developer',
  'Data & ML Explorer',
  'Problem Solver',
]

const connectLinks = [
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/omkar-wadkar',
  },
  {
    icon: FaEnvelope,
    title: 'Gmail',
    link: 'mailto:omiwadkar2005@gmail.com',
  },
]

const doingLinks = [
  {
    icon: FaGithub,
    title: 'GitHub',
    link: 'https://github.com/Omkar260405',
  },
]

function SocialLink({ item, index }) {
  const Icon = item.icon

  return (
    <motion.a
      href={item.link}
      title={item.title}
      target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="home-social-link"
      aria-label={item.title}
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        type: 'spring',
      }}
      whileHover={{
        scale: 1.12,
        y: -4,
      }}
      whileTap={{
        scale: 0.94,
      }}
    >
      <Icon className="home-social-icon" />
    </motion.a>
  )
}

export default function Home() {
  return (
    <section id="home" className="home-section">

      <style>{`
        @keyframes typing {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        @keyframes cursorStop {
          0%, 99% {
            border-color: var(--accent);
          }

          100% {
            border-color: transparent;
          }
        }
      `}</style>

      {/* =========================
          HOME TOP
      ========================= */}

      <div className="home-top">

        {/* PROFILE PHOTO */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="photo-container"
        >

          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="photo-ring"
          />

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="photo-frame"
          >

            <motion.img
              src="https://github.com/Omkar260405.png"
              alt="Omkar Wadkar"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="profile-photo"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />

          </motion.div>

        </motion.div>


        {/* HOME INFORMATION */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="home-info"
        >

          <h1 className="home-title">
            Hi, I'm{' '}

            <motion.span
              animate={{
                backgroundPositionX: ['0%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="home-name"
            >
              Omkar Wadkar
            </motion.span>
          </h1>


          <p className="typing-effect">
            MCA Student | AI/ML Enthusiast | Software Developer
          </p>


          {/* PROFESSION TAGS */}

          <motion.div className="profession-tags">

            {professions.map((role, i) => (

              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    'linear-gradient(90deg,var(--accent),var(--accent-2))',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                }}
                className="profession-tag"
              >
                {role}
              </motion.div>

            ))}

          </motion.div>


          {/* INFORMATION CARDS */}

          <motion.div className="info-cards">

            {[
              {
                label: '📍 Location',
                value: 'India',
              },
              {
                label: '🎓 Focus',
                value: 'AI / Machine Learning',
              },
              {
                label: '💻 GitHub',
                value: 'Omkar260405',
              },
            ].map((info, i) => (

              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 250,
                }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>

            ))}

          </motion.div>

        </motion.div>

      </div>


      {/* =========================
          SOCIAL SECTION
      ========================= */}

      <motion.div
        className="home-social-showcase"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >

        {/* LEFT - CONNECT WITH ME */}

        <div className="home-social-group">

          <h2>
            Connect with me
          </h2>

          <div className="home-social-list">

            {connectLinks.map((item, i) => (
              <SocialLink
                key={item.title}
                item={item}
                index={i}
              />
            ))}

          </div>

        </div>


        {/* RIGHT - SEE WHAT I'M DOING */}

        <div className="home-social-group">

          <h2>
            See what I'm doing
          </h2>

          <div className="home-social-list">

            {doingLinks.map((item, i) => (
              <SocialLink
                key={item.title}
                item={item}
                index={i + 2}
              />
            ))}

          </div>

        </div>

      </motion.div>

    </section>
  )
}