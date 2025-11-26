import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// 파일 상단에 이미지 import
import woojoImg from "@/assets/woojo.jpg";
import taehyunImg from "@/assets/taehyun.jpg";
import jeongsooImg from "@/assets/jeongsoo lee.jpg";
import jisungImg from "@/assets/jisung.jpg";
import jungminImg from "@/assets/jungmin.jpg";
import kiseongImg from "@/assets/kiseong.jpg";


function DevCard({ dev, index }) {
  const [ref, isVisible] = useScrollReveal();

  const techTags =
    dev.TechStack?.split(",").map((t) => t.trim()).filter(Boolean) || [];

  const avatarMap = {
    "송우주": woojoImg,
    "김태현": taehyunImg,
    "김기성": kiseongImg,
    "이정수": jeongsooImg,
    "박지성": jisungImg,
    "설정민": jungminImg,
  };


  const initials = dev.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
    >
      <Card className="
        group relative
        flex flex-col
        h-full
        rounded-3xl
        border border-neutral-800/50
        bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-950/80
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-500
        hover:border-blue-500/30
        hover:shadow-2xl hover:shadow-blue-500/10
        hover:-translate-y-2
        hover:scale-[1.02]
      ">
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        {/* 상단 글로우 효과 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="flex flex-col items-center gap-4 pt-6 pb-4 relative z-10">
          <div className="relative">
            {/* 아바타 그라데이션 링 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <Avatar className="h-24 w-24 border-2 border-neutral-700/50 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg shadow-neutral-900/50 group-hover:shadow-blue-500/20">
              {avatarMap[dev.name] && (
                <AvatarImage src={avatarMap[dev.name]} alt={dev.name} />
              )}
              <AvatarFallback className="bg-neutral-800 text-neutral-200 text-lg font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-100 transition-colors duration-300">
              {dev.name}
            </h3>
            <p className="text-xs text-neutral-400 font-medium group-hover:text-neutral-300 transition-colors duration-300">
              {dev.role}
            </p>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 px-5 pb-4 flex-1 relative z-10">
          <div className="relative">
            <p className="text-center text-xs text-neutral-400 leading-relaxed font-medium">
              <span className="text-neutral-500">Tech Stack:</span>{" "}
              <span className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                {techTags.join(", ")}
              </span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 pt-2 pb-5 px-5 items-start relative z-10">
          <Button
            variant="ghost"
            size="lg"
            className="
              w-auto
              text-sm
              text-blue-400
              hover:text-blue-300
              hover:bg-blue-500/20
              hover:border-blue-500/30
              border border-transparent
              rounded-lg
              transition-all duration-300
              gap-2
              group/btn
            "
            asChild
          >
            <a href={dev.linkedinUrl || "#"} target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="
              w-auto
              text-sm
              text-neutral-400
              hover:text-neutral-200
              hover:bg-neutral-800/60
              hover:border-neutral-700/50
              border border-transparent
              rounded-lg
              transition-all duration-300
              gap-2
              group/btn
            "
            asChild
          >
            <a href={dev.githubUrl || "#"} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
              GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default DevCard;