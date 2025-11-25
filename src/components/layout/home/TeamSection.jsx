// src/components/home/TeamSection.jsx
import { team } from "../../../pages/data/homeData";

import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Card, CardContent } from "../../ui/card";

function TeamSection() {
  return (
    <section className="mt-16 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Core Members</h2>
        <p className="text-sm text-neutral-400">
          PLO Devs의 코어 멤버들입니다. 앞으로 더 많이 추가될 예정 👀
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {team.map((member) => (
          <Card
            key={member.name}
            className="border-neutral-800 bg-neutral-900/60"
          >
            <CardContent className="flex items-center gap-3 pt-6 pb-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-neutral-800 text-xs">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-neutral-400">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;