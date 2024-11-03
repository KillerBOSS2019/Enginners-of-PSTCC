export function SectionBanner({ title, description, id, children }: { title: string, description?: string, id: string, children: React.ReactNode }) {
  return (
    <section id={id} className="relative overflow-x-clip z-30">
      <div className="mx-auto py-4 bg-[var(--section-header)]">
        <h2 className="flex justify-center text-5xl font-semibold text-white md:text-5xl" style={{ fontFamily: "var(--font-squada-one)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          {title}
        </h2>
        {description && (
          <p className="text-center text-lg font-semibold text-white" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}