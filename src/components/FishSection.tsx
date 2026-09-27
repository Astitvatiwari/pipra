import Image from "next/image";

const INQUIRY_DIMENSIONS = [
  "Sourcing",
  "Freshness",
  "Hygiene",
  "Deboning",
  "Portioning",
  "Cooking",
  "Presentation",
  "Nutrition",
  "Recipe",
  "Producer Value",
];

export default function FishSection() {
  return (
    <section
      id="fish"
      aria-label="Pipra Fish - The First Vehicle"
      className="bg-pipra-basalt text-[#F5F8F7] section-spacing border-t border-[var(--border-hairline)]"
    >
      <div className="container-pipra">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-pipra-amber" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8FA3A2]">
            03 // The First Vehicle
          </span>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Authority (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Primary Headline */}
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F8F7] leading-[1.14]">
              Fish is our first vehicle.
              <br className="hidden sm:inline" /> Welcome to Pipra Fish.
            </h2>

            {/* Core Framing */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-serif italic text-xl sm:text-2xl text-[#F5F8F7]/95">
                Fish is not the final destination. It is the first vehicle.
              </p>

              <p className="font-sans text-[#E0DDD5] mt-4 reading-width text-base sm:text-lg leading-relaxed">
                Fish is our first vehicle for exploring how traditional Indian food
                knowledge can become globally accessible, trusted, desirable, and
                economically valuable.
              </p>
            </div>

            {/* Bachwa Spotlight */}
            <div className="mt-12 p-6 sm:p-8 bg-[#121716] border border-white/10 rounded-xs">
              <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-pipra-amber uppercase pb-3 border-b border-white/10 mb-4">
                <span>The Hero Fish</span>
                <span>Gangetic Landscape</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F8F7] font-normal">
                Bachwa
              </h3>

              <p className="font-sans text-[#E0DDD5] mt-3 text-sm sm:text-base leading-relaxed">
                A fish associated with the Gangetic culinary landscape and a
                traditional mustard-based preparation. Bachwa is the first hero of
                Pipra Fish.
              </p>
            </div>

            {/* The First-Time Fish Eater Inquiry */}
            <div className="mt-10">
              <p className="font-serif italic text-base sm:text-lg text-[#F5F8F7]/90 leading-relaxed">
                How can a traditional preparation remain itself while becoming
                understandable and inviting to someone encountering it for the first time?
              </p>
              <p className="font-sans text-[#E0DDD5] mt-2 text-sm sm:text-base leading-relaxed">
                Fish allows us to explore how traditional recipes can travel while
                remaining rooted in the people, places, techniques, and knowledge
                from which they come.
              </p>
            </div>

            {/* Bounded System Dimensions */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8FA3A2] block mb-1">
                  A Bounded System
                </span>
                <p className="text-xs text-[#D1CEC7]">
                  Questions the first vehicle allows Pipra to explore across the system:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {INQUIRY_DIMENSIONS.map((dimension) => (
                  <span
                    key={dimension}
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#F5F8F7] bg-[#121716] border border-white/10 rounded-xs"
                  >
                    {dimension}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Documentary Culinary Visual (approx 42%) */}
          <div className="lg:col-span-5 w-full">
            <figure
              className="relative w-full aspect-[3/4] sm:aspect-[16/10] lg:aspect-[3/4] overflow-hidden rounded-xs border border-white/10 bg-[#121716]"
              aria-label="Documentary photograph of traditional mustard-oil preparation and cooking process"
            >
              <Image
                src="/images/pipra-mustard-fish-preparation.jpg"
                alt="Traditional freshwater river fish cooking in mustard oil and yellow mustard gravy in a pan"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />

              {/* Archival Inset Header */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/60 via-black/20 to-transparent flex items-center justify-between text-[11px] font-mono tracking-widest text-white/95">
                <span>03 // FIELD ARCHIVE</span>
                <span className="text-pipra-amber">PREPARATION</span>
              </div>

              {/* Archival Bottom Badge */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end justify-between font-mono text-[10px] text-white/90 uppercase tracking-widest">
                <span>Mustard Oil & Shorshe</span>
                <span className="text-amber-200/90">CC BY-SA 4.0</span>
              </div>
            </figure>

            <figcaption className="mt-3 flex flex-col gap-1 text-[#8FA3A2]">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider pb-1 border-b border-white/10">
                <span>Field Record // Technique</span>
                <span className="text-pipra-amber">Plates & Rivers</span>
              </div>
              <p className="font-serif italic text-xs text-[#F5F8F7]/85 mt-1 leading-relaxed">
                Documentary record of traditional mustard-oil preparation and cooking.
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
