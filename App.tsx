import React, { useState } from 'react';
import IntroOverlay from './components/IntroOverlay';
import FlowerBouquet from './components/FlowerBouquet';
import Envelope from './components/Envelope';
import LetterModal from './components/LetterModal';
import FinalButton from './components/FinalButton';
import FloatingHearts from './components/FloatingHearts';
import { AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const MY_PHOTO_URL = "https://raw.githubusercontent.com/lecrisem-wq/Foto-Caca/main/Photo%20on%2016-01-26%20at%2017.39.jpeg"; 

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isFlowerFullScreen, setIsFlowerFullScreen] = useState(true);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [hasReadLetter, setHasReadLetter] = useState(false);

  const handleOpenApp = () => {
    setShowIntro(false);
  };

  const handleShrinkFlower = () => {
    setIsFlowerFullScreen(false);
  };

  const handleExpandFlower = () => {
    setIsFlowerFullScreen(true);
  };

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
    setHasReadLetter(true);
  };

  const handleCloseLetter = () => {
    setIsLetterOpen(false);
  };

  // Fungsi untuk mereset aplikasi ke halaman awal
  const handleReset = () => {
    setShowIntro(true);
    setIsFlowerFullScreen(true);
    setIsLetterOpen(false);
    setHasReadLetter(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden font-sans selection:bg-rose-200">
      
      {/* Tombol Reset - Pojok Kiri Atas (Hanya muncul setelah Intro) */}
      {!showIntro && (
        <button
          onClick={handleReset}
          className="fixed top-5 left-5 md:top-6 md:left-6 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-rose-400 hover:text-rose-600 hover:bg-white transition-all duration-300 hover:rotate-[-180deg] active:scale-90"
          aria-label="Ulangi dari awal"
          title="Ulangi dari awal"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      )}

      {/* Background Ambience */}
      <FloatingHearts />

      {/* Intro Screen */}
      <IntroOverlay isVisible={showIntro} onOpen={handleOpenApp} />

      {/* Main Content */}
      <main className={`flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        
        <div className="z-10 flex flex-col items-center w-full max-w-md px-4">
          {/* Flower Illustration (Handles its own Fullscreen -> Small transition) */}
          <FlowerBouquet 
            isFullScreen={isFlowerFullScreen} 
            onMinimize={handleShrinkFlower}
            onExpand={handleExpandFlower}
          />
          
          {/* Interactive Envelope - Only appears after flower shrinks */}
          <AnimatePresence>
            {!isFlowerFullScreen && (
               <Envelope onClick={handleOpenLetter} />
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* Modal - The Letter */}
      <LetterModal 
        isOpen={isLetterOpen} 
        onClose={handleCloseLetter} 
        photoUrl={MY_PHOTO_URL}
      />

      {/* Final Button (Timelapse Link) */}
      <FinalButton isVisible={hasReadLetter && !isLetterOpen} />

    </div>
  );
};

export default App;