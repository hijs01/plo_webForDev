import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

function TitleSection({ title, subtitle, leftLabel, rightLabel, leftItems = [], rightItems = [] }) {
  // Team A/B 관련 props가 없으면 간단한 버전으로 렌더링
  const hasTeamInfo = leftLabel && rightLabel;

  const listVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }} /* 스크롤 시 자연 등장 */
      className="
        w-full 
        max-w-6xl 
        mx-auto 
        text-center 
        space-y-12 
        py-24
        px-6
      "
    >

      {/* ==== 메인 타이틀 ==== */}
      <motion.h1
        variants={listVariants}
        className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
      >
        {title}
      </motion.h1>

      {/* ==== 서브 타이틀 ==== */}
      <motion.p
        variants={listVariants}
        className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>

      {/* ==== Divider (짧은 선에서 길어지는 애니메이션) ==== */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-[2px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent mx-auto max-w-2xl"
      />

      {/* ==== Team A | Team B row (조건부 렌더링) ==== */}
      {hasTeamInfo && (
        <>
          <motion.div
            variants={containerVariants}
            className="flex items-center justify-center gap-10 mt-10"
          >
            <motion.span
              variants={listVariants}
              className="text-neutral-300 font-semibold text-2xl"
            >
              {leftLabel}
            </motion.span>

            {/* Separator 애니메이션 (width 0 → 40px) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 850, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-neutral-700"
            />

            <motion.span
              variants={listVariants}
              className="text-neutral-300 font-semibold text-2xl"
            >
              {rightLabel}
            </motion.span>
          </motion.div>

          {/* ==== Team A / Team B – summary lists ==== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            {/* LEFT TEAM LIST */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {leftItems.map((item, idx) => (
                <motion.p
                  key={idx}
                  variants={listVariants}
                  className="text-neutral-400 text-lg leading-relaxed"
                >
                  • {item}
                </motion.p>
              ))}
            </motion.div>

            {/* RIGHT TEAM LIST */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {rightItems.map((item, idx) => (
                <motion.p
                  key={idx}
                  variants={listVariants}
                  className="text-neutral-400 text-lg leading-relaxed"
                >
                  • {item}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default TitleSection;