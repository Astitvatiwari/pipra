import Image from "next/image";

const INQUIRY_DIMENSIONS = [
  { id: "01", name: "Sourcing" },
  { id: "02", name: "Freshness" },
  { id: "03", name: "Hygiene" },
  { id: "04", name: "Deboning" },
  { id: "05", name: "Portioning" },
  { id: "06", name: "Cooking" },
  { id: "07", name: "Presentation" },
  { id: "08", name: "Nutrition" },
  { id: "09", name: "Recipe" },
  { id: "10", name: "Producer Value" },
];

export default function FishSection() {
  return (
    <section
      id="fish"
      aria-label="Pipra Fish - The First Vehicle"
      className="bg-[#121615] text-[#F5F8F7] section-spacing border-t border-white/10"
    >
      <div className="container-pipra">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pipra-amber" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-pipra-amber font-medium">
              03 // The First Vehicle
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8FA3A2] hidden sm:inline">
            Pipra Fish
          </span>
        </div>

        {/* Section Headline & Core Framing */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl text-[#F5F8F7] leading-[1.08]">
            Fish is our first vehicle.
            <br />
            <span className="text-[#C88E3A]">Welcome to Pipra Fish.</span>
          </h2>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-serif italic text-2xl sm:text-3xl text-amber-100/90 leading-snug">
              Fish is not the final destination—it is a bounded learning system.
            </p>

            <p className="font-sans text-[#E0DDD5] mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              We begin here to explore how traditional food knowledge can become
              globally accessible, trusted, and economically valuable.
            </p>
          </div>
        </div>

        {/* Culinary Epicenter: Asymmetric Spread (Food Hero + Inquiry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Right on mobile / Left on desktop: Narrative & Bachwa Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1 gap-8">
            {/* Bachwa Spotlight Card */}
            <div className="p-7 sm:p-9 bg-[#0E1211] border border-white/15 rounded-xs relative">
              <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-pipra-amber uppercase pb-4 border-b border-white/10 mb-5">
                <span>The Hero Fish</span>
                <span className="text-[#8FA3A2]">Gangetic Landscape</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F8F7] font-normal tracking-tight">
                Bachwa
              </h3>

              <p className="font-sans text-[#E0DDD5] mt-4 text-sm sm:text-base leading-relaxed">
                A freshwater fish of the Gangetic culinary landscape and a
                traditional mustard-based preparation—the first hero of Pipra Fish.
              </p>
            </div>

            {/* The First-Time Fish Eater Inquiry */}
            <div className="p-7 sm:p-9 bg-[#0E1211]/60 border border-white/10 rounded-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-pipra-amber block mb-3">
                Culinary Translation
              </span>
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#F5F8F7] leading-snug">
                &ldquo;How can a traditional preparation remain itself while becoming
                understandable and inviting to someone encountering it for the first time?&rdquo;
              </blockquote>
              <p className="font-sans text-[#D1CEC7] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                Exploring how recipes can travel without losing the people, techniques,
                and knowledge that define them.
              </p>
            </div>
          </div>

          {/* Food Hero Visual: Dominant Photographic Presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <figure
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden rounded-xs border border-white/15 bg-[#0E1211] shadow-2xl"
              aria-label="Documentary record of traditional mustard-oil preparation and cooking"
            >
              <Image
                src="/images/pipra-mustard-fish-preparation.jpg"
                alt="Documentary photograph of traditional freshwater fish cooking in mustard oil and yellow mustard gravy"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />

              {/* Inset Archival Tag - Top */}
              <div className="absolute top-0 inset-x-0 p-5 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between text-[11px] font-mono tracking-widest text-white">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pipra-amber" />
                  FIELD ARCHIVE // TECHNIQUE
                </span>
                <span className="text-pipra-amber uppercase">Mustard Gravy</span>
              </div>

              {/* Inset Archival Caption - Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-1 text-white">
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/80">
                  <span>Traditional Mustard-Oil Kadai Preparation</span>
                  <span className="text-amber-200">CC BY-SA 4.0</span>
                </div>
                <p className="font-serif italic text-xs text-white/90 mt-1">
                  Documentary record of traditional mustard-oil preparation and cooking.
                </p>
                <p className="font-mono text-[9px] sm:text-[10px] text-white/60 tracking-wider">
                  Documentary technique illustration only — freshwater fish preparation, not Bachwa.
                </p>
              </div>
            </figure>
          </div>
        </div>

        {/* Bounded System: 10 Inquiry Dimensions Ledger */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-amber block mb-2">
                A Bounded System
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F8F7]">
                Ten Inquiry Dimensions
              </h3>
            </div>
            <p className="text-xs font-mono text-[#8FA3A2] tracking-wider max-w-md">
              Questions the first vehicle allows Pipra to explore across the complete system:
            </p>
          </div>

          {/* Architectural Matrix of Dimensions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {INQUIRY_DIMENSIONS.map((dim) => (
              <div
                key={dim.name}
                className="p-4 sm:p-5 bg-[#0E1211] border border-white/10 hover:border-pipra-amber/40 transition-editorial flex flex-col justify-between min-h-[90px] rounded-xs"
              >
                <span className="font-mono text-[11px] text-pipra-amber tracking-wider">
                  {dim.id}
                </span>
                <span className="font-sans font-medium text-sm sm:text-base text-[#F5F8F7] tracking-wide mt-2">
                  {dim.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
