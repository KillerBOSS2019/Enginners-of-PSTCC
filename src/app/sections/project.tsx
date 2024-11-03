import Image from 'next/image';
import { SectionBanner } from './section_banner';
import { Section } from './section_templete';

export function Project() {
  return (
    <>
      <SectionBanner id="project" title="The Project" />
      <Section bgImage={"./bg.png"} bgColor={"#003882"}>
        <h1 className="text-4xl font-semibold text-white py-12 px-4">NASA&apos;s Midwest High-Power Rocket Competition</h1>
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-stretch gap-6">
          <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white underline underline-offset-4">The First Challenge</p>
              <p className="text-lg font-semibold text-white">Launch the rocket exactly 1000 ft. above the ground and land it safely intact</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white underline underline-offset-4">The Second Challenge</p>
              <p className="text-lg font-semibold text-white">Launch a second flight as high as possible with an H550 motor</p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl">
            <div className='overflow-hidden rounded-xl border-solid border-2 border-white flex-shrink-0 drop-shadow'>
              <Image src="./rocket.png" alt="Rocket" width={400} height={400} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}