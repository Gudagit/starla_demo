import React from 'react'
import './About.css';

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {FaExternalLinkAlt, FaFileAlt, FaDownload} from 'react-icons/fa'
import NinetyNineBadge from '../component/NinetyNineBadge'

// `learning: true` marks tools I am still building experience with.
const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'HTML & CSS' },
      { name: 'Responsive Design' },
      { name: 'React Router' },
      { name: 'Vite' },
      { name: 'Tailwind CSS', learning: true },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'REST APIs' },
      { name: 'SQL', learning: true },
      { name: 'Node.js', learning: true },
      { name: 'Express', learning: true },
      { name: 'Python', learning: true },
      { name: 'FastAPI', learning: true },
      { name: 'PostgreSQL', learning: true },
      { name: 'Prisma', learning: true },
      { name: 'SQLAlchemy', learning: true },
      { name: 'JWT Authentication', learning: true },
      { name: 'C# / .NET', learning: true },
    ],
  },
  {
    title: 'Data & Testing',
    items: [
      { name: 'Pytest', learning: true },
      { name: 'Postman', learning: true },
      { name: 'ESLint', learning: true },
      { name: 'Lighthouse' },
      { name: 'pandas', learning: true },
      { name: 'NumPy', learning: true },
      { name: 'scikit-learn', learning: true },
      { name: 'Matplotlib', learning: true },
      { name: 'Jupyter', learning: true },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { name: 'Git & GitHub' },
      { name: 'Claude Code (AI-assisted development)' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'GitHub Pages' },
      { name: 'Neon (hosted PostgreSQL)', learning: true },
      { name: 'EmailJS' },
    ],
  },
  {
    title: 'Design',
    items: [
      { name: 'Adobe Illustrator' },
      { name: 'Figma', learning: true },
      { name: 'Logo & Brand Identity' },
      { name: 'Photoshop', learning: true },
    ],
  },
]

const RESUME_URL = `${process.env.PUBLIC_URL}/cv/Ivana-Gudovic-Resume.pdf`

const languages = [
  { name: 'Serbian', level: 5 },
  { name: 'English', level: 5 },
  { name: 'Spanish', level: 2 },
]

const experience = [
  {
    period: '2025 — Present',
    role: 'Software Developer (Self-Taught, Junior)',
    org: 'Personal projects',
    description: 'Learning software development by building real projects, with Claude Code as a pair-programming partner and tutor. I define the requirements, review and test the code, and make sure I understand every part. All projects are on my GitHub.',
    bullets: [
      'Client & Project Tracker: full-stack app (React, Vite, Node.js, Express, PostgreSQL, Prisma) with a REST API, server-side validation, meaningful HTTP errors and a responsive interface. Deployed on Vercel.',
      'KitchenCAD: Windows desktop app in C# (WinForms) of about 15,000 lines that generates parts, shop drawings, cut lists and CNC programs from a single parametric model, with 3D view, a custom path-tracing renderer and DXF / PDF export.',
      'Crypto Predictor: research project in Python (FastAPI, pandas, scikit-learn) that computes daily probabilities from historical data, validated with walk-forward testing and a prediction audit log, with a React dashboard and Pytest tests.',
      'Digital QR Menu: mobile-first restaurant menu in plain HTML, CSS and JavaScript with live search across 103 dishes, a cart and favorites saved in localStorage, optimized WebP images, a responsive layout from 280 px to 2560 px, and accessibility support. Live on GitHub Pages.',
      'This portfolio: React, React Router, EmailJS contact form, responsive design, deployed on Vercel.',
    ],
  },
  {
    period: '2013 — Present',
    role: 'Freelance Logo Designer',
    org: 'Self-employed',
    description: 'Extensive experience in freelance brand and logo design with Adobe Illustrator for clients around the world, with a 99% client satisfaction rate on 99designs and DesignCrowd. Daily practice with client briefs, feedback and revision rounds, and tight deadlines.',
  },
  {
    period: '04/2021 — 10/2023',
    role: 'Shop Drawing Maker (Drafter)',
    org: 'Siri Custom Carpentry',
    description: 'Produced precise technical drawings from architectural plans and solved construction problems for custom cabinetry.',
  },
  {
    period: '2020 — Present',
    role: 'Server, Hospitality',
    org: "Norman's Tavern, Soho Beach House",
    description: 'High-volume, customer-facing teamwork and communication.',
  },
]

const education = [
  {
    period: 'Serbia',
    degree: "Bachelor's — Electronics and Telecommunications",
    school: 'School of Electrical and Computer Engineering of Applied Studies',
  },
  {
    period: 'Serbia',
    degree: 'High School — Technical School',
    school: '',
  },
]

function About() {
  return (
    <div>
      <div className="about-page">

        <section className="about-intro">
          <h1>About Me</h1>
          <h2>Software Developer &amp; Logo Designer</h2>
          <p className="about-bio">
            I'm a junior software developer building full-stack web applications with React,
            Node.js, Python and PostgreSQL. I'm learning by building real projects, all on my
            GitHub with live demos, and I work with AI tools such as Claude Code as a mentor and
            pair programmer. I review and test everything I ship, and I make sure I can explain
            it. Before moving into software, I spent over a decade as a freelance logo designer
            with extensive experience in brand identity, client communication and delivering on
            deadlines, and I hold a degree in electronics and telecommunications. I'm looking for
            a junior developer role on a team where I can keep growing.
          </p>

          <div className="about-meta">
            <span>Miami Beach, FL</span>
            <a href="mailto:designstarla@gmail.com">designstarla@gmail.com</a>
          </div>

          <div className="about-links">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="about-link-btn about-link-primary">
              <FaFileAlt size={15} /> View Resume
            </a>
            <a href={RESUME_URL} download className="about-link-btn about-link-primary">
              <FaDownload size={15} /> Download PDF
            </a>
            <a href="https://github.com/Gudagit" target="_blank" rel="noreferrer" className="about-link-btn">
              <BsGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ivana-gudovic-bb6171107" target="_blank" rel="noreferrer" className="about-link-btn">
              <BsLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://99designs.com/profiles/2993835" target="_blank" rel="noreferrer" className="about-link-btn">
              <NinetyNineBadge size={18} /> 99designs
            </a>
            <a href="https://www.instagram.com/designstarla/?hl=en" target="_blank" rel="noreferrer" className="about-link-btn">
              <RiInstagramFill size={18} /> Instagram
            </a>
            <a href="https://www.designcrowd.com/designer/553651/designstarla" target="_blank" rel="noreferrer" className="about-link-btn">
              <FaExternalLinkAlt size={15} /> DesignCrowd
            </a>
          </div>
        </section>

        <section className="about-section">
          <h3>Skills</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="skill-chips">
                  {group.items.map((item) => (
                    <li key={item.name} className={item.learning ? 'chip learning' : 'chip'}>{item.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="skills-legend"><span className="chip-sample" /> Currently learning</p>
        </section>

        <section className="about-section">
          <h3>Experience</h3>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.role + item.period}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-body">
                  <h4>{item.role}</h4>
                  <span className="timeline-org">{item.org}</span>
                  <p>{item.description}</p>
                  {item.bullets && (
                    <ul className="timeline-bullets">
                      {item.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h3>Education</h3>
          <div className="education-list">
            {education.map((item) => (
              <div className="education-item" key={item.degree}>
                <h4>{item.degree}</h4>
                {item.school && <span className="education-school">{item.school}</span>}
                <span className="education-place">{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h3>Languages</h3>
          <div className="languages-row">
            {languages.map((lang) => (
              <div className="language-item" key={lang.name}>
                <span>{lang.name}</span>
                <div className="language-dots">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < lang.level ? 'dot filled' : 'dot'} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        </div>
    </div>
  )
}

export default About
