'use client';
import { useEffect, useRef } from 'react';
import '@/styles/components/insights-page.scss';

export default function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      if (!barRef.current) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      barRef.current.style.setProperty('--progress', `${pct}%`);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div ref={barRef} className="reading-progress__bar" />
    </div>
  );
}
