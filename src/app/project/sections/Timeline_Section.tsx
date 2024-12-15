import { Section } from "@/app/sections/section_templete";
import { CountdownTimer } from "../countdown";
import { Timeline } from "./timeline/Timeline";

const events = [
    {
        "date": "Sept. 15, 2024",
        "title": "Notice of Intent to Compete",
        "description": "Non-binding, but a hard deadline to order test flight motor(s) and certification flight motor(s)"
    },
    {
        "date": "Before Build Start",
        "title": "Draft of Designs (specs & sim)",
        "description": "Due before you start to build"
    },
    {
        "date": "Jan. 31, 2025",
        "title": "Team Registration Fee Due",
        "description": "Pay registration fee and for motors now too"
    },
    {
        "date": "Jan. 31, 2025",
        "title": "All States’ Judges Identified",
        "description": ""
    },
    {
        "date": "Feb. 10, 2025",
        "title": "Declaration of Competition Attendance",
        "description": ""
    },
    {
        "date": "Feb. 10, 2025",
        "title": "Draft of Designs (specs & sim) Last Date",
        "description": "Last possible date to get credit for Draft of Designs"
    },
    {
        "date": "March 10, 2025",
        "title": "Preliminary Design Report (PDR)",
        "description": "PDR along with Model Rocket Flights documentation"
    },
    {
        "date": "April 15, 2025",
        "title": "Test Flights Completed",
        "description": "Recommended to do these in March or early April"
    },
    {
        "date": "May 5, 2025",
        "title": "Flight Readiness Report (FRR)",
        "description": "FRR along with Educational Outreach form"
    },
    {
        "date": "May 17-18, 2025",
        "title": "Competition",
        "description": "Includes Oral FRR; weather delay date: 5/19"
    },
    {
        "date": "June 2, 2025",
        "title": "Post-Competition Flight Performance Report (PCFPR)",
        "description": ""
    },
    {
        "date": "June 16, 2025",
        "title": "Competition Results Announced",
        "description": ""
    }
]

export default function Timeline_Section() {
    return (
        <>
            <h1 className="text-center text-4xl font-semibold py-12 px-4">
                Competition Countdown to Launch
                <div className="text-base">
                    <CountdownTimer targetDate="2025-05-17T00:00:00" />
                </div>
            </h1>
            <Section bgImage={"./bg.png"} bgColor={"#003882"} section_style={{ color: "black" }}>
                <Timeline events={events} />
            </Section>
        </>
    )
}

export { Timeline };
