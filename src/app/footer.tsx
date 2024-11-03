import Image from 'next/image';

export function Footer() {
    return (
      <footer className="bg-[var(--footer)]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-left gap-4">
              <Image src="./logo.svg" alt="Next.js logo" width={100} height={100} />
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