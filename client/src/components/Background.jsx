import { useEffect, useState } from 'react';

export default function Background() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
    const onMove = (e) => {
      if (glow) glow.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grid-overlay" />
      </div>
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}
