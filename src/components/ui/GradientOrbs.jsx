import React from 'react';

const defaultOrbs = [
  { color: 'teal', size: 400, top: '-10%', right: '-5%' },
  { color: 'cyan', size: 350, bottom: '-10%', left: '-5%' },
  { color: 'teal', size: 200, top: '50%', left: '30%' },
];

export default function GradientOrbs({ orbs = defaultOrbs }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {orbs.map((orb, index) => (
        <div
          key={index}
          className={`orb orb-${orb.color} animate-pulse-glow`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
        />
      ))}
    </div>
  );
}
