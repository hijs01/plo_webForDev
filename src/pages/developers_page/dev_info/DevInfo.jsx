import React from "react";
import { Separator } from "@/components/ui/separator";
import DevCard from "./Dev_card";
import Footer from "@/components/layout/home/Footer";

const DevInfo = () => {
  const developers = [
    { name: "송우주", role: "President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "김태현", role: "Vice President", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "김기성", role: "Developer Team Lead", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "이정수", role: "Team A Leader / Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
    { name: "박지성", role: "Developer", TechStack: "Java, React, JavaScript, CSS, MongoDB, MySQL" },
  ];

  return (
    <>
    <main className="pt-32 px-6">
      {/* 상단 제목 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
          Meet the PLO Devs
        </h1>
        <Separator className="mt-4 bg-neutral-700 w-72 mx-auto" />
        <p className="mt-3 text-neutral-400 text-lg">
          열정적인 개발자들이 만드는 PLO Devs의 미래입니다.
        </p>
      </div>

      {/* 카드들 */}
      <div className="flex flex-col gap-16">
        {developers.map((dev, index) => (
          <DevCard key={dev.name} dev={dev} index={index} />
        ))}
      </div>

      {/* 하단 CTA */}
      <div className="pb-10 pt-20 text-center">
        <h2 className="text-md text-white font-semibold tracking-tight">
          더 많은 개발자들이 곧 합류할 예정입니다!
        </h2>
      </div>
    </main>
    <div>
      <Footer />
    </div>
    </>
    
  );
};

export default DevInfo;