const ECOSYSTEM_PATHWAYS = [
  { step: "01", from: "Fisher", to: "Chef" },
  { step: "02", from: "Farmer", to: "Recipe" },
  { step: "03", from: "Recipe", to: "Entrepreneur" },
  { step: "04", from: "Entrepreneur", to: "Customer" },
  { step: "05", from: "Local Tradition", to: "World" },
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
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
            04 // The Ecosystem
          </span>
        </div>

        {/* Main Heading & Core Narrative */}
        <div className="max-w-5xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.12]">
            From local knowledge to a wider table.
          </h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                Pipra explores the connections that allow traditional food
                knowledge to move through an ecosystem: from producers and cooks
                to entrepreneurs, customers, researchers, and wider audiences.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 bg-pipra-limestone/50 border border-[var(--border-hairline)] rounded-xs">
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

        {/* The 5 Ecosystem Relationships / System Map */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-pipra-silt">
              Ecosystem Pathways of Traditional Knowledge & Infrastructure
            </span>
            <span className="font-mono text-xs text-pipra-terracotta hidden sm:inline">
              01 → 05 // SYSTEM FLOW
            </span>
          </div>

          {/* Desktop (1024px+) & Tablet (640px - 1023px) Unified Architectural Flow */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 border-t border-b border-[var(--border-hairline)]">
            {ECOSYSTEM_PATHWAYS.map((pathway, idx) => {
              const isLast = idx === ECOSYSTEM_PATHWAYS.length - 1;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={pathway.step}
                  className={`group p-6 sm:p-8 lg:p-7 xl:p-8 flex flex-col justify-between transition-editorial ${
                    isLast ? "bg-pipra-limestone/40" : "bg-transparent"
                  } ${
                    // Tablet 2-column borders
                    isEven && !isLast
                      ? "sm:border-r border-[var(--border-hairline)]"
                      : ""
                  } ${
                    idx < 4
                      ? "sm:border-b lg:border-b-0 border-[var(--border-hairline)]"
                      : ""
                  } ${
                    // Tablet span for the 5th item (culmination)
                    isLast ? "sm:col-span-2 lg:col-span-1" : ""
                  } ${
                    // Desktop 5-column left border divider
                    idx > 0
                      ? "lg:border-l border-[var(--border-hairline)]"
                      : ""
                  }`}
                >
                  {/* Top meta indicator */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-hairline)]">
                    <span className="font-mono text-xs text-pipra-terracotta tracking-widest uppercase">
                      {pathway.step}
                    </span>
                    {isLast ? (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-pipra-terracotta bg-pipra-limestone px-2 py-0.5 rounded-xs">
                        Culmination
                      </span>
                    ) : (
                      <span
                        className="text-pipra-silt/40 font-mono text-xs hidden lg:inline group-hover:text-pipra-terracotta transition-editorial"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>

                  {/* Relationship typography */}
                  <div className="py-2">
                    <div className="font-serif text-2xl lg:text-2xl xl:text-[1.65rem] text-pipra-charcoal font-normal leading-snug">
                      <span className="block">{pathway.from}</span>
                      <span
                        className="text-pipra-terracotta font-mono text-sm inline-block my-2"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span className="block">{pathway.to}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile (< 640px): Vertical Connected Sequence */}
          <div className="sm:hidden border-t border-b border-[var(--border-hairline)] divide-y divide-[var(--border-hairline)]">
            {ECOSYSTEM_PATHWAYS.map((pathway, idx) => {
              const isCulmination = idx === ECOSYSTEM_PATHWAYS.length - 1;

              return (
                <div
                  key={pathway.step}
                  className={`py-6 px-4 ${isCulmination ? "bg-pipra-limestone/50" : ""}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-pipra-terracotta tracking-widest uppercase">
                      Pathway {pathway.step}
                    </span>
                    {isCulmination && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-pipra-terracotta">
                        Culmination
                      </span>
                    )}
                  </div>

                  <div className="font-serif text-2xl text-pipra-charcoal leading-snug">
                    <span>{pathway.from}</span>
                    <span
                      className="text-pipra-terracotta mx-3 font-mono text-base inline-block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <span>{pathway.to}</span>
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
