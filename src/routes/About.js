import React from 'react'
import './About.css';

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {FaExternalLinkAlt} from 'react-icons/fa'
import NinetyNineBadge from '../component/NinetyNineBadge'

const skills = [
  { name: 'Illustrator', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'HTML', level: 78 },
  { name: 'JavaScript', level: 65 },
  { name: 'React', level: 55 },
  { name: 'Photoshop', level: 20 },
]

const languages = [
  { name: 'Serbian', level: 6 },
  { name: 'English', level: 4 },
  { name: 'Spanish', level: 1 },
]

const experience = [
  {
    period: '2013 — Present',
    role: 'Freelance Logo Designer',
    org: 'Self-employed',
    description: '15 years of freelance design work in Adobe Illustrator, working directly with clients on brand and logo identity. Portfolio available on request.',
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

const projects = [
  // Add your own projects here as you build them, e.g.
  // { title: 'Project Name', description: '...', link: 'https://...' },
]

function About() {
  return (
    <div>
      <div className="about-page">

        <section className="about-intro">
          <h1>About Me</h1>
          <h2>Logo Designer &amp; Web Developer</h2>
          <p className="about-bio">
            I'm a freelance logo designer with over 15 years of experience, now expanding into web
            development. I care about turning a client's idea into something real — reliable,
            punctual, and detail-oriented, with a track record of a 99% client satisfaction rate.
            Ready for the next challenge.
          </p>

          <div className="about-meta">
            <span>Miami Beach, FL</span>
            <a href="mailto:designstarla@gmail.com">designstarla@gmail.com</a>
          </div>

          <div className="about-links">
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
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-label">
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
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
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className={i < lang.level ? 'dot filled' : 'dot'} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h3>Projects</h3>
          {projects.length === 0 ? (
            <p className="projects-placeholder">More projects coming soon.</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-card" key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  )
}

export default About
