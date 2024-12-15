import { SectionBanner } from "@/app/sections/section_banner";
import { Section } from "@/app/sections/section_templete";

export default function Rocket_Result() {
    return (
        <>
            <SectionBanner id="project" title="Result" />
            <Section bgImage={"./bg.png"} bgColor={"#003882"} section_style={{ color: "black" }}>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 p-4">
                    <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white underline underline-offset-4">Rocket #1</p>
                            <p className="text-lg font-semibold text-white">simluation data</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white underline underline-offset-4">Rocket #2</p>
                            <p className="text-lg font-semibold text-white">simluation data</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}