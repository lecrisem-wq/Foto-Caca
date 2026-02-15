import React from 'react';
import { motion } from 'framer-motion';

interface FlowerBouquetProps {
  isFullScreen: boolean;
  onMinimize: () => void;
  onExpand: () => void;
}

const FlowerBouquet: React.FC<FlowerBouquetProps> = ({ isFullScreen, onMinimize, onExpand }) => {
  return (
    <>
      {/* Backdrop for fullscreen mode to focus attention */}
      {isFullScreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-pink-50/95 z-30 backdrop-blur-md"
        />
      )}

      {/* Main Container handles position switching (Fixed vs Relative) */}
      <motion.div
        layout
        onClick={isFullScreen ? onMinimize : onExpand}
        className={`
          flex flex-col items-center justify-center transition-all duration-700 ease-in-out cursor-pointer group
          ${isFullScreen 
            ? 'fixed inset-0 z-40' 
            : 'relative z-10 mt-2 mb-6'
          }
        `}
      >
        {/* The Flower Emoji */}
        <motion.div
          layout
          className={`
            select-none transition-all duration-700 leading-none
            ${isFullScreen ? 'text-[6rem] sm:text-[8rem] md:text-[12rem] filter drop-shadow-2xl' : 'text-7xl md:text-8xl filter drop-shadow-lg'}
          `}
          /* Animation Logic:
             Fullscreen: Floating gently.
             Minimized: Static by default, but scales/rotates on Hover/Tap like the Envelope.
          */
          animate={isFullScreen ? { 
            scale: [1, 1.1, 1], 
            rotate: [0, 5, -5, 0] 
          } : { 
            scale: 1, 
            rotate: 0 
          }}
          whileHover={!isFullScreen ? { scale: 1.15, rotate: 5, filter: "drop-shadow(0px 10px 15px rgba(244, 63, 94, 0.3))" } : {}}
          whileTap={!isFullScreen ? { scale: 0.9 } : {}}
          transition={isFullScreen ? { 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          } : { duration: 0.3 }}
        >
          💐
        </motion.div>

        {/* The Text */}
        <motion.p
          layout
          className={`
            font-handwriting text-rose-500 text-center font-bold drop-shadow-sm transition-all duration-700
            ${isFullScreen ? 'text-3xl md:text-5xl mt-6 md:mt-8 px-6' : 'text-xl md:text-2xl mt-4 group-hover:text-rose-600'}
          `}
        >
          bunga thumbelina buat kamu🤍
        </motion.p>

        {/* Hint text only visible in fullscreen */}
        {isFullScreen && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-20 md:bottom-32 text-gray-400 font-sans text-sm animate-bounce bg-white/50 px-4 py-1 rounded-full"
          >
            klik bunganya dut
          </motion.p>
        )}
      </motion.div>
    </>
  );
};

export default FlowerBouquet;