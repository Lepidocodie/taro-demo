import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { StepTracker } from './components/StepTracker';
import { TopicSelection } from './components/TopicSelection';
import { SpreadSelection } from './components/SpreadSelection';
import { DrawCards } from './components/DrawCards';
import { ReadingResult } from './components/ReadingResult';

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white relative flex flex-col font-sans selection:bg-gold-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#141b2d]/50 via-[#0a0e17] to-[#0a0e17] z-0"></div>
      
      {/* subtle stars container */}
      <div className="absolute inset-0 opacity-40 z-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(1px 1px at 10% 20%, white 100%, transparent), radial-gradient(1.5px 1.5px at 30% 15%, #f8e596 100%, transparent), radial-gradient(2px 2px at 50% 10%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(1.5px 1.5px at 85% 15%, #e6c255 100%, transparent), radial-gradient(2px 2px at 15% 60%, rgba(255,255,255,0.6) 100%, transparent), radial-gradient(1.5px 1.5px at 40% 70%, #d4af37 100%, transparent), radial-gradient(1.5px 1.5px at 60% 85%, rgba(255,255,255,0.9) 100%, transparent)',
        backgroundSize: '300px 300px'
      }}></div>

      <div className="relative z-10 w-full mx-auto flex flex-col min-h-screen">
        <header className="px-6 py-4 border-b border-gray-800/60 bg-[#0a0e17]/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
           <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setStep(1)}>
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 font-serif text-xl bg-[#10141f]">
                  T
                </div>
                <div>
                  <h1 className="font-serif text-lg text-gold-400 font-medium tracking-[0.15em] uppercase leading-[1.2]">Tarotism</h1>
                  <p className="text-[8px] text-gray-500 tracking-[0.25em] uppercase mt-0.5">AI Tarot Reading</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-10 text-sm tracking-[0.1em] text-[#a3a8b8]">
                <button className="px-5 py-2 rounded-full border border-gray-700/50 bg-gray-800/30 text-gold-400 font-medium cursor-pointer transition-colors">Home</button>
                <button className="hover:text-gold-400 transition-colors cursor-pointer">History</button>
                <button className="hover:text-gold-400 transition-colors cursor-pointer">About</button>
              </div>

              <button
                onClick={() => setStep(1)}
               className="px-6 py-2.5 rounded-full border border-gold-500/40 bg-transparent text-xs tracking-widest text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/70 transition-all font-medium"
              >
                NEW READING
              </button>
           </div>
        </header>

        <main className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-4 mt-8 md:mt-12 mb-20 overflow-x-hidden">
           <StepTracker currentStep={step} />
           <div className="mt-16 sm:mt-24 w-full flex-1 flex flex-col">
              {step === 1 && <TopicSelection onSelect={() => setStep(2)} />}
              {step === 2 && <SpreadSelection onSelect={() => setStep(3)} />}
              {step === 3 && <DrawCards onComplete={() => setStep(4)} />}
              {(step === 4 || step === 5) && <ReadingResult />}
           </div>
        </main>
      </div>
    </div>
  );
}
