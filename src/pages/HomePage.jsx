import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/home/Footer";

import HeroSection from "../components/layout/home/HeroSection";
import ProjectsSection from "../components/layout/home/ProjectsSection";
import TeamSection from "../components/layout/home/TeamSection";
import CallToActionSection from "../components/layout/home/CallToActionSection";
import ProjectsAndMembers from "../components/layout/home/ProjectsAndMembers";

import Reveal from "../components/animation/Reveal"; 
import { Separator } from "@radix-ui/react-menubar";

function HomePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <Header />

      <main className="pt-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <Reveal>
          <HeroSection />
          </Reveal>
          <Reveal>
          {/* <ProjectsSection /> */}
          <ProjectsAndMembers />
          </Reveal>
          {/* <Reveal>
          <TeamSection />
          </Reveal> */}
          <Reveal>
          <CallToActionSection />
          </Reveal>
        </div>
      </main>
      <div>
      <Separator className="h-[2px] bg-neutral-700" />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;