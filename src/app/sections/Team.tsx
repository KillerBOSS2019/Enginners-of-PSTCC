import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";
import { members } from '../data/members.json';
import { TeamRow } from "./team/team_row";
import { CustomImage } from "../Image";

export function Team() {
  return (
    <>
      <SectionBanner id="team" title="The Team">
        <div className="absolute inset-0 -bottom-40 right-50 flex justify-center items-center -z-50">
          <CustomImage src="./gear.svg" alt="Gears" width={300} height={300} className="gear-filter" />
        </div>
      </SectionBanner>
      <Section bgImage={undefined} bgColor={"#003882"} className="pt-40 pb-20">
        <TeamRow team={members} />
      </Section>
    </>
  );
}