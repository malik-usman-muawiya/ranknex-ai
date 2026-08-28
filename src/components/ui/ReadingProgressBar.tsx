'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-navy-950/5">
      <motion.div
        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
        style={{ transformOrigin: 'left' }}
        animate={{ scaleX: progress / 100 }}
        transition={{ ease: 'linear', duration: 0.1 }}
      />
    </div>
  );
}
