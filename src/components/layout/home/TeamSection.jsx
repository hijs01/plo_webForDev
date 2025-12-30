// src/components/home/TeamSection.jsx
import { allTeamMembers } from "../../../pages/developers_page/dev_info/DevInfo";

import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Card, CardContent } from "../../ui/card";

function TeamSection() {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="mt-16 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Core Members</h2>
        <p className="text-sm text-neutral-400">
          Core members of PLO Devs. More to be added soon 👀
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {allTeamMembers.map((member) => (
          <Card
            key={member.name}
            className="border-neutral-800 bg-neutral-900/60"
          >
            <CardContent className="flex items-center gap-3 pt-6 pb-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-neutral-800 text-xs">
                  {getInitials(member.name)}
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