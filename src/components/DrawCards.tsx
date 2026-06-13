import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function DrawCards({ onComplete }: { onComplete: () => void }) {
  const totalCards = 3;
  const [selected, setSelected] = useState<number[]>([]);
  const deckSize = 36;

  const handleSelect = (index: number) => {
    if (selected.includes(index) || selected.length >= totalCards) return;
    const newSelected = [...selected, index];
    setSelected(newSelected);
    if (newSelected.length === totalCards) {
      setTimeout(() => onComplete(), 1000); 
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center pb-24">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-24 mt-8">
        <h3 className="text-gold-500 text-[10px] tracking-[0.25em] font-medium mb-3">DRAW YOUR CARDS</h3>
        <h1 className="font-serif text-4xl text-gray-100 mb-4 font-medium">เลือกไพ่ของคุณ</h1>
        <p className="text-gray-400 text-sm tracking-wide font-light">โปรดเลือกไพ่จากสำรับให้ครบ {totalCards} ใบ ({selected.length}/{totalCards})</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto"
      >
        {/* Center counter */}
        <motion.div
          key={selected.length}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="w-24 h-24 rounded-full border border-gold-500/20 bg-[#0a0e17]/90 shadow-[0_0_30px_rgba(10,14,23,0.8)] flex flex-col items-center justify-center pointer-events-none">
            <span className="text-gray-400 text-xs mb-1 font-light tracking-wide">คลิกเลือกไพ่</span>
            <span className="text-gold-400 font-bold text-2xl">{selected.length}<span className="text-gold-500/50 text-lg">/{totalCards}</span></span>
          </div>
        </motion.div>

        {/* Cards Ring */}
        {Array.from({ length: deckSize }).map((_, i) => {
          const rotation = i * (360 / deckSize);
          const isSelected = selected.includes(i);
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 w-[52px] h-[76px] sm:w-[60px] sm:h-[88px] -ml-[26px] sm:-ml-[30px] -mt-[38px] sm:-mt-[44px] rounded-sm border border-gold-500/30 bg-gradient-to-br from-[#141b2d] to-[#0a0e17] cursor-pointer transition-all duration-500 origin-center hover:border-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
              ${isSelected ? 'opacity-0 scale-50 z-20 pointer-events-none' : 'opacity-100 z-0'}`}
              style={{
                transform: isSelected
                   ? `translate(0, 0) scale(0)`
                   : `rotate(${rotation}deg) translateY(-140px) sm:translateY(-190px)`,
              }}
              onClick={() => handleSelect(i)}
            >
              <div className="w-full h-full flex flex-col items-center justify-center opacity-20 text-gold-500 border border-gold-500/10 m-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[2px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZDYyODQiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')]">
                 <Sparkles size={12} className="opacity-70" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
