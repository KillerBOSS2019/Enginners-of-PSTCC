import { CustomImage } from '../Image';
import { SectionBanner } from './section_banner';
import { Section } from './section_templete';

export function Project() {
  return (
    <>
      <SectionBanner id="project" title="The Project">
        <div className="absolute -right-20 -top-10 md:-top-20 lg:-right-20 p-4 z-40 overflow-hidden">
          <CustomImage src="./gear.svg" alt="Gears" width={250} height={250} className="w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72" />
        </div>
      </SectionBanner>
      <Section bgImage={"./bg.png"} bgColor={"#003882"} section_style={{color: "black"}}>
        <h1 className="text-4xl font-semibold py-12 px-4">NASA&apos;s Midwest High-Power Rocket Competition</h1>
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 p-4">
          <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white underline underline-offset-4">Challenge #1</p>
              <p className="text-lg font-semibold text-white">Design, build, and test a rocket that can reach 1,000 ft in altitude within a (+10ft) or (-10ft) margin of error with data collected by altimeter while ensuring systems aren’t damaged and recovery of the rocket is achieved.</p>
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full lg:w-1/2 pr-12 bg-[#002c67] rounded-xl mx-auto p-4 flex-grow">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white underline underline-offset-4">Challenge #2</p>
              <p className="text-lg font-semibold text-white">With unrestricted altitude: Design and build a rocket that can reach the highest apogee possible with a single H550 motor then recover it undamaged and able to be launched again.</p>
            </div>
          </div>
          {/* video on its own row under*/}
          {/* <div className="flex flex-col rounded-xl">
            <div className='overflow-hidden rounded-xl border-solid border-2 border-white flex-shrink-0 drop-shadow'>
              <CustomImage src="./rocket.png" alt="Rocket" width={400} height={400} />
            </div>
          </div> */}
        </div>
        <div className="flex flex-col rounded-xl pb-20 p-4">
            <div className='overflow-hidden rounded-xl flex-shrink-0 drop-shadow'>
              {/* video ./Rocket_Video.mov. put on repeat. and play when scrolled to view*/}
              <video controls autoPlay className="w-full">
                <source src="./Rocket_Video.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
                
            </div>
        </div>
      </Section>
    </>
  );
}