import React from 'react';

interface SectionProps {
  bgImage?: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ bgImage, bgColor, children, className }: SectionProps) {
  return (
    <section
      className={className}
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