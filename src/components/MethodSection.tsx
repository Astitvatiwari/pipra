const STAGES = [
  { step: "01", name: "Tradition" },
  { step: "02", name: "Inquiry" },
  { step: "03", name: "Experiment" },
  { step: "04", name: "Evidence" },
  { step: "05", name: "Scale" },
];

export default function MethodSection() {
  return (
    <section
      id="method"
      aria-label="The 5-Stage Framework"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
            02 // The Method
          </span>
        </div>

        {/* Main Heading: Institutional Proposition */}
        <div className="max-w-5xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.12]">
            A deliberate pathway from ancestral inheritance to infrastructure for scale.
          </h2>

          {/* Framing Narrative & Governing Axiom */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                How does Pipra approach the challenge of allowing traditional food
                knowledge to travel? By establishing a deliberate pathway from
                ancestral inheritance to rigorous inquiry, controlled testing,
                and verified evidence—eventually building the infrastructure for scale.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 bg-pipra-limestone/50 border border-[var(--border-hairline)] rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta block mb-2">
                  Governing Axiom
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-pipra-charcoal leading-snug">
                  &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The 5-Stage Architectural Methodology Rail */}
        <div className="mt-16 sm:mt-20">
          {/* Desktop (1024px+) & Tablet (640px - 1023px) Responsive Architectural Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 border-t border-b border-[var(--border-hairline)]">
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.step}
                  className={`group p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col justify-between transition-editorial ${
                    // Tablet 2-column borders
                    isEven && !isLast
                      ? "sm:border-r border-[var(--border-hairline)]"
                      : ""
                  } ${
                    idx < 4
                      ? "sm:border-b lg:border-b-0 border-[var(--border-hairline)]"
                      : ""
                  } ${
                    // Tablet span for the 5th item
                    isLast ? "sm:col-span-2 lg:col-span-1" : ""
                  } ${
                    // Desktop 5-column left border divider
                    idx > 0
                      ? "lg:border-l border-[var(--border-hairline)]"
                      : ""
                  }`}
                >
                  <div className="mb-6 lg:mb-12">
                    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl text-pipra-charcoal/35 font-light tracking-tight block group-hover:text-pipra-terracotta transition-editorial">
                      {stage.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-2xl lg:text-3xl text-pipra-charcoal group-hover:text-pipra-terracotta transition-editorial font-normal tracking-tight">
                      {stage.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile (< 640px): Vertical Archival Timeline */}
          <div className="sm:hidden border-t border-b border-[var(--border-hairline)] divide-y divide-[var(--border-hairline)]">
            {STAGES.map((stage) => (
              <div
                key={stage.step}
                className="py-5 px-1 flex items-baseline relative group"
              >
                {/* Large stage index on the left */}
                <div className="w-14 shrink-0">
                  <span className="font-mono text-3xl text-pipra-charcoal/35 font-light tracking-tight">
                    {stage.step}
                  </span>
                </div>

                {/* Continuous vertical hairline & Stage title on the right */}
                <div className="border-l border-[var(--border-hairline)] pl-5 flex-1">
                  <h3 className="font-serif text-2xl text-pipra-charcoal font-normal tracking-tight">
                    {stage.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
