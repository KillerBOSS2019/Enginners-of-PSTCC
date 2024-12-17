import { SectionBanner } from "@/app/sections/section_banner";
import { Section } from "@/app/sections/section_templete";


export default function Launch_Condition() {
    return (
        <>
            <SectionBanner id="launch_condition" title="Launch Condition" description="The launch condition of the rocket is as follows" />
            <Section bgImage={undefined} bgColor={"#003882"}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-12 px-4">
            {[
                { title: "Launch Coordinates", value: "Latitude 45° 30' 40.86 N,\n Longitude -92° 58' 48.79 W" },
                { title: "May Weather Average", value: "65°F - 75°F" },
                { title: "Elevation to Sea-level", value: "267 meters / 876 feet" },
                { title: "Humidity", value: "73%" },
                { title: "Atmospheric Pressure", value: "1030hPA" },
                { title: "Average Wind Speed", value: "10.6 mph" },
                { title: "Visibility", value: "Clear" },
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