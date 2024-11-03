import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";
import { members } from '../members.json';
import { TeamRow } from "./team/team_row";

export function Team() {
    return (
        <>
            <SectionBanner id="team" title="The Team" />
            <Section bgImage={undefined} bgColor={"#003882"}>
                <TeamRow team={members} />
            </Section>
        </>
    );
}