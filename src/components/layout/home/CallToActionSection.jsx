// src/components/home/CallToActionSection.jsx
import React from "react";
import { Card, CardContent } from "../../ui/card";   // ✅ 경로 수정
import { Button } from "../../ui/button";        
import { ArrowRight, Github } from "lucide-react";

// 위 경로가 애매하면 이렇게 써도 됨:
// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";

function CallToActionSection() {
  return (
    <section className="mt-20">
      <Card className="border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950">
        <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              같이 만들 사람, 항상 모집 중입니다.
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              사이드 프로젝트로 끝나는 게 아니라, 실제 서비스와
              스타트업으로 이어지는 걸 목표로 합니다.
              <br />
              기획, 디자인, 프론트, 백엔드, 뭐든 관심만 있으면 됩니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="gap-2">
              Apply to join
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-200 gap-2"
            >
              <Github className="h-4 w-4" />
              Star our repos
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CallToActionSection;