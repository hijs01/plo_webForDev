// src/components/home/ProjectsSection.jsx
import React from "react";
import { Button } from "../../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { projects } from "../../../pages/data/totalData";

function ProjectsSection() {
  return (
    <section className="mt-16 space-y-6 min-h-[80vh] py-10">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="text-sm text-neutral-400">
            Projects that CUCO is currently focusing on.
          </p>
        </div>
        <Button variant="ghost" className="text-sm text-neutral-300">
          View all projects
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="flex flex-col border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900/90 transition-colors
            h-[260px] md:h-[280px] "
          >
            <CardHeader>
              <CardTitle className="text-base">{project.name}</CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-neutral-700 text-[11px] font-normal text-neutral-200"
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
                Open details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;