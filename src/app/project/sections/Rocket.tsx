import { SectionBanner } from "@/app/sections/section_banner";
import { Section } from "@/app/sections/section_templete";

const rocket1_spec = {
    "Nose-Cone Shape": "Ellipsoid",
    "Fin Shape": "Trapezoidal",
    "Recovery Type": "Dual-Deployment",
    "Motor Class": "H550DMS",
    "Length(mm)": "900",
    "Inner Diameter(mm)": "112",
    "Outer Diameter(mm)": "114",
    "Body Thickness(mm)": "2",
    "Mass (Motor included)(g)": "1590",
    "Center-Pressure(Nose)(mm)": "676",
    "Center-Gravity(Nose)(mm)": "586",
    "Delay (Set-charge)(seconds)": "15.4",
    "Velocity(Rail)(m/s)": "44.9",
    "Vmax(m/s)": "200",
    "Amax(m/s)": "407",
    "Appogee(m)": "1388"
}

const rocket2_spec = {
    "Nose-Cone Shape": "Ellipsoid",
    "Fin Shape": "Trapezoidal",
    "Recovery Type": "Single-Deployment",
    "Motor Class": "H550DMS",
    "Length(mm)": "900",
    "Inner Diameter(mm)": "112",
    "Outer Diameter(mm)": "114",
    "Body Thickness(mm)": "2",
    "Mass (Motor included)(g)": "3622",
    "Center-Pressure(Nose)(mm)": "67.6",
    "Center-Gravity(Nose)(mm)": "58.5",
    "Delay (Set-charge)(seconds)": "7.52",
    "Velocity(Rail)(m/s)": "27.6",
    "Vmax(m/s)": "75.6",
    "Amax(m/s)": "155",
    "Appogee(m)": "306"
}

function generate_table(spec: Record<string, string>) {
    return (
      <table className="w-full text-white">
        <tbody>
          {Object.entries(spec).map(([key, value], index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-600">{key}</td>
              <td className="px-4 py-2 border border-gray-600">
                {typeof value === "object" ? JSON.stringify(value) : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  

export default function Rocket() {
    return (
        <>
            <SectionBanner id="rocket" title="Rocket Data" />
            <Section bgImage={"./bg.png"} bgColor={"#003882"} section_style={{ color: "black" }}>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 p-4">
                    <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white underline underline-offset-4 pb-4">Rocket #1</p>
                            {generate_table(rocket1_spec)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white underline underline-offset-4 pb-4">Rocket #2</p>
                            {generate_table(rocket2_spec)}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}