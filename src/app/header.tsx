import Image from "next/image";

export function Header() {
    return (
        <header className="flex items-center justify-between w-full max-w-4xl px-8 py-4 mx-auto">
        <div className="flex items-center gap-4">
            <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
            <nav>
            <ul className="flex gap-4">
                <li>
                <a href="https://nextjs.org/docs">Docs</a>
                </li>
                <li>
                <a href="https://nextjs.org/learn">Learn</a>
                </li>
                <li>
                <a href="">GitHub</a>
                </li>
            </ul>
            </nav>
        </div>
    </header>
    );
}