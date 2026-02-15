import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface IntroOverlayProps {
  isVisible: boolean;
  onOpen: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ isVisible, onOpen }) => {
  const [refusalCount, setRefusalCount] = useState(0);

  const handleRefuse = () => {
    setRefusalCount((prev) => prev + 1);
  };

  const getYesScale = () => {
    return 1 + refusalCount * 0.4; // Increases size by 40% each click
  };

  const getNoScale = () => {
    return Math.max(0, 1 - refusalCount * 0.2); // Decreases size until 0
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pink-50/95 backdrop-blur-sm overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-pink-100 max-w-sm w-full mx-4 flex flex-col items-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Heart className="w-16 h-16 text-pink-400 fill-pink-100 animate-heartbeat" />
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            
            <h1 className="font-handwriting text-3xl text-gray-800 mb-4">
              Ada surat cinta spesial buat kamu..
            </h1>
            <p className="font-sans text-gray-600 mb-8">
              Buka yuk?
            </p>

            <div className="flex flex-row items-center justify-center gap-4 w-full h-20">
                <motion.button
                  onClick={onOpen}
                  animate={{ scale: getYesScale() }}
                  whileHover={{ scale: getYesScale() + 0.1 }}
                  whileTap={{ scale: getYesScale() - 0.1 }}
                  className="z-20 px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-sans font-semibold rounded-full shadow-lg hover:shadow-pink-300/50 transition-shadow duration-300 focus:outline-none whitespace-nowrap"
                >
                  YUK
                </motion.button>
                
                {getNoScale() > 0 && (
                    <motion.button
                        onClick={handleRefuse}
                        animate={{ scale: getNoScale(), opacity: getNoScale() }}
                        whileHover={{ scale: getNoScale() * 1.1 }}
                        className="px-6 py-2 bg-gray-100 border border-gray-200 text-gray-500 font-sans text-sm rounded-full hover:bg-gray-200 transition-colors focus:outline-none whitespace-nowrap"
                    >
                        gamau.
                    </motion.button>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;