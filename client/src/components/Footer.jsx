import Icon from './Icons';

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a href="#home" className="logo">
            <span className="logo-mark">{profile.name.split(' ').map((n) => n[0]).join('')}</span>
            <span className="logo-text">{profile.name}</span>
          </a>
          <p className="muted">{profile.tagline}</p>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><Icon name="github" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}. Built with MongoDB, Express, React & Node.js.</p>
        <a href="#home" className="to-top" aria-label="Back to top"><Icon name="arrowUp" size={18} /></a>
      </div>
    </footer>
  );
}
