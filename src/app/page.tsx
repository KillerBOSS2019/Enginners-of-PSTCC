'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { members } from './members.json';
import { Header } from './header/header';
import { Hero } from './sections/hero';
import { Project } from './sections/project';
import { Team } from './sections/Team';
import { Footer } from './footer';
import { Sponsors } from './sections/sponsors';

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
      <Header setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
      <main>
        <Hero />
        <Project />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
