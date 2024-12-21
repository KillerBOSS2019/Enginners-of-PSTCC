'use client'
import { useEffect, useState } from "react";
import { Header } from "../header/header";
import ScrollToTopButton from "../scroll_to_top";
import { Footer } from "../footer";
import Timeline_Section from "./sections/Timeline_Section";
import Launch_Condition from "./sections/Launch_Condition";
import Motor_Specs from "./sections/Motor_Specs";
import Rocket from "./sections/Rocket";

export default function Page() {
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
                <Timeline_Section />
                <Launch_Condition />
                <Motor_Specs />
                <Rocket />
            </main>
            <Footer />
            <ScrollToTopButton setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={false} />
        </div>
    );
}