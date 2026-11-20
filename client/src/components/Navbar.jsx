import { useEffect, useState } from 'react';
import Icon from './Icons';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

export default function Navbar({ name, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const initials = name.split(' ').map((n) => n[0]).join('');

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">
        <span className="logo-mark">{initials}</span>
        <span className="logo-text">{name.split(' ')[0]}</span>
      </a>
      <nav className={open ? 'open' : ''}>
        {links.map((l) => {
          const id = l.toLowerCase();
          return (
            <a key={l} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l}
            </a>
          );
        })}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
        </button>
        <a href="#contact" className="btn primary sm hide-mobile">Let's Talk</a>
        <button className="icon-btn menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>
    </header>
  );
}
