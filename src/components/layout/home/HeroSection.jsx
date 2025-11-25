// src/components/home/HeroSection.jsx
import React from "react";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { Sparkles, Github, ArrowRight, Users } from "lucide-react";
import { stack } from "../../../pages/data/homeData";

function HeroSection() {
  return (
    <section className="flex  min-h-[80vh]   flex-col gap-10 md:flex-row md:items-center md:justify-between mt-10">
      {/* 왼쪽: 소개 텍스트 */}
      <div className="space-y-6 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
          <Sparkles className="h-3 w-3" />
          <span>PLO Devs · Developer Community @ PSU</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              PLO Devs
            </span>
          </h1>
          <p className="text-neutral-400">
            PLO Devs는 개발자들이 모여 사이드 프로젝트를 만들고,
            오픈소스에 기여하고, 서로 성장하는 커뮤니티입니다.
            <br />
            학교 과제도, 실무 감각도, 같이 쌓아봅시다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" className="gap-2">
            Join the team
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-neutral-700 text-neutral-200"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </div>

        <p className="text-md text-neutral-400 font-bold">
          Be ready to <span >야근</span>.{" "}
          <span className="text-neutral-400 font-bold">하지만 혼자 말고, 같이.</span>
        </p>
      </div>

      {/* 오른쪽: Tech / Focus 카드 */}
      <div className="w-full md:w-[320px]">
        <Card className="border-neutral-800 bg-neutral-900/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4" />
              Current Focus
            </CardTitle>
            <CardDescription>
              실사용 가능한 서비스 & 스타트업 레벨 프로젝트
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-neutral-700 text-[11px] font-normal text-neutral-200"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="bg-neutral-800" />

            <div className="space-y-2 text-sm text-neutral-300">
              <p>✅ 실전 프로젝트 중심</p>
              <p>✅ 취업 / 인턴 포트폴리오 빌딩</p>
              <p>✅ 코드 리뷰 & 스터디 문화</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HeroSection;