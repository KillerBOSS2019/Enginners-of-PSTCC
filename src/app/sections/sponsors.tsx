import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";
import { CustomImage } from "../Image";
import { sponsors } from '../data/sponsors.json';

export function Sponsors() {
    return (
        <>
            <SectionBanner id="sponsors" title="Our Sponsors" description='Thank You Wonderful Sponsors!' children={undefined} />
            <Section bgImage={undefined} bgColor={"#003882"}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4">
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.website} target="_blank" rel="noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center">
                            <CustomImage src={sponsor.logo} alt={sponsor.name} width={200} height={200} />
                        </a>
                    ))}
                </div>
            </Section>
        </>
    );
}