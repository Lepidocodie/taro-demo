import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function ReadingResult() {
  const cards = [
    {
      role: 'ปัญหา',
      roleEn: 'PROBLEM',
      name: 'THE HIEROPHANT',
      reversed: true,
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg'
    },
    {
      role: 'สาเหตุ',
      roleEn: 'CAUSE',
      name: 'QUEEN OF PENTACLES',
      reversed: false,
      image: 'https://upload.wikimedia.org/wikipedia/en/8/88/Pents13.jpg'
    },
    {
      role: 'คำแนะนำ',
      roleEn: 'ADVICE',
      name: 'THE HANGED MAN',
      reversed: true,
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg'
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col items-center pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 mt-8"
      >
        <h3 className="text-gold-500 text-[10px] tracking-[0.25em] font-medium mb-3">YOUR SPREAD</h3>
        <h1 className="font-serif text-3xl md:text-5xl text-gray-100 mb-4 font-medium leading-tight">ชะตากรรมที่รอคอย</h1>
        <p className="text-gray-500 text-sm tracking-wide font-light">ไพ่ทุกใบถูกเปิดแล้ว กำลังตีความ...</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl mb-24 px-4 overflow-visible">
        {cards.map((card, i) => (
          <motion.div
             key={i}
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: i * 0.4, type: "spring", bounce: 0.3 }}
             className="flex flex-col items-center"
          >
            <div className="text-center mb-6">
              <h4 className="text-gold-400 text-sm font-medium tracking-wide mb-1">{card.role}</h4>
              <p className="text-gray-600 text-[9px] tracking-[0.2em] uppercase">{card.roleEn}</p>
            </div>

            <div className="relative rounded-lg border border-gold-500/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] mb-6 p-2 bg-[#141b2d]/70 w-[200px] h-[340px] flex items-center justify-center" style={{ perspective: "1000px" }}>
              <motion.div
                initial={{ rotateY: -180 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.4, type: "spring", bounce: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full h-full rounded border border-gray-700/50 bg-[#0a0e17] shadow-inner"
              >
                 <div className="absolute inset-0 bg-[#0a0e17] flex items-center justify-center rounded border border-gold-500/20" style={{ transform: "rotateY(-180deg)", backfaceVisibility: "hidden" }}>
                    <div className="w-[calc(100%-16px)] h-[calc(100%-16px)] border border-gold-500/10 rounded border-dashed flex items-center justify-center">
                       <Star className="text-gold-500/20" size={32} />
                    </div>
                 </div>
                 <div className="absolute inset-0 overflow-hidden rounded" style={{ backfaceVisibility: "hidden" }}>
                    <img
                      src={card.image}
                      alt={card.name}
                      className={`w-full h-full object-cover rounded opacity-100 ${card.reversed ? 'rotate-180' : ''}`}
                    />
                 </div>
              </motion.div>
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 + i * 0.4 }}
               className="text-center w-full"
            >
              <h3 className="font-serif text-lg tracking-widest text-gray-200 uppercase">{card.name}</h3>
              {card.reversed && (
                <p className="text-red-400/80 text-[10px] tracking-[0.15em] mt-1.5 font-medium uppercase">กลับหัว (REVERSED)</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Reading Section */}
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 2.2, duration: 0.8 }}
         className="w-full max-w-4xl px-4 mt-8"
      >
         <div className="flex items-center space-x-4 mb-8 pl-4 border-l-2 border-gold-500/50">
           <div className="w-10 h-10 rounded-full border border-gold-500/30 bg-[#141b2d] flex items-center justify-center text-gold-400">
              <Sparkles size={18} strokeWidth={1.5} />
           </div>
           <div>
              <h3 className="text-gold-500/70 text-[9px] tracking-[0.2em] uppercase mb-0.5 font-medium">YOUR READING</h3>
              <h2 className="text-2xl font-serif font-medium text-gray-100 tracking-wide">คำทำนาย</h2>
           </div>
         </div>

         <div className="w-full rounded-3xl border border-gray-700/50 bg-[#10141f]/60 backdrop-blur-md p-12 flex flex-col items-center justify-center min-h-[300px] shadow-lg">
           <div className="w-12 h-12 rounded-full border-t-[3px] border-r-[3px] border-gold-400/20 border-t-gold-400 animate-spin mb-8"></div>
           <p className="text-gray-400 tracking-wide font-light">กำลังตีความไพ่ของคุณ...</p>
         </div>
      </motion.div>
    </div>
  );
}
