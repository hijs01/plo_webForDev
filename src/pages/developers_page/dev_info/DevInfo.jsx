import React from "react";
import { Separator } from "@/components/ui/separator";
import DevCard from "./Dev_card";

const DevInfo = () => {
  const developers = [
    { name: "송우주", role: "President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "김태현", role: "Vice President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "김기성", role: "Developer Team Lead", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "이정수", role: "Team A Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "박지성", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
  ];

  const developersInfo = developers.map((dev, index) => (
  <DevCard key={dev.name} dev={dev} index={index} />
  ));

  return (
    <main className="pt-24">
      <div className="flex flex-col gap-10 mt-12 mb-12">
      {developersInfo}
    </div>
    <div className="max-w-7xl mx-auto px-8 border border-red">
        <h1 className="text-white text-center">
            더 많은 개발자들이 곧 합류할 예정입니다!
        </h1>
        <Separator 
        className="my-4 bg-neutral-700"
        orientation="horizontal" 
        />

    </div>
    </main>
    

    
  );
};

export default DevInfo;