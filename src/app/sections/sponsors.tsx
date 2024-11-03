import { SectionBanner } from "./section_banner";
import { Section } from "./section_templete";
import Image from 'next/image';

const sponsors = [
    {
        name: "Boeing",
        image: "https://imgs.search.brave.com/0nNH9faSaC6tVvRzKWyKVFFV9QbWaM3FVPe0IWqL3Jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0xvZ28tQm9laW5n/LTUwMHgzMTMucG5n",
        url: "https://www.boeing.com/"
    },
    {
        name: "NASA",
        image: "https://imgs.search.brave.com/IkhG9IYihUgmSclGFkPsRp1h77RINIvCPBBg0U15BtY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2Jh/WXM5QXVIeHg5UVhl/WUJpTXZTTFUuanBn",
        url: "nasa.gov"
    },
    {
        name: "Lockheed Martin",
        image: "https://imgs.search.brave.com/Sti6f6OL9cBqCRZSXbMLBwqkDGwuVNWL8zxvV4pYLSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Mb2NraGVl/ZF9NYXJ0aW4vTG9j/a2hlZWRfTWFydGlu/LUxvZ28ud2luZS5z/dmc",
        url: "https://www.lockheedmartin.com/"
    },
    {
        name: "SpaceX",
        image: "https://imgs.search.brave.com/HGu2Q1blRJscBeQGrUCKnwc3mnxa-Gr5K--HUHnv8K8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTQy/MDU1Ny5qcGc",
        url: "https://www.spacex.com/"
    }
];

export function Sponsors() {
    return (
        <>
            <SectionBanner id="sponsors" title="Our Sponsors" description='Thank You Wonderful Sponsors!' />
            <Section bgImage={undefined} bgColor={"#003882"}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.url} target="_blank" rel="noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center">
                            <Image src={sponsor.image} alt={sponsor.name} width={200} height={200} />
                        </a>
                    ))}
                </div>
            </Section>
        </>
    );
}