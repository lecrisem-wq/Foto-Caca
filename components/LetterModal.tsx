import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  // USER: You can update the photo URL here or in App.tsx
  photoUrl: string;
}

const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose, photoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 p-2 bg-gray-100/80 backdrop-blur-sm rounded-full hover:bg-gray-200 transition-colors z-20"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto flex-1">
              {/* Photo Section - Responsive Height: h-48 on mobile, h-64 on desktop */}
              <div className="w-full h-48 md:h-64 bg-gray-100 relative shrink-0">
                <img 
                  src={photoUrl}
                  alt="Us" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h2 className="text-white font-handwriting text-3xl p-4 md:p-6 drop-shadow-md">Dear Caca,</h2>
                </div>
              </div>

              {/* Message Section */}
              <div className="p-6 md:p-8 space-y-4 bg-white">
                <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
                  Hai sayang,
                </p>
                <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
                  Happy Valentine Days, aku buat kado ini spesial buat kamu.
                  Terimakasih udah jadi My Valentines yang baik dua kali selama tahun ini geulis.
                  Terus temenin aku meski banyak naik-turunnya ya sama aku, wkwkkw.
                </p>
                <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
                  Semoga kamu suka ya sama kado kecil ini. Tetap jadi caca yang lucu dan penyayang yaa.
                  I love you more than words can say.
                </p>
                <p className="font-handwriting text-2xl text-rose-500 text-right mt-6 md:mt-8">
                  - Azka
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetterModal;