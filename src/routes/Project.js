import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './Project.css';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { projects } from '../data/projects'

// Every project shows its screenshots as a slider; clicking a slide opens a full-screen viewer.
function getImages(project) {
  if (project.images) return project.images
  const list = []
  if (project.desktop) list.push({ src: project.desktop, alt: 'Desktop view' })
  if (project.mobile) list.push({ src: project.mobile, alt: 'Mobile view' })
  return list
}

function Lightbox({ images, title, index, setIndex, onClose }) {
  const count = images.length
  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count, setIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [go, onClose])

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
      {count > 1 && (
        <button type="button" className="slider-btn prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous screenshot">&#8249;</button>
      )}
      <img src={images[index].src} alt={`${title}: ${images[index].alt}`} onClick={(e) => e.stopPropagation()} />
      {count > 1 && (
        <button type="button" className="slider-btn next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next screenshot">&#8250;</button>
      )}
      <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        {images[index].alt}{count > 1 && ` (${index + 1} / ${count})`}
      </div>
    </div>,
    document.body
  )
}

function Slider({ images, title }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const count = images.length
  const go = (step) => setIndex((index + step + count) % count)
  const close = useCallback(() => setOpen(false), [])

  return (
    <div className="pcard-media pcard-slider">
      <button type="button" className="slide-open" onClick={() => setOpen(true)} aria-label={`Enlarge ${title} screenshot`}>
        <img className="pcard-desktop pcard-contain" src={images[index].src} alt={`${title}: ${images[index].alt}`} loading="lazy" />
      </button>
      {count > 1 && (
        <>
          <button type="button" className="slider-btn prev" onClick={() => go(-1)} aria-label="Previous screenshot">&#8249;</button>
          <button type="button" className="slider-btn next" onClick={() => go(1)} aria-label="Next screenshot">&#8250;</button>
          <div className="slider-dots">
            {images.map((img, i) => (
              <button type="button" key={img.src} className={i === index ? 'dot-btn active' : 'dot-btn'} onClick={() => setIndex(i)} aria-label={`Show screenshot ${i + 1}`} />
            ))}
          </div>
        </>
      )}
      {open && <Lightbox images={images} title={title} index={index} setIndex={setIndex} onClose={close} />}
    </div>
  )
}

function ProjectCard({ project }) {
  const images = getImages(project)

  if (project.status === 'soon') {
    return (
      <article className="pcard pcard-soon">
        <div className="pcard-media pcard-media-empty">Coming soon</div>
        <div className="pcard-body">
          <h3>{project.title}</h3>
          <p className="pcard-summary">{project.summary}</p>
          <ul className="pcard-tech">
            {project.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </article>
    )
  }

  return (
    <article className="pcard">
      {images.length > 0 ? (
        <Slider images={images} title={project.title} />
      ) : (
        <div className="pcard-media pcard-media-empty">Screenshot coming soon</div>
      )}

      <div className="pcard-body">
        <h3>{project.title}</h3>
        <p className="pcard-summary">{project.summary}</p>

        <ul className="pcard-tech">
          {project.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <div className="pcard-actions">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="pcard-btn">
              <FaExternalLinkAlt size={13} /> Live demo
            </a>
          ) : (
            <a href={project.liveMailto} className="pcard-btn">
              <FaExternalLinkAlt size={13} /> {project.liveLabel}
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="pcard-btn">
            <BsGithub size={15} /> GitHub
          </a>
        </div>

        <dl className="pcard-details">
          <dt>The problem</dt>
          <dd>{project.problem}</dd>
          <dt>What I built</dt>
          <dd>{project.built}</dd>
          <dt>What I learned</dt>
          <dd>{project.learned}</dd>
        </dl>
      </div>
    </article>
  )
}

function Project({ embedded = false }) {
  return (
    <div className={embedded ? 'project-page embedded' : 'project-page'}>
      <div className="project-head">
        <h1>Projects</h1>
        <h4>Things I've built while moving from design into development.</h4>
      </div>

      <div className="pcard-grid">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}

export default Project
