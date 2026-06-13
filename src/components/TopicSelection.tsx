import React from 'react';
import { Sparkles, Heart, Diamond, Briefcase, Activity, Sliders } from 'lucide-react';
import { motion } from 'motion/react';

export function TopicSelection({ onSelect }: { onSelect: (topic: string) => void }) {
  const topics = [
    { id: 'general', title: 'ภาพรวม', subtitle: 'GENERAL', icon: Sparkles },
    { id: 'love', title: 'ความรัก', subtitle: 'LOVE', icon: Heart },
    { id: 'finance', title: 'การเงิน', subtitle: 'FINANCE', icon: Diamond },
    { id: 'career', title: 'การงาน', subtitle: 'CAREER', icon: Briefcase },
    { id: 'health', title: 'สุขภาพ', subtitle: 'HEALTH', icon: Activity },
    { id: 'yesno', title: 'ใช่หรือไม่', subtitle: 'YES / NO', icon: Sliders },
  ];

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h3 className="text-gold-500 text-[10px] tracking-[0.25em] font-medium mb-4">PRIVATE TAROT READING</h3>
        <h1 className="font-serif text-3xl md:text-5xl text-gray-100 mb-6 font-medium leading-tight">SEEK GUIDANCE FROM<br/>THE AETHER</h1>
        <p className="text-[#a3a8b8] text-sm tracking-wide font-light">เลือกหัวข้อที่คุณต้องการดูดวง แล้วปล่อยให้ไพ่ทาโรต์เผยเส้นทางของคุณ</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4"
      >
        {topics.map(topic => {
          const Icon = topic.icon;
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 15 },
                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } }
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.97 }}
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className="group relative rounded-2xl border border-gray-700/50 bg-[#10141f]/70 backdrop-blur-md p-6 h-[140px] flex flex-col items-start justify-end cursor-pointer hover:border-gold-500/50 hover:bg-[#141b2d] transition-colors duration-300 overflow-hidden shadow-lg"
            >
              <div className="absolute top-5 left-5 w-10 h-10 rounded-full border border-gray-600/50 flex items-center justify-center text-gold-400/60 group-hover:text-gold-400 group-hover:border-gold-500/50 transition-colors">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-gray-100 font-medium text-xl tracking-wide group-hover:text-gold-300 transition-colors">{topic.title}</h3>
                <p className="text-gray-500 text-[9px] tracking-[0.2em] mt-1.5 uppercase font-medium group-hover:text-gold-500/60 transition-colors">{topic.subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  );
}
