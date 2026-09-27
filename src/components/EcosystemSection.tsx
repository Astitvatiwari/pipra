const ECOSYSTEM_PATHWAYS = [
  { step: "01", from: "Fisher", to: "Chef", label: "Harvest to Kitchen" },
  { step: "02", from: "Farmer", to: "Recipe", label: "Soil to Knowledge" },
  { step: "03", from: "Recipe", to: "Entrepreneur", label: "Knowledge to Enterprise" },
  { step: "04", from: "Entrepreneur", to: "Customer", label: "Enterprise to Market" },
  { step: "05", from: "Local Tradition", to: "World", label: "Culmination" },
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
                Pipra explores the connections that allow traditional food
                knowledge to move through an ecosystem: from producers and cooks
                to entrepreneurs, customers, researchers, and wider audiences.
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

        {/* Continuous Directional Ecosystem Flow Stream */}
        <div className="mt-20 sm:mt-24">
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

          {/* Desktop & Tablet: Flow Stream with Progressive Scale & Directional Momentum */}
          <div className="hidden md:grid md:grid-cols-12 border-t border-b border-[var(--border-hairline)]">
            {ECOSYSTEM_PATHWAYS.map((pathway, idx) => {
              const isCulmination = idx === ECOSYSTEM_PATHWAYS.length - 1;

              return (
                <div
                  key={pathway.step}
                  className={`relative p-6 lg:p-7 flex flex-col justify-between transition-editorial ${
                    isCulmination
                      ? "md:col-span-4 bg-pipra-charcoal text-[#F7F5F0]"
                      : "md:col-span-2 bg-transparent text-pipra-charcoal border-r border-[var(--border-hairline)] hover:bg-pipra-limestone/40"
                  }`}
                >
                  {/* Top Step & Flow Tracker */}
                  <div
                    className={`flex items-center justify-between pb-3 mb-6 border-b ${
                      isCulmination ? "border-white/20" : "border-[var(--border-hairline)]"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs tracking-widest uppercase ${
                        isCulmination ? "text-pipra-amber font-medium" : "text-pipra-terracotta"
                      }`}
                    >
                      Pathway {pathway.step}
                    </span>

                    {isCulmination ? (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7F5F0] bg-white/10 px-2 py-0.5 rounded-xs">
                        Final Horizon
                      </span>
                    ) : (
                      <span
                        className="text-pipra-silt/40 font-mono text-sm"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>

                  {/* Flow Relationship Typography */}
                  <div className="my-auto py-2">
                    <div
                      className={`font-serif leading-tight ${
                        isCulmination
                          ? "text-3xl lg:text-[2.25rem] text-[#F7F5F0]"
                          : "text-xl lg:text-2xl text-pipra-charcoal"
                      }`}
                    >
                      <span className="block font-normal">{pathway.from}</span>
                      <span
                        className={`font-mono text-base inline-block my-2 ${
                          isCulmination ? "text-pipra-amber" : "text-pipra-terracotta"
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span
                        className={`block font-normal ${
                          isCulmination ? "text-amber-100" : ""
                        }`}
                      >
                        {pathway.to}
                      </span>
                    </div>
                  </div>

                  {/* Flow Bottom Marker */}
                  <div
                    className={`pt-4 mt-6 border-t font-mono text-[10px] uppercase tracking-wider ${
                      isCulmination
                        ? "border-white/20 text-white/60"
                        : "border-[var(--border-hairline)] text-pipra-silt"
                    }`}
                  >
                    {isCulmination ? "Global Table" : "System Node"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile (< 768px): Vertical Continuous Flow Ribbon */}
          <div className="md:hidden border-t border-b border-[var(--border-hairline)] divide-y divide-[var(--border-hairline)]">
            {ECOSYSTEM_PATHWAYS.map((pathway, idx) => {
              const isCulmination = idx === ECOSYSTEM_PATHWAYS.length - 1;

              return (
                <div
                  key={pathway.step}
                  className={`p-6 ${
                    isCulmination
                      ? "bg-pipra-charcoal text-[#F7F5F0]"
                      : "bg-transparent text-pipra-charcoal"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 font-mono text-xs uppercase tracking-widest">
                    <span
                      className={
                        isCulmination ? "text-pipra-amber font-medium" : "text-pipra-terracotta"
                      }
                    >
                      Pathway {pathway.step}
                    </span>
                    {isCulmination && (
                      <span className="text-[10px] text-white/80 bg-white/10 px-2 py-0.5 rounded-xs">
                        Culmination
                      </span>
                    )}
                  </div>

                  <div
                    className={`font-serif text-2xl leading-snug flex items-center flex-wrap gap-2 ${
                      isCulmination ? "text-[#F7F5F0]" : "text-pipra-charcoal"
                    }`}
                  >
                    <span>{pathway.from}</span>
                    <span
                      className={`font-mono text-lg ${
                        isCulmination ? "text-pipra-amber" : "text-pipra-terracotta"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <span className={isCulmination ? "text-amber-100" : ""}>
                      {pathway.to}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
