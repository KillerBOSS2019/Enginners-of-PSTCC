export function SectionBanner({ title, description, id }: { title: string, description?: string, id: string }) {
    return (
      <section id={id} className="bg-[var(--section-header)]">
        <div className="max-w-4xl mx-auto py-4">
          <h2 className="flex justify-center drop-shadow-2xl text-5xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-squada-one)" }}>{title}</h2>
          {description && <p className="text-center text-lg font-semibold text-white drop-shadow-2xl">{description}</p>}
        </div>
      </section>
    );
}