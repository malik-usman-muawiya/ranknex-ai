'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 400, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.6 });

  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Skip entirely on touch devices (phones/tablets have no cursor).
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFinePointer);
    if (!hasFinePointer) return;

    function handleMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      setIsPointer(!!interactive);
    }

    function handleLeave() {
      setIsVisible(false);
    }

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring - trails slightly behind, grows on hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-teal-500/50 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 52 : 32,
          height: isPointer ? 52 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-teal-500 pointer-events-none z-[9999]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 6 : 8,
          height: isPointer ? 6 : 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
