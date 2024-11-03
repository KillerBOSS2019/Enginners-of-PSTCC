'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { members } from './members.json';

function NavList() {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-x-4">
      <a href="#project" className="text-xl font-semibold">Project</a>
      <a href="#team" className="text-xl font-semibold">Meet the Team</a>
      <a href="#sponsors" className="text-xl font-semibold">Sponsors</a>
    </div>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/image1.png', '/image2.png', '/image3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] rounded-t-2xl overflow-hidden" style={{ backgroundColor: "var(--header)" }}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}
      <button
        onClick={prevImage}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
      >
        &#9654;
      </button>
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6 flex justify-center items-center">
        <p className="px-6 w-3/4 text-center text-xl font-semibold">Founded in 2024, we&apos;re a group of Pellissippi State students dedicated to exploring and innovating in STEM. We bring classroom knowledge to life, transforming it into practical, real-world skills.</p>
      </div>
    </div>
  );
}

function SectionBanner({ title, description, id }: { title: string, description?: string, id: string }) {
  return (
    <section id={id} className="bg-[var(--section-header)]">
      <div className="max-w-4xl mx-auto py-4">
        <h2 className="flex justify-center drop-shadow-2xl text-5xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-squada-one)" }}>{title}</h2>
        {description && <p className="text-center text-lg font-semibold text-white drop-shadow-2xl">{description}</p>}
      </div>
    </section>
  );
}

// 80vh min, bg color||image
// children is absolute
function Section({ bgImage, bgColor, children }: { bgImage?: string, bgColor?: string, children: React.ReactNode }) {
  return (
    <section
      className="relative"
      style={{
        minHeight: "80vh",
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-4xl mx-auto py-4">
        {children}
      </div>
    </section>
  );
}

// people card, img, name, role, bio
function TeamCard({ img, name, role, bio }: { img: string, name: string, role: string, bio: string }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="overflow-hidden bg-white rounded-xl border-solid border-2 border-white">
        <Image src={img} alt={name} width={130} height={130} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2"> {/* Added items-center */}
          <p className="text-lg font-semibold text-white">{name}</p>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <p className="text-lg font-semibold text-white">{role}</p>
        </div>
        <div className="h-px w-full bg-white"></div>
        <p className="text-lg font-semibold text-white">{bio}</p>
      </div>
    </div>
  );
}

// loop team. row 1 1 card, rest 2 cards. grid
function TeamRow({ team }: { team: { img: string, name: string, role: string, bio: string }[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* First row with one card */}
      <div className="grid grid-cols-1">
        <TeamCard {...team[0]} />
      </div>
      
      {/* Remaining rows with two cards each */}
      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
        {team.slice(1).map((member, index) => (
          <TeamCard key={index + 1} img={member.img} name={member.name} role={member.role} bio={member.bio} />
        ))}
      </div>
    </div>
  );
}

// display icon and text on the left, and on the right display social media icons
function Footer() {
  return (
    <footer className="bg-[var(--footer)]">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-left gap-4">
            <Image src="/logo.svg" alt="Next.js logo" width={100} height={100} />
            <p className="text-lg font-semibold text-white">© 2024 Pellissippi State Engineering Club</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className='flex flex-row'>
                <a href="#" className="text-white hover:text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
              </div>
              <p className="text-white pt-2">Follow us on social media!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="relative z-50">
        {/* yellow bar */}
        <div className="flex flex-col items-center justify-center gap-x-6 overflow-hidden px-4 py-2.5 bg-yellow-500 md:flex-row md:px-6">
          <h1 className="drop-shadow text-2xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-squada-one)" }}>
            Pellissippi State Engineering Club
          </h1>
        </div>

        <nav className="mx-auto flex items-center justify-between p-1 lg:px-8" style={{ backgroundColor: "var(--header)" }} aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Enginners of PSTCC</span>
              <Image src="/logo.svg" alt="Next.js logo" width={100} height={100} priority />
            </a>
          </div>
          <div className="hidden lg:flex">
            <NavList />
          </div>
          <button
            className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-10 w-10" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-10 w-10" strokeWidth={2} />
            )}
          </button>
        </nav>
        <div
          className={`absolute top-full left-0 w-full bg-[var(--header)] overflow-hidden transition-max-height duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center p-6">
            <NavList />
          </div>
        </div>
      </header>
      <main>
        <Carousel />
        <SectionBanner id="project" title="The Project" />
        <Section bgImage={"/bg.png"} bgColor={"#003882"}>
          
          {/* main title "NASA's Midwest High-Power ROcket Competition" on the top and below on the left side will have infomation eg "Our team will be working on two specific challenges" and then the "The First Challenge" with "Launch the rocket exactly 1000 ft. above the ground and land it safely intact". on the right its going to have img */}
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
            <div className="flex flex-col">
              <Image src="/rocket.png" alt="Rocket" width={400} height={400} />
            </div>
          </div>
        </Section>
        <SectionBanner id="team" title="The Team" />
        <Section bgImage={undefined} bgColor={"#003882"}>
          <TeamRow team={members} />
        </Section>
        <SectionBanner id="sponsors" title="Our Sponsors" description='Thank You Wonderful Sponsors!' />
        <Section bgImage={undefined} bgColor={"#003882"}>
          <h1></h1>
        </Section>
        <Footer />
      </main>
      <footer>
      </footer>
    </div>
  );
}
