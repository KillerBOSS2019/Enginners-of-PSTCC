import { Section } from "@/app/sections/section_templete";
import { CountdownTimer } from "../countdown";
import Timeline from "./timeline/Timeline";
import { useState } from "react";

export default function Timeline_Section() {
    const [showCurrentTimeline, setShowCurrentTimeline] = useState(false);

    const handleShowCurrent = () => {
        setShowCurrentTimeline(!showCurrentTimeline);
    };

    return (
        <>
            <Section bgImage={"./bg.png"} bgColor={"#003882"} section_style={{ color: "black" }}>
                <h1 className="text-center text-white text-3xl font-semibold py-12 px-4">
                    Competition Countdown to Launch!
                    <div className="text-base">
                        <CountdownTimer targetDate="2025-05-17T00:00:00" />
                    </div>
                    {/* // current button yellow white text */}
                    <button className="text-base bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4" onClick={() => handleShowCurrent()}>
                        Current
                    </button>
                </h1>
                <Timeline showCurrent={showCurrentTimeline}  />
            </Section>
        </>
    )
}
