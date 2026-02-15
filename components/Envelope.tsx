import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.5 }} 
      className="flex flex-col items-center cursor-pointer group mt-4 w-full"
      onClick={onClick}
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="w-56 h-36 md:w-64 md:h-40 bg-rose-100 rounded-lg shadow-lg border-2 border-rose-200 flex items-center justify-center overflow-hidden relative z-10 transition-colors group-hover:bg-rose-50"
        >
          {/* Envelope Flap Effect */}
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[112px] md:border-l-[128px] border-r-[112px] md:border-r-[128px] border-t-[80px] border-l-transparent border-r-transparent border-t-rose-300 opacity-80"></div>
          
          <Mail className="w-12 h-12 text-rose-400 z-20" />
          
          <span className="absolute bottom-3 text-sm font-sans text-rose-400 font-bold tracking-widest uppercase">
            Buka di sini
          </span>
        </motion.div>
        
        {/* Glow effect behind envelope */}
        <div className="absolute inset-0 bg-pink-300 blur-2xl opacity-40 rounded-full -z-10 group-hover:opacity-60 transition-opacity"></div>
      </div>
      
      <p className="mt-4 font-handwriting text-xl text-gray-500 animate-pulse">
        Untuk caca tercayang..
      </p>
    </motion.div>
  );
};

export default Envelope;