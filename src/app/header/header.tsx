import Image from "next/image";
import { NavList } from "./Navlist";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export interface HeaderProps {
  setMobileMenuOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
}

export function Header({ setMobileMenuOpen, mobileMenuOpen }: HeaderProps) {
    return (
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
              <Image src="./logo.svg" alt="Next.js logo" width={100} height={100} priority />
            </a>
          </div>
          <div className="hidden sm:flex">
            <NavList />
          </div>
          <button
            className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
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
    );
}