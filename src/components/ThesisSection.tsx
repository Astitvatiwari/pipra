export default function ThesisSection() {
  return (
    <section
      id="thesis"
      aria-label="Core Thesis and Field Inquiry"
      className="section-spacing border-t border-[var(--border-hairline)]"
    >
      <div className="container-pipra">
        {/* Section 01 Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-silt">
            01 // The Thesis
          </span>
        </div>

        {/* Primary Paradox Statement */}
        <div className="max-w-4xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pipra-charcoal leading-[1.14]">
            India does not lack recipes.
            <br className="hidden sm:inline" /> India lacks the infrastructure
            <br className="hidden sm:inline" /> that allows recipes to travel.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8">
              <p className="text-body text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                India possesses an extraordinary inheritance of culinary knowledge,
                regional ingredients, agricultural practices, and localized nutritional
                wisdom. Yet, much of this wisdom remains confined to its geography of
                origin. Pipra exists to explore how India’s traditional food systems
                can become globally accessible, trusted, desirable, and economically
                valuable—scaling infrastructure, not sameness.
              </p>
            </div>
            <div className="md:col-span-4 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-[var(--border-hairline)] pt-4 md:pt-0">
              <p className="font-mono text-xs tracking-wider uppercase text-pipra-silt mb-2">
                Guiding Ethos
              </p>
              <p className="font-serif italic text-base text-pipra-charcoal">
                &ldquo;We want to scale infrastructure, not sameness.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Transition to Fish Initiative */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-[var(--border-hairline)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-silt">
              PIPRA FISH // THE FIRST EXPERIMENT
            </span>
          </div>

          {/* AMUL Comparison Block */}
          <div className="bg-pipra-limestone border border-[var(--border-hairline)] rounded-xs p-8 sm:p-12 max-w-4xl">
            <div className="font-mono text-[11px] tracking-widest text-pipra-silt uppercase mb-6 border-b border-[var(--border-hairline)] pb-3">
              <span>PIPRA FISH // FIELD NOTE</span>
            </div>

            <blockquote className="text-display text-xl sm:text-2xl md:text-3xl text-pipra-charcoal leading-snug font-normal">
              &ldquo;This survey is an effort to do for India’s fish sector what AMUL
              did for the milk sector. Please take a few minutes to complete it
              and help us contribute to India’s nutritional security. India continues
              to face widespread protein and micronutrient deficiencies, and we
              believe that making nutritious, affordable, and accessible fish
              available at scale can be part of the solution.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-supporting text-xs sm:text-sm text-pipra-silt max-w-lg">
                Fish is Pipra’s first vehicle for exploring how traditional food
                knowledge can travel.
              </p>

              {/* Survey Link Placeholder */}
              <div className="inline-flex items-center gap-2">
                <span
                  className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-pipra-silt bg-pipra-paper border border-[var(--border-hairline)] rounded-xs"
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
