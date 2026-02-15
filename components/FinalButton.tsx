import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface FinalButtonProps {
  isVisible: boolean;
}

const FinalButton: React.FC<FinalButtonProps> = ({ isVisible }) => {
  const VIDEO_URL = "https://youtu.be/sQ0MukXML7U?si=EVSTZnxgAUJE_Mvs"; 

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none"
    >
      <a
        href={VIDEO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-md border border-pink-200 rounded-full shadow-lg text-rose-600 font-sans text-sm hover:bg-rose-50 hover:shadow-pink-200 transition-all duration-300 group"
      >
        <span>Untuk Caca</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

export default FinalButton;