import React from 'react';

interface SectionProps {
  bgImage?: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
  section_style? : React.CSSProperties;
  inner_style? : React.CSSProperties;
}

export function Section({ bgImage, bgColor, children, className, section_style, inner_style }: SectionProps) {
  return (
    <section
      className={className}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        ...section_style
      }}
    >
      <div className="max-w-4xl mx-auto py-4" style={{...inner_style}}>
        {children}
      </div>
    </section>
  );
}