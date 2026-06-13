import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export function StepTracker({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, title: 'หัวข้อ', subtitle: 'TOPIC' },
    { num: 2, title: 'รูปแบบ', subtitle: 'SPREAD' },
    { num: 3, title: 'จั่วไพ่', subtitle: 'DRAW' },
    { num: 4, title: 'เปิดไพ่', subtitle: 'REVEAL' },
    { num: 5, title: 'คำทำนาย', subtitle: 'READING' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto relative pt-4">
      <div className="flex items-center justify-between sm:justify-center sm:space-x-12 relative z-10 px-4">
        {steps.map((step, index) => {
          const isPast = step.num < currentStep;
          const isCurrent = step.num === currentStep;
          const isFuture = step.num > currentStep;

          return (
            <React.Fragment key={step.num}>
              <div className="flex flex-col items-center relative w-16">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#0a0e17] z-10 transition-all duration-500
                  ${isPast ? 'text-gold-400 border border-gold-500/50 hover:bg-gold-500/10' : ''}
                  ${isCurrent ? 'border-[1.5px] border-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.4)]' : ''}
                  ${isFuture ? 'border border-gray-800 text-gray-700 bg-[#10141f]/50' : ''}
                `}>
                  {isPast ? <Check size={18} strokeWidth={2.5} /> :
                   isCurrent ? <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gold-400 rounded-full shadow-[0_0_8px_#e6c255]" /> :
                   <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-800 rounded-full" />}
                </div>

                <div className="absolute top-14 sm:top-16 flex flex-col items-center w-24 text-center">
                  <span className={`text-[11px] sm:text-xs font-medium tracking-wide mb-1 transition-colors duration-500 ${isCurrent || isPast ? 'text-gold-400' : 'text-gray-600'}`}>{step.title}</span>
                  <span className={`text-[8px] sm:text-[9px] tracking-[0.2em] uppercase transition-colors duration-500 ${isCurrent || isPast ? 'text-gold-500/60' : 'text-gray-700'}`}>{step.subtitle}</span>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex-1 sm:w-16 h-[1px] relative -mt-8 sm:-mt-10 mx-1 sm:mx-2">
                  <div className="absolute inset-0 bg-gray-800" />
                  <div className={`absolute inset-0 bg-gold-500/60 transition-all duration-700 origin-left ${step.num < currentStep ? 'scale-x-100' : 'scale-x-0'}`} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
