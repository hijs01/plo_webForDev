// src/components/project_page/ProjectHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function ProjectHeader() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto text-center space-y-6 py-24 px-6"
    >
      <motion.div
        variants={headerVariants}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300"
      >
        <Sparkles className="h-3 w-3" />
        <span>CUCO Projects</span>
      </motion.div>

      <motion.h1
        variants={headerVariants}
        className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
      >
        Our Projects
      </motion.h1>

      <motion.p
        variants={subtitleVariants}
        className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed"
      >
        Building innovative solutions and real-world applications. 
        Explore the projects we're working on and contributing to.
      </motion.p>
    </motion.div>
  );
}

export default ProjectHeader;

