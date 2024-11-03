import { TeamCard } from "./team_card";

export function TeamRow({ team }: { team: { img: string, name: string, role: string, bio: string }[] }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* First row with one card */}
      <div className="w-full">
        <TeamCard {...team[0]} />
      </div>
      
      {/* Remaining rows with two cards each */}
      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">
        {team.slice(1).map((member, index) => (
          <TeamCard key={index + 1} img={member.img} name={member.name} role={member.role} bio={member.bio} />
        ))}
      </div>
    </div>
  );
}