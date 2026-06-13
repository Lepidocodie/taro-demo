import React from 'react';
import { Activity, Clock, HelpCircle, Layers, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

const SingleCardIcon = () => (
  <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-6">
    <rect x="4" y="4" width="56" height="72" rx="4" stroke="#e6c255" strokeWidth="2" fill="rgba(10, 14, 23, 0.6)" />
    <rect x="8" y="8" width="48" height="64" rx="2" stroke="#e6c255" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="32" cy="40" r="12" stroke="#e6c255" strokeWidth="1.5" />
    <path d="M32 20 L32 24 M32 56 L32 60 M20 40 L24 40 M40 40 L44 40 M23.5 23.5 L26 26 M38 54 L40.5 56.5 M23.5 56.5 L26 54 M38 26 L40.5 23.5" stroke="#e6c255" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const ThreeCardsIcon = () => (
  <div className="relative w-32 h-24 flex items-center justify-center">
    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 transform -rotate-12 translate-y-2 opacity-80">
      <rect x="2" y="2" width="44" height="56" rx="2" stroke="#e6c255" strokeWidth="1.5" fill="rgba(10, 14, 23, 0.8)" />
      <path d="M24 20 A8 8 0 0 0 24 40 A10 10 0 0 1 24 20 Z" stroke="#e6c255" strokeWidth="1" fill="#e6c255" fillOpacity="0.2"/>
    </svg>
    <svg width="52" height="68" viewBox="0 0 52 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-10">
      <rect x="2" y="2" width="48" height="64" rx="3" stroke="#e6c255" strokeWidth="2" fill="rgba(10, 14, 23, 0.9)" />
      <circle cx="26" cy="34" r="8" stroke="#e6c255" strokeWidth="1.5" />
      <path d="M26 18 L26 22 M26 46 L26 50 M14 34 L18 34 M34 34 L38 34" stroke="#e6c255" strokeWidth="1" strokeLinecap="round" />
    </svg>
    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 transform rotate-12 translate-y-2 opacity-80">
      <rect x="2" y="2" width="44" height="56" rx="2" stroke="#e6c255" strokeWidth="1.5" fill="rgba(10, 14, 23, 0.8)" />
      <path d="M16 22 L32 38 M32 22 L16 38" stroke="#e6c255" strokeWidth="1" />
      <rect x="18" y="24" width="12" height="12" stroke="#e6c255" strokeWidth="1" />
    </svg>
  </div>
);

export function SpreadSelection({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-center mb-10">
        <h1 className="font-serif text-3xl font-medium tracking-[0.1em] text-gold-300 mb-3">CHOOSE YOUR SPREAD</h1>
        <p className="text-gray-400 text-sm tracking-wide font-light">เลือกรูปแบบการจั่วไพ่ที่เหมาะกับคำถามของคุณ</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16 px-4"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSelect}
          className="group relative rounded-2xl border border-gold-500/30 bg-[#10141f]/80 backdrop-blur-md p-8 flex flex-col items-center cursor-pointer hover:border-gold-400/80 transition-colors duration-500 overflow-hidden shadow-xl"
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gold-500/10 blur-[50px] rounded-full group-hover:bg-gold-500/20 transition-all duration-500"></div>
           <div className="absolute top-4 right-4 text-gold-400/80 bg-gold-900/40 p-1.5 rounded-full border border-gold-500/30 backdrop-blur-sm group-hover:text-gold-300 transition-colors">
             <Star size={14} fill="currentColor" />
           </div>
           <div className="absolute top-1/4 left-8 text-gold-400/50">
             <Sparkles size={16} />
           </div>
           <div className="mb-6 h-32 flex items-center justify-center">
             <SingleCardIcon />
           </div>
           <div className="text-center relative z-10 w-full">
             <div className="flex items-center justify-center space-x-2 text-gold-300 mb-2">
               <div className="w-4 h-4 flex items-center justify-center border border-gold-400/60 rounded-[3px] text-[10px]">
                 <Star size={10} className="opacity-80" />
               </div>
               <h3 className="font-serif text-xl tracking-wider">SINGLE CARD</h3>
             </div>
             <p className="text-gray-400 text-xs tracking-wide mb-6">ไพ่ 1 ใบ สำหรับคำตอบที่ชัดเจน</p>
             <button className="px-6 py-2.5 rounded-full border border-gray-500/40 bg-white/5 text-xs tracking-widest text-gray-300 transition-all group-hover:border-gold-400/60 group-hover:text-gold-300 w-2/3 max-w-[200px]">
               1-CARD CLARITY
             </button>
           </div>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400/80 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <motion.div 
          onClick={onSelect} 
          variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative rounded-2xl border border-gold-500/30 bg-[#10141f]/80 backdrop-blur-md p-8 flex flex-col items-center cursor-pointer hover:border-gold-400/80 transition-all duration-500 overflow-hidden shadow-xl"
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gold-500/10 blur-[50px] rounded-full group-hover:bg-gold-500/20 transition-all duration-500"></div>
           <div className="mb-6 h-32 flex items-center justify-center relative">
             <ThreeCardsIcon />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
               <div className="w-full h-[40px] border border-gold-300/30 rounded-[100%] transform -rotate-12 absolute scale-110"></div>
               <div className="w-full h-[40px] border border-gold-300/20 rounded-[100%] transform -rotate-[30deg] absolute scale-125"></div>
               <div className="w-full h-[40px] border border-gold-300/30 rounded-[100%] transform rotate-12 absolute scale-110"></div>
             </div>
           </div>
           <div className="text-center relative z-10 w-full">
             <div className="flex items-center justify-center space-x-2 text-gold-300 mb-2">
               <div className="w-4 h-4 flex flex-col items-center justify-center text-[10px] space-y-[2px]">
                 <Layers size={14} className="opacity-80 stroke-[1.5]" />
               </div>
               <h3 className="font-serif text-xl tracking-wider">THREE CARDS</h3>
             </div>
             <p className="text-gray-400 text-xs tracking-wide mb-6">ไพ่ 3 ใบ สำหรับการวิเคราะห์เชิงลึก</p>
             <button className="px-6 py-2.5 rounded-full border border-gray-500/40 bg-white/5 text-xs tracking-widest text-gray-300 transition-all group-hover:border-gold-400/60 group-hover:text-gold-300 w-2/3 max-w-[200px]">
               3-CARD STRUCTURE
             </button>
           </div>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400/80 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>
      </motion.div>

      <div className="text-center mb-8 relative w-full max-w-3xl">
         <h2 className="font-serif text-2xl font-medium tracking-[0.1em] text-gold-300 mb-2">CHOOSE READING MODE</h2>
         <p className="text-gray-400 text-sm tracking-wide font-light">เลือกโหมดการอ่าน</p>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-12 px-4"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} onClick={onSelect} className="group relative overflow-hidden rounded-xl border border-gray-600/50 bg-[#10141f]/70 backdrop-blur-md p-4 flex items-center space-x-4 cursor-pointer hover:border-gold-400/50 transition-all duration-300">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-24 h-24 bg-gold-500/10 blur-[30px] rounded-full group-hover:bg-gold-500/20 transition-all shadow-xl"></div>
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-gray-500 group-hover:text-gold-400 transition-colors z-10">
            <Clock size={28} strokeWidth={1.5} />
          </div>
          <div className="flex-1 z-10 text-center pr-12">
            <div className="text-gray-200 text-sm font-medium tracking-wide">อดีต — ปัจจุบัน — อนาคต</div>
            <div className="text-gray-500 text-[9px] uppercase tracking-widest mt-1.5 group-hover:text-gold-500/70 transition-colors">PAST — PRESENT — FUTURE</div>
          </div>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} onClick={onSelect} className="group relative overflow-hidden rounded-xl border border-gray-600/50 bg-[#10141f]/70 backdrop-blur-md p-4 flex items-center space-x-4 cursor-pointer hover:border-gold-400/50 transition-all duration-300 lg:pl-6 shadow-xl">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-24 h-24 bg-gold-500/10 blur-[30px] rounded-full group-hover:bg-gold-500/20 transition-all"></div>
          <div className="flex-shrink-0 w-8 h-12 flex items-center justify-center text-gray-500 group-hover:text-gold-400 transition-colors z-10 relative">
            <HelpCircle size={28} strokeWidth={1.5} />
          </div>
          <div className="flex-1 z-10 text-center pr-4">
            <div className="text-gray-200 text-sm font-medium tracking-wide">ปัญหา — สาเหตุ — คำแนะนำ</div>
            <div className="text-gray-500 text-[9px] uppercase tracking-[0.2em] mt-1.5 group-hover:text-gold-500/70 transition-colors">PROBLEM — CAUSE — ADVICE</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
