export function SectionBanner({ title, description, id }: { title: string, description?: string, id: string }) {
  return (
    <section id={id} className="bg-[var(--section-header)]">
      <div className="max-w-4xl mx-auto py-4">
        <h2 className="flex justify-center text-5xl font-semibold text-white md:text-5xl" style={{ fontFamily: "var(--font-squada-one)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          {title}
        </h2>
        {description && (
          <p className="text-center text-lg font-semibold text-white" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}