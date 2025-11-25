import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

function DevCard({ dev, index }) {
  const isEven = index % 2 === 0;

  const rowDir   = isEven ? "sm:flex-row" : "sm:flex-row-reverse";
  const textDir  = isEven ? "sm:text-left" : "sm:text-right";
  const alignBox = isEven ? "sm:items-start" : "sm:items-end";
  const translate = isEven ? "sm:-translate-x-6" : "sm:translate-x-6";
  const alignSelf = isEven ? "md:ml-[4vw] md:self-start" : "md:mr-[4vw] md:self-end";

  // ✅ 여기 추가해야 함
  const [ref, isVisible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className={`
        flex flex-col sm:flex-row items-center justify-between gap-10
        p-10 rounded-2xl shadow-xl
        bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 
        transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(100,100,255,0.25)]
        w-full max-w-3xl md:max-w-4xl
        ${rowDir} ${translate} ${alignSelf}
      `}
    >
      {/* 프로필 사진 */}
      <div
        className="
          w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 
          p-[3px] shadow-lg flex-shrink-0
        "
      >
        <div className="w-full h-full rounded-full bg-neutral-800"></div>
      </div>

      {/* 텍스트 섹션 */}
      <div className={`flex-1 flex flex-col gap-2 items-center ${alignBox} ${textDir}`}>
        <h2 className="text-3xl font-bold text-white tracking-tight">{dev.name}</h2>
        <Separator className="my-2 bg-neutral-700 w-full" />
        
        <p className="text-neutral-400 text-lg">{dev.role}</p>

        <p className="text-neutral-300 mt-1">
          <span className="font-semibold text-white">Tech Stack:</span> {dev.TechStack}
        </p>

        <Button
          variant="outline"
          className="mt-4 text-blue-400 border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all"
        >
          LinkedIn Profile
        </Button>
      </div>
    </motion.div>
  );
}

export default DevCard;