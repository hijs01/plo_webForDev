import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { projects } from "@/pages/data/totalData";
import { allTeamMembers } from "@/pages/developers_page/dev_info/DevInfo";

// Import images
import woojoImg from "@/assets/woojo.jpg";
import taehyunImg from "@/assets/taehyun.jpg";
import jeongsooImg from "@/assets/jeongsoo lee.jpg";
import jisungImg from "@/assets/jisung.jpg";
import jungminImg from "@/assets/jungmin.jpg";
import kiseongImg from "@/assets/kiseong.jpg";
import hoojinImg from "@/assets/hoojin.jpg";
import sungilImg from "@/assets/sungil.jpg";

// Avatar map for member images
const avatarMap = {
  "Woojoo Song": woojoImg,
  "Taehyun Kim": taehyunImg,
  "Kiseong Kim": kiseongImg,
  "Jeongsoo Lee": jeongsooImg,
  "Jisung Park": jisungImg,
  "Jungmin Sul": jungminImg,
  "Hoojin Yoon": hoojinImg,
  "Sungil Yun": sungilImg,
};

function ProjectsAndMembers() {
    const navigate = useNavigate();

    return (
      <section className="mt-24 space-y-10 min-h-[70vh] py-10">
        {/* 제목 */}
        <h2 className="text-3xl font-semibold text-white text-center">
          Featured Projects & Core Members
        </h2>
  
        <p className="text-neutral-400 text-center">
          Want to see our team and projects at a glance? ↓
        </p>
  
        {/* 1열 전체 레이아웃 */}
        <div className="space-y-16 mt-10">
  
          {/* ---------------- Featured Projects ---------------- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Featured Projects</h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900/90 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-base">{project.name}</CardTitle>
                    <CardDescription className="text-xs text-neutral-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
  
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-neutral-700 text-[11px] text-neutral-200"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
  
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-neutral-700 text-neutral-200"
                      onClick={() => navigate("/projects")}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
  
          {/* ---------------- Core Members (아래로 이동!) ---------------- */}
          <div className="space-y-6 pt-10 border-t border-neutral-800">
            <h3 className="text-2xl font-semibold text-white">Core Members</h3>
  
            <div className="grid gap-6 md:grid-cols-3">
              {allTeamMembers.map((member) => {
                // Generate initials from name
                const initials = member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <Card
                    key={member.name}
                    className="border-neutral-800 bg-neutral-900/60"
                  >
                    <CardContent className="flex items-center gap-3 pt-6 pb-4">
                      <Avatar className="h-12 w-12 overflow-hidden">
                        {avatarMap[member.name] && (
                          <AvatarImage src={avatarMap[member.name]} alt={member.name} className="object-cover w-full h-full" />
                        )}
                        <AvatarFallback className="bg-neutral-700 text-white text-xs">
                          {initials}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-xs text-neutral-400">{member.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
  
        </div>
      </section>
    );
  }
export default ProjectsAndMembers;