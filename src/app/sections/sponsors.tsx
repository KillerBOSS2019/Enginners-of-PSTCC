import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";

export function Sponsors() {
    return (
        <>
            <SectionBanner id="sponsors" title="Our Sponsors" description='Thank You Wonderful Sponsors!' />
            <Section bgImage={undefined} bgColor={"#003882"}>
                <h1></h1>
            </Section>
        </>
    );
}