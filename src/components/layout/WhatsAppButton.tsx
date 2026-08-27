'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-8 h-8"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.001 3C9.097 3 3.5 8.597 3.5 15.5c0 2.444.696 4.726 1.902 6.665L3 29l7.05-2.358A12.43 12.43 0 0 0 16 28.5C22.903 28.5 28.5 22.903 28.5 16S22.903 3 16.001 3Zm7.36 17.642c-.31.875-1.532 1.598-2.512 1.81-.668.143-1.541.257-4.479-.96-3.76-1.557-6.181-5.378-6.37-5.628-.183-.25-1.527-2.033-1.527-3.878 0-1.845.964-2.748 1.307-3.124.343-.376.75-.47.999-.47.25 0 .499.002.717.013.231.012.541-.088.846.645.31.748 1.054 2.593 1.146 2.78.092.187.153.406.031.656-.122.25-.183.406-.36.624-.179.218-.376.487-.538.654-.18.187-.367.39-.158.766.21.376.93 1.535 1.998 2.487 1.373 1.225 2.532 1.605 2.908 1.787.376.18.595.156.815-.094.22-.25.939-1.095 1.19-1.47.25-.376.5-.313.844-.188.343.125 2.18 1.03 2.554 1.218.376.187.625.281.717.438.092.156.092.906-.218 1.78Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="bg-white text-navy-950 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
              Chat with us
              {/* Arrow */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#25D366' }} />
      <div
        className="absolute -inset-1 rounded-full opacity-30"
        style={{
          backgroundColor: '#25D366',
          animation: 'pulse-whatsapp 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      />

      {/* Button */}
      <a
        href="https://wa.me/923224044150"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsAppIcon />
      </a>

      <style jsx global>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
