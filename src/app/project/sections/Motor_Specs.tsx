import { CustomImage } from "@/app/Image";
import { SectionBanner } from "@/app/sections/section_banner";
import { Section } from "@/app/sections/section_templete";

export default function Motor_Specs() {
    return (
        <>
            <SectionBanner id="motor_specs" title="Motor Specification" />
            <Section bgImage={undefined} bgColor={"#003882"}>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 p-4">
                    <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white underline underline-offset-4">HP-H550ST Thrust Curve</p>
                            <CustomImage src={"./h550st.svg"} alt={"Motor Specification"} width={1920} height={1080} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-12 px-4">
                {[
    {
        "title": "Manufacturer",
        "value": "AeroTech"
    },
    {
        "title": "Designation",
        "value": "HP-H550ST"
    },
    {
        "title": "Motor Type",
        "value": "SU"
    },
    {
        "title": "Delays",
        "value": "6,8,10,12,14"
    },
    {
        "title": "Diameter",
        "value": "38 mm"
    },
    {
        "title": "Length",
        "value": "206 mm"
    },
    {
        "title": "Total Weight",
        "value": "316 g"
    },
    {
        "title": "Prop. Weight",
        "value": "176 g"
    },
    {
        "title": "Avg. Thrust",
        "value": "552.0 N"
    },
    {
        "title": "Initial Thrust",
        "value": "583.0 N"
    },
    {
        "title": "Max. Thrust",
        "value": "640.0 N"
    },
    {
        "title": "Total Impulse",
        "value": "312.0 Ns"
    },
    {
        "title": "Burn Time",
        "value": "0.6 s"
    },
    {
        "title": "Motor Case",
        "value": "38 DMS"
    }
].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
                    <p className="text-lg text-gray-600">{item.value}</p>
                    </div>
                ))}
                </div>
            </Section>
        </>
    );
}