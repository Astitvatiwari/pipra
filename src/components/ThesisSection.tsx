export default function ThesisSection() {
  return (
    <section
      id="thesis"
      aria-label="Core Thesis and Field Inquiry"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-silt">
            01 // The Thesis
          </span>
        </div>

        {/* Primary Paradox Statement: Monumental Typographic Authority */}
        <div className="max-w-5xl">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-pipra-charcoal leading-[1.06] tracking-tight">
            India does not lack recipes.
            <br />
            <span className="text-pipra-terracotta">India lacks the infrastructure</span>
            <br />
            that allows recipes to travel.
          </h2>

          {/* Supporting Argument & Guiding Ethos */}
          <div className="mt-12 sm:mt-16 pt-10 border-t border-[var(--border-hairline)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-pipra-silt text-lg sm:text-xl leading-relaxed reading-width">
                India possesses an extraordinary inheritance of culinary knowledge,
                regional ingredients, agricultural practices, and localized nutritional
                wisdom. Yet, much of this wisdom remains confined to its geography of
                origin. Pipra exists to explore how India’s traditional food systems
                can become globally accessible, trusted, desirable, and economically
                valuable—scaling infrastructure, not sameness.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 bg-pipra-limestone/50 border border-[var(--border-hairline)] border-l-2 border-l-pipra-terracotta rounded-xs">
                <span className="font-mono text-[11px] tracking-widest uppercase text-pipra-terracotta block mb-3">
                  Guiding Ethos
                </span>
                <blockquote className="font-serif italic text-xl sm:text-2xl text-pipra-charcoal leading-snug">
                  &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Fish Initiative: Archival Field Note */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[var(--border-hairline)]">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
              PIPRA FISH // THE FIRST EXPERIMENT
            </span>
          </div>

          {/* AMUL Comparison Block */}
          <div className="bg-pipra-limestone/60 border border-[var(--border-hairline)] rounded-xs p-8 sm:p-12 lg:p-14 max-w-5xl">
            <div className="font-mono text-[11px] tracking-widest text-pipra-silt uppercase mb-6 pb-4 border-b border-[var(--border-hairline)] flex items-center justify-between">
              <span>PIPRA FISH // FIELD NOTE</span>
              <span className="text-pipra-terracotta">Nutritional Security</span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] text-pipra-charcoal leading-[1.25] font-normal">
              &ldquo;This survey is an effort to do for India’s fish sector what AMUL
              did for the milk sector. Please take a few minutes to complete it
              and help us contribute to India’s nutritional security. India continues
              to face widespread protein and micronutrient deficiencies, and we
              believe that making nutritious, affordable, and accessible fish
              available at scale can be part of the solution.&rdquo;
            </blockquote>

            <div className="mt-10 pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-supporting text-sm sm:text-base text-pipra-silt max-w-xl">
                Fish is Pipra’s first vehicle for exploring how traditional food
                knowledge can travel.
              </p>

              {/* Survey Link Placeholder */}
              <div className="inline-flex items-center gap-2 shrink-0">
                <span
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-pipra-silt bg-pipra-paper border border-[var(--border-hairline)] rounded-xs"
                  aria-label="Survey destination pending official confirmation"
                >
                  [ Survey Link Pending ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
