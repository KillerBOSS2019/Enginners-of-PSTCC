import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";

const important_events = [
    {
        "title": <a href='https://mc2rocketry.com/Introduction/ctl/Details/Mid/433/ItemID/129?ContainerSrc=[G]Containers/Porto/NoTitle' target="_blank">Rocket Launch L1 Certification</a>,
        "date": "January 18, 2025 @ 10:00 AM CST",
        "description": "Rocket Launch in Olmstead, KY for possible L1 Certification for our team members.",
    }
]

export function EventList() {
    return (
        <>
            <SectionBanner id="events" title="Events" />
            <Section bgImage={undefined} bgColor={"#003882"}>
                {/* // list all events, it should be all text with a date and description for each event
                // it should have atleast 2 space between each event. only 1 column. no grid.
                // make it nice main theme of the site is yellow and blue. */}
                <div className="text-white">
                    {important_events.map((event, index) => (
                        <div key={index} className="p-4">
                            <h2 className="text-2xl font-semibold">{event.title}</h2>
                            <p className="text-lg">{event.date}</p>
                            <p className="text-lg">{event.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}