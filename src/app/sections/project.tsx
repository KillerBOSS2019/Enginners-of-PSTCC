
import Image from 'next/image';
import { Section } from './section_templete';
import { SectionBanner } from './section_banner';

export function Project() {
    return (
        <>
            <SectionBanner id="project" title="The Project" />
            <Section bgImage={"./bg.png"} bgColor={"#003882"}>
                <h1 className="text-4xl font-semibold text-white py-12 px-4">NASA&apos;s Midwest High-Power Rocket Competition</h1>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="flex flex-col gap-12 w-1/2 pr-12">
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white">The First Challenge</p>
                            <p className="text-lg font-semibold text-white">Launch the rocket exactly 1000 ft. above the ground and land it safely intact</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-white">The Second Challenge</p>
                            <p className="text-lg font-semibold text-white">Launch a second flight as high as possible with an H550 motor</p>
                        </div>
                    </div>
                    <Image src="/rocket.png" alt="Rocket" width={400} height={400} />
                    <div className="flex flex-col">
                        <Image src="./rocket.png" alt="Rocket" width={400} height={400} />
                    </div>
                </div>
            </Section>
        </>
    );
}