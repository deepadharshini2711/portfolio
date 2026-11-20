import { useEffect, useState } from 'react';
import { getProfile } from './api';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    getProfile().then(setProfile).catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (!profile) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [profile]);

  if (error) return <div className="loader">{error}</div>;
  if (!profile) return <div className="loader"><span className="spinner" /></div>;

  return (
    <>
      <Background />
      <Navbar name={profile.name} theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Experience experience={profile.experience} education={profile.education} />
        <Certifications certifications={profile.certifications} achievements={profile.achievements} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
