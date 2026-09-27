import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Master Brand Introduction"
      className="section-spacing pt-12 md:pt-20 lg:pt-28"
    >
      <div className="container-pipra">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Textual Authority (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Context */}
            <div className="mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
              <p className="text-eyebrow">PIPRA</p>
            </div>

            {/* Primary Headline */}
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-pipra-charcoal">
              Building better food systems for a better-nourished India.
            </h1>

            {/* Secondary Supporting Statement */}
            <div className="mt-8 pt-8 border-hairline-t">
              <p className="font-serif italic text-xl sm:text-2xl text-pipra-charcoal">
                Rooted in India. Built for the world.
              </p>

              <p className="text-body text-pipra-silt mt-4 reading-width text-base sm:text-lg">
                India does not lack recipes. India lacks the infrastructure that
                allows recipes to travel. Pipra is exploring how traditional Indian
                food knowledge can become globally accessible, trusted, desirable,
                and economically valuable.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#thesis"
                className="btn-pipra-primary text-xs uppercase tracking-[0.14em]"
              >
                Explore Pipra
              </a>
              <a
                href="#origin"
                className="btn-pipra-outline text-xs uppercase tracking-[0.14em]"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right Column: Cinematic Documentary Visual (approx 42%) */}
          <div className="lg:col-span-5 w-full">
            <figure
              className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-xs border border-[var(--border-hairline)] bg-pipra-limestone"
              aria-label="Documentary photograph of traditional riverboats at sunrise on the Ganges"
            >
              <Image
                src="/images/pipra-ganges-boats-sunrise.jpg"
                alt="Traditional wooden riverboats at sunrise on the Ganges River"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />

              {/* Archival Inset Header */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/50 via-black/15 to-transparent flex items-center justify-between text-[11px] font-mono tracking-widest text-white/95">
                <span>01 // ARCHIVE</span>
                <span>RIVERINE ECOLOGY</span>
              </div>

              {/* Archival Bottom Badge */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between font-mono text-[10px] text-white/90 uppercase tracking-widest">
                <span>Ganges Riverfront</span>
                <span className="text-amber-200/90">Photo: Schwiki / CC BY-SA 4.0</span>
              </div>
            </figure>

            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] text-pipra-silt uppercase tracking-wider">
              <span>Origin Landscape</span>
              <span className="text-pipra-terracotta">Plates & Rivers</span>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
