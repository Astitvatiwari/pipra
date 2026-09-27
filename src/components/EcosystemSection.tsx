import Image from "next/image";

const CORE_PATHWAYS = [
  { step: "01", from: "Fisher", to: "Chef", context: "Harvest to Kitchen" },
  { step: "02", from: "Farmer", to: "Recipe", context: "Soil to Knowledge" },
  { step: "03", from: "Recipe", to: "Entrepreneur", context: "Knowledge to Enterprise" },
  { step: "04", from: "Entrepreneur", to: "Customer", context: "Enterprise to Market" },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-label="The Pipra Ecosystem"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-terracotta font-medium">
            04 // The Ecosystem
          </span>
        </div>

        {/* Main Heading & Core Narrative */}
        <div className="max-w-5xl">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-pipra-charcoal leading-[1.08] tracking-tight">
            From local knowledge to a wider table.
          </h2>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-pipra-silt text-lg sm:text-xl leading-relaxed reading-width">
                The relationships that allow regional food traditions to move from
                producers and cooks to entrepreneurs, customers, and the wider world.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 bg-pipra-limestone/50 border border-[var(--border-hairline)] border-l-2 border-l-pipra-terracotta rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta block mb-2">
                  Governing Principle
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-pipra-charcoal leading-snug">
                  &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Substantial River Documentary Image: The Physical Foundation */}
        <div className="mt-14 sm:mt-18 mb-12 sm:mb-16">
          <figure
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden rounded-xs border border-[var(--border-hairline)] bg-pipra-limestone/40 shadow-sm"
            aria-label="Documentary record of fishermen on traditional boat casting nets on the Gomti River"
          >
            <Image
              src="/images/pipra-river-fishermen-gomti.jpg"
              alt="Fishermen in a traditional wooden boat casting nets on the Gomti River, a Ganges tributary"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_45%] filter contrast-[1.05] brightness-[0.96] sepia-[0.06] saturate-[0.92]"
            />
            {/* Top Inset */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-b from-black/60 via-black/20 to-transparent flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-white/95">
              <span>FIELD ARCHIVE // THE LIVING RIVERINE COMMONS</span>
              <span className="text-amber-200">RIVER HARVEST</span>
            </div>
            {/* Bottom Inset */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex items-end justify-between font-mono text-[9px] sm:text-[10px] text-white/90 uppercase tracking-widest">
              <span>Traditional Net Casting on the Gomti, Ganges Basin</span>
              <span className="text-white/70">Photo: Alokksrs / CC BY-SA 4.0</span>
            </div>
          </figure>
        </div>

        {/* Five Pathway Architecture */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-hairline)] pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-silt">
              Ecosystem Pathways of Traditional Knowledge &amp; Infrastructure
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-pipra-terracotta">
              <span>01</span>
              <span>→</span>
              <span>02</span>
              <span>→</span>
              <span>03</span>
              <span>→</span>
              <span>04</span>
              <span>→</span>
              <span className="font-medium">05 CULMINATION</span>
            </div>
          </div>

          {/* Pathways 01 - 04: Connected Architectural Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--border-hairline)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-hairline)]">
            {CORE_PATHWAYS.map((pathway, idx) => (
              <div
                key={pathway.step}
                className={`p-6 sm:p-8 lg:p-8 flex flex-col justify-between transition-editorial hover:bg-pipra-limestone/35 ${
                  idx === 0 || idx === 1 ? "sm:border-b lg:border-b-0 border-[var(--border-hairline)]" : ""
                }`}
              >
                {/* Pathway Step Header */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--border-hairline)]">
                  <span className="font-mono text-xs tracking-widest uppercase text-pipra-terracotta font-medium">
                    Pathway {pathway.step}
                  </span>
                  <span
                    className="text-pipra-silt/40 font-mono text-sm hidden lg:inline"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                {/* Relationship Typography */}
                <div className="my-auto py-2">
                  <div className="font-serif leading-tight text-2xl lg:text-[1.65rem] text-pipra-charcoal">
                    <span className="block font-normal">{pathway.from}</span>
                    <span
                      className="font-mono text-base inline-block my-2.5 text-pipra-terracotta"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <span className="block font-normal">{pathway.to}</span>
                  </div>
                </div>

                {/* Context Marker */}
                <div className="pt-4 mt-6 border-t border-[var(--border-hairline)] font-mono text-[10px] uppercase tracking-wider text-pipra-silt">
                  {pathway.context}
                </div>
              </div>
            ))}
          </div>

          {/* Pathway 05: Dark Consequential Culmination Block */}
          <div className="mt-8 p-8 sm:p-10 lg:p-12 bg-pipra-charcoal text-[#F7F5F0] border border-white/10 rounded-xs transition-editorial">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-pipra-amber" />
                <span className="font-mono text-xs tracking-widest uppercase text-pipra-amber font-medium">
                  Pathway 05 // Culmination
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#F7F5F0]/80 bg-white/10 px-3 py-1 rounded-xs self-start md:self-auto">
                Final Horizon // Global Table
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
              <div className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F7F5F0] leading-tight">
                <span>Local Tradition</span>
                <span
                  className="font-mono text-2xl lg:text-3xl text-pipra-amber mx-3 inline-block"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="text-amber-100">World</span>
              </div>

              <p className="font-sans text-[#E0DDD5] text-sm sm:text-base max-w-md leading-relaxed">
                Allowing regional tradition to reach the world without losing the knowledge that gives it meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
