import React from 'react';

export function SectionBanner({
  title,
  description,
  id,
  children,
}: {
  title: string;
  description?: string;
  id: string;
  children?: React.ReactNode;
}) {
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section id={id} className="relative overflow-x-clip z-30">
      <div className="mx-auto py-4 bg-[var(--section-header)]">
        <h2
          className="relative flex justify-center text-5xl font-semibold text-white md:text-5xl group"
          style={{
            fontFamily: 'var(--font-squada-one)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span
            className="cursor-pointer hover:underline"
            onClick={handleCopyLink}
          >
            {title}
          </span>
          <span
            className="absolute -right-6 text-3xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={handleCopyLink}
            title="Copy link to this section"
          >
            #
          </span>
        </h2>
        {description && (
          <p
            className="text-center text-lg font-semibold text-white"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
