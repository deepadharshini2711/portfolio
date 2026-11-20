import { useEffect, useState } from 'react';
import Icon from './Icons';

const roles = ['Technical Trainer', 'Java Developer', 'MERN Stack Developer', 'Problem Solver'];

export default function Hero({ profile }) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const word = roles[idx % roles.length];
    const t = setTimeout(
      () => {
        if (!deleting && text === word) return setDeleting(true);
        if (deleting && text === '') {
          setDeleting(false);
          return setIdx(idx + 1);
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      !deleting && text === word ? 1600 : deleting ? 45 : 95
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  const initials = profile.name.split(' ').map((n) => n[0]).join('');

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <span className="status-pill">
          <span className="dot" /> Open to Trainer & Developer roles
        </span>
        <h1>
          Hi, I'm <br />
          <span className="grad-text">{profile.name}</span>
        </h1>
        <h2 className="role">
          <Icon name="code" size={26} />
          <span>{text}</span>
          <span className="cursor" />
        </h2>
        <p className="hero-tagline">
          I make programming simple. I teach Java, OOP and data structures through hands-on coding, and I build
          full stack apps with Spring Boot and MERN.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            Hire Me <Icon name="arrowRight" size={18} />
          </a>
          <a href={profile.resume} className="btn ghost" download>
            <Icon name="download" size={18} /> Resume
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
            <Icon name="github" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
            <Icon name="linkedin" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
            <Icon name="mail" />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait">
          <div className="portrait-bg">
            <div className="portrait-ring" />
          </div>
          {imgError ? (
            <div className="photo-fallback">{initials}</div>
          ) : (
            <img className="portrait-img" src={profile.photo} alt={profile.name} onError={() => setImgError(true)} />
          )}
        </div>
        <div className="float-card fc-1">
          <span className="fc-icon"><Icon name="coffee" size={18} /></span>
          <div><b>Java</b><small>Core & Spring Boot</small></div>
        </div>
        <div className="float-card fc-2">
          <span className="fc-icon"><Icon name="layers" size={18} /></span>
          <div><b>MERN</b><small>Full Stack</small></div>
        </div>
        <div className="float-card fc-3">
          <span className="fc-icon"><Icon name="graduation" size={18} /></span>
          <div><b>9.07</b><small>CGPA</small></div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse"><span /></span>
      </a>
    </section>
  );
}
