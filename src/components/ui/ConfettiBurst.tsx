'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  rotation: number;
  delay: number;
  duration: number;
  size: number;
}

const COLORS = ['#00D2D2', '#33DEDE', '#0A0F1E', '#00A8A8'];

export default function ConfettiBurst() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      delay: Math.random() * 0.3,
      duration: 1.6 + Math.random() * 0.8,
      size: 6 + Math.random() * 6,
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ top: '-5%', left: `${p.x}%`, opacity: 1, rotate: 0 }}
          animate={{
            top: '105%',
            rotate: p.rotation + 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
          }}
          className="absolute rounded-sm"
          style={{
            width: p.size,
            height: p.size * 0.4,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}
