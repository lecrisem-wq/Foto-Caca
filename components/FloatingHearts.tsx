import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  // Generate more random hearts (increased to 50)
  const hearts = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    // Random duration between 8s and 20s for varied speed
    animationDuration: `${Math.random() * 12 + 8}s`, 
    // Random delay up to 15s to ensure continuous flow
    delay: `${Math.random() * 15}s`,
    // Random size between 10px and 40px
    size: Math.random() * 30 + 10,
    // Random sway magnitude
    sway: Math.random() * 50 - 25,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/50" // Soft pink with transparency
          style={{
            left: heart.left,
            fontSize: heart.size,
            bottom: -50,
          }}
          animate={{
            y: [0, -1200], // Move way up
            opacity: [0, 0.8, 0], // Fade in then out
            x: [0, heart.sway, 0], // Sway left/right
            rotate: [0, 45, -45, 0], // Gentle rotation while flying
          }}
          transition={{
            duration: parseFloat(heart.animationDuration),
            repeat: Infinity,
            delay: parseFloat(heart.delay),
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;