import { CustomImage } from "./Image";
import { social_media } from './data/social_media.json';

export function Footer() {
  return (
    <footer className="bg-[var(--footer)]">
      <div className="p-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <CustomImage src="./logo.svg" alt="Next.js logo" width={100} height={100} />
            <p className="text-lg font-semibold text-white text-center md:text-left">© 2024 Pellissippi State Engineering Club</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row gap-4">
              {social_media.map((e, key) => (
                <a key={key} href={e.url} className="text-white hover:text-yellow-500">
                  <CustomImage src={e.img} alt={e.name} width={35} height={35} />
                </a>
              ))}
              <a href="#" className="text-white hover:text-yellow-500">
              
              </a>
            </div>
            <p className="text-white pt-2 text-center">Follow us on social media!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}