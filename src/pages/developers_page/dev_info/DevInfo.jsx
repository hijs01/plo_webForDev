import React from "react";
import DevCard from "./Dev_card";
import TitleSection from "@/components/developer_page/TitleSection";


const teamA_summary = [
  "TAGO, TAXI Sharing App implementation and development",
  "AID Certification Platform implementation and development",
  "CUCO Website implementation and development",
];

const teamB_summary = [
  "LIONS MARKET implementation and development",
];

// Export team data for use in other components
export const teamA = [
  { name: "Woojoo Song", role: "President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/woojoo-song-12513935b/", githubUrl: "https://github.com/woojo-song", avatarUrl: "woojo.jpg" },
  { name: "Taehyun Kim", role: "Vice President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/tae-hyun-kim-06b1b5312/", githubUrl: "https://github.com/taehyun-kim", avatarUrl: "taehyun.jpg" },
  { name: "Kiseong Kim", role: "Developer Team Lead", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/kiseong-kim-7b321b354/", githubUrl: "https://github.com/giseong-kim" ,avatarUrl: "kiseong.jpg"},
  { name: "Jeongsoo Lee", role: "Team A Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jeongsoo-lee-a85a12171/?locale=en_US", githubUrl: "https://github.com/jeongsoo-lee" ,avatarUrl: "jeongsoo.jpg"},
  { name: "Jisung Park", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jisung-park-ba2245327/", githubUrl: "https://github.com/jisung-park" ,avatarUrl: "jisung.jpg"},
  { name: "Jungmin Sul", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jungmin-sul-0b3345349/", githubUrl: "https://github.com/sulmin-jeong" ,avatarUrl: "sulmin.jpg"},
  { name: "Hoojin Yoon", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "www.linkedin.com/in/hojin-yoon-a6378b325", githubUrl: "https://github.com/hojinyoon" ,avatarUrl: "hoojin.jpg"},
  { name: "Sungil Yun", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "linkedin.com/in/meseongilyun", githubUrl: "https://github.com/seongilyun", avatarUrl: "sungil.jpg"},
];

export const teamB = [
  { name: "Jeongsoo Lee", role: "Team B Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/jeongsoo-lee-a85a12171/?locale=en_US", githubUrl: "https://github.com/jeongsoo-lee", avatarUrl: "jeongsoo.jpg"},
  { name: "Woojoo Song", role: "Team B Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL", linkedinUrl: "https://www.linkedin.com/in/woojoo-song-12513935b/", githubUrl: "https://github.com/jisung-park", avatarUrl: "woojo.jpg"},
];

// Combine all unique members for homepage display
export const allTeamMembers = [
  ...teamA,
  ...teamB.filter(member => !teamA.some(teamAMember => teamAMember.name === member.name))
];

const DevInfo = () => {
  // 모든 팀 멤버를 하나로 합치기 (중복 제거)
  const allMembers = [
    ...teamA,
    ...teamB.filter(member => !teamA.some(teamAMember => teamAMember.name === member.name))
  ];

  return (
    <main className="pt-24 pb-24 px-4 text-white">
      {/* ===== 제목 ===== */}
      <div>
        <TitleSection
          title="Meet the CUCO"
          subtitle="Meet passionate developers working together to build amazing projects."
        />
      </div>

      {/* ===== 모든 개발자 ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-8 max-w-6xl mx-auto">
        {allMembers.map((dev, index) => (
          <DevCard key={`${dev.name}-${index}`} dev={dev} index={index} />
        ))}
      </div>
    </main>
  );
};

export default DevInfo;