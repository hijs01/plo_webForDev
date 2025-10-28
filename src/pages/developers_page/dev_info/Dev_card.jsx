import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function DevCard({ dev, index }) {
  const isEven = index % 2 === 0;

  const rowDir   = isEven ? "sm:flex-row" : "sm:flex-row-reverse";
  const shift    = isEven ? "sm:-translate-x-8" : "sm:translate-x-8"; // ✅ 오타 수정
  const textDir  = isEven ? "sm:text-left" : "sm:text-right";
  const alignBox = isEven ? "sm:items-start" : "sm:items-end";

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-8 p-8
                  bg-neutral-800 transition-all duration-500 w-[90vw] max-w-5xl mx-auto
                  ${rowDir} ${shift}`}
    >
      {/* 프로필 */}
      <div className="w-28 h-28 rounded-full bg-neutral-600 flex-shrink-0" />

      {/* 텍스트/버튼 블록 */}
      <div className={`flex-1 flex flex-col items-center ${alignBox} text-center ${textDir}`}>
        <h2 className="text-2xl font-semibold text-white">{dev.name}</h2>
        <Separator className="my-2 bg-neutral-600 w-full" />
        <p className="text-neutral-400">{dev.role}</p>
        <p className="text-neutral-300 mt-2">
          <span className="font-medium text-neutral-200">Tech Stack:</span> {dev.TechStack}
        </p>
        <Button variant="outline" className="mt-3 text-blue-400 hover:text-blue-300">
          LinkedIn Profile


        </Button>
      </div>
    </div>
  );
}

export default DevCard;