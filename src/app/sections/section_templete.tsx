export function Section({ bgImage, bgColor, children }: { bgImage?: string, bgColor?: string, children: React.ReactNode }) {
    return (
      <section
        className="relative"
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