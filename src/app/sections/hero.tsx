import { useEffect, useState } from "react";
import { CustomImage } from "../Image";

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['20241221-005856.jpg', '20241221_010553.jpg', 'RocketShell1_big_fins_v3_v1.jpg'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
      return () => clearInterval(interval);
    }, [images.length]);
  
    const prevImage = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div style={{ backgroundColor: "var(--header)" }}>
        <div className="relative w-full h-[80vh] rounded-t-2xl overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <CustomImage src={"./team_slides/" + src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
          <button
            onClick={prevImage}
            className="hidden sm:block absolute left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
          >
            &#9664;
          </button>
          <button
            onClick={nextImage}
            className="hidden sm:block absolute right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
          >
            &#9654;
          </button>
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6 flex justify-center items-center">
            <p className="px-6 py-2 lg:w-3/4 text-center lg:text-xl font-semibold">Founded in 2024, we&apos;re a group of Pellissippi State students dedicated to exploring and innovating in STEM. We bring classroom knowledge to life, transforming it into practical, real-world skills.</p>
          </div>
        </div>
      </div>
    );
  }