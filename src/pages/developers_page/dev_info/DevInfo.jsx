import React from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DevCard from "./Dev_card";
import TitleSection from "@/components/developer_page/TitleSection";


const teamA_summary = [
  "TAGO, TAXI Sharing App 구현 및 개발",
  "AID Certification Platform 구현 및 개발",
  "PLO DEV Website 구현 및 개발",
];

const teamB_summary = [
  "LIONS MARKET 구현 및 개발",
];


const DevInfo = () => {
  const teamA = [
    { name: "송우주", role: "President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/woojoo-song-12513935b/", githubUrl: "https://github.com/woojo-song", avatarUrl: "woojo.jpg" },
    { name: "김태현", role: "Vice President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/tae-hyun-kim-06b1b5312/", githubUrl: "https://github.com/taehyun-kim", avatarUrl: "taehyun.jpg" },
    { name: "김기성", role: "Developer Team Lead", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/kiseong-kim-7b321b354/", githubUrl: "https://github.com/giseong-kim" ,avatarUrl: "kiseong.jpg"},
    { name: "이정수", role: "Team A Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jeongsoo-lee-a85a12171/?locale=en_US", githubUrl: "https://github.com/jeongsoo-lee" ,avatarUrl: "jeongsoo.jpg"},
    { name: "박지성", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jisung-park-ba2245327/", githubUrl: "https://github.com/jisung-park" ,avatarUrl: "jisung.jpg"},
    { name: "설정민", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jungmin-sul-0b3345349/", githubUrl: "https://github.com/sulmin-jeong" ,avatarUrl: "sulmin.jpg"},
  ];

  const teamB = [
    { name: "이정수", role: "Team B Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jeongsoo-lee-a85a12171/?locale=en_US", githubUrl: "https://github.com/jeongsoo-lee", avatarUrl: "jeongsoo.jpg"},
    { name: "송우주", role: "Team B Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/woojoo-song-12513935b/", githubUrl: "https://github.com/jisung-park", avatarUrl: "woojo.jpg"},
  ];

  return (
    <main className="pt-24 pb-24 px-4 text-white">
      {/* ===== 제목 ===== */}
      <div>

        <TitleSection
          title="Meet the PLO Devs"
          subtitle="팀 별로 열정적인 개발자들을 만나보세요."
          leftLabel="Team A"
          rightLabel="Team B"
          leftItems={teamA_summary}
          rightItems={teamB_summary}
        />

      </div>

      {/* ===== Tabs 영역 ===== */}
      <Tabs defaultValue="teamA" className="w-full">

        <div className="flex justify-center mb-10 px-4 w-full">
          <TabsList
            className="
              flex
              w-full
              max-w-4xl    
              mx-auto
              justify-between
              bg-neutral-900 
              border border-neutral-800 
              rounded-full 
              p-5
              gap-4
            "
          >
            <TabsTrigger
              value="teamA"
              className="
                flex-1
                text-center
                py-3 
                px-4 
                text-sm font-semibold
                rounded-full
                text-neutral-200
                hover:bg-neutral-700/40
                transition-all

              "
            >
              Team A
            </TabsTrigger>

            <TabsTrigger
              value="teamB"
              className="
                flex-1
                text-center
                py-3 
                px-4 
                text-sm font-semibold
                rounded-full
                text-neutral-200
                hover:bg-neutral-700/40
                transition-all
              "
            >
              Team B
            </TabsTrigger>
          </TabsList>
        </div>

        {/* ===== Team A ===== */}
        <TabsContent value="teamA">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-8">
            {teamA.map((dev, index) => (
              <DevCard key={dev.name} dev={dev} index={index} />
            ))}
          </div>
        </TabsContent>

        {/* ===== Team B ===== */}
        <TabsContent value="teamB">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-8">
            {teamB.map((dev, index) => (
              <DevCard key={dev.name} dev={dev} index={index} />
            ))}
          </div>
        </TabsContent>

      </Tabs>

    </main>
  );
};

export default DevInfo;