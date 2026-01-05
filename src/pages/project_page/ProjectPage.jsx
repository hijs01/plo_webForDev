import Header from "@/components/layout/Header";
import Footer from "@/components/layout/home/Footer";
import React from "react";
import ProjectHeader from "@/pages/project_page/ProjectHeader";
import ProjectCard from "@/pages/project_page/ProjectCard";
import { projects } from "../data/totalData";

const ProjectPage = () => {
    return(
        <div className="bg-neutral-950 text-neutral-100 min-h-screen">
            <Header />
            
            <main className="pt-20 min-h-screen">
                <div className="max-w-6xl mx-auto px-6 pb-24">
                    <ProjectHeader />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={project.name} 
                                project={project} 
                                index={index}
                            />
                        ))}
                    </div>

                    {/* 추가 프로젝트 섹션 (향후 확장용) */}
                    <div className="mt-24 text-center">
                        <p className="text-neutral-400 text-sm">
                            More projects coming soon...
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ProjectPage;