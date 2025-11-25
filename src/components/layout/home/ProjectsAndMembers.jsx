import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { projects, team } from "@/pages/data/homeData";

function ProjectsAndMembers() {
    return (
      <section className="mt-24 space-y-10 min-h-[70vh] py-10">
        {/* 제목 */}
        <h2 className="text-3xl font-semibold text-white text-center">
          Featured Projects & Core Members
        </h2>
  
        <p className="text-neutral-400 text-center">
          우리 팀과 팀이 만드는 프로젝트를 한눈에 보고 싶다면 ↓
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
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="border-neutral-800 bg-neutral-900/60"
                >
                  <CardContent className="flex items-center gap-3 pt-6 pb-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center text-white">
                      {member.initials}
                    </div>
  
                    <div>
                      <p className="text-sm font-medium text-white">{member.name}</p>
                      <p className="text-xs text-neutral-400">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }
export default ProjectsAndMembers;