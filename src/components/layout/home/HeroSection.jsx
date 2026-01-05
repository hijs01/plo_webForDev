// src/components/home/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { Sparkles, Github, ArrowRight, Users } from "lucide-react";
import { stack } from "../../../pages/data/totalData";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex  min-h-[80vh]   flex-col gap-10 md:flex-row md:items-center md:justify-between mt-10">
      {/* 왼쪽: 소개 텍스트 */}
      <div className="space-y-6 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
          <Sparkles className="h-3 w-3" />
          <span>CUCO · Developer Community @ PSU</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              CUCO
            </span>
          </h1>
          <p className="text-neutral-400">
            CUCO is a community where developers come together to build side projects,
            contribute to open source, and grow together.
            <br />
            Let's build both academic projects and real-world experience together.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" className="gap-2" onClick={() => navigate("/signup")}>
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
          Be ready to <span>work late</span>.{" "}
          <span className="text-neutral-400 font-bold">But not alone, together.</span>
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
              Production-ready services & startup-level projects
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
              <p>✅ Real-world project focus</p>
              <p>✅ Job & internship portfolio building</p>
              <p>✅ Code review & study culture</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HeroSection;