export default function OriginSection() {
  return (
    <section
      id="origin"
      aria-label="The Origin - Memory and Infrastructure"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
            05 // The Origin
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.12]">
            Pipra was born between memory and infrastructure.
          </h2>
        </div>

        {/* Narrative Flow: Asymmetric Editorial Split */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left / Primary Column: The Founder Origin & Inquiries (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Opening Narrative */}
            <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
              For more than two decades, Sanjeev Kumar lived in the United States.
              Yet one taste remained difficult to find: his mother’s mustard fish.
            </p>

            {/* Central Dominant Quotation / Cinematic Anchor */}
            <div className="my-2 p-7 sm:p-9 lg:p-10 bg-pipra-limestone/50 border border-[var(--border-hairline)] border-l-2 border-l-pipra-terracotta rounded-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-hairline)] font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta">
                <span>Founder&rsquo;s Recollection</span>
                <span className="text-pipra-silt">Roughly 23 Years Away</span>
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.25rem] text-pipra-charcoal leading-[1.25]">
                &ldquo;I searched Jackson Heights. I searched Edison. I tried salmon.
                I tried tilapia. And eventually I came home.&rdquo;
              </blockquote>

              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between font-mono text-xs text-pipra-silt">
                <span>Sanjeev Kumar</span>
                <span>2022 // Return to India</span>
              </div>
            </div>

            {/* Narrative Beats */}
            <div className="space-y-6">
              <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                In 2022, after roughly twenty-three years away, he returned to India
                and ate the mustard fish his family had made for years.
              </p>

              <p className="font-serif italic text-xl sm:text-2xl text-pipra-charcoal leading-snug reading-width">
                The experience raised a larger question: what exactly was missing when a
                traditional Indian food could not travel with the people who remembered it?
              </p>

              <div className="pt-4 border-t border-[var(--border-hairline)]">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                  That question led toward a larger inquiry—not simply how to
                  preserve recipes, but how to build the infrastructure around them
                  so that traditional knowledge can become accessible, trusted,
                  desirable, and economically valuable.
                </p>
              </div>
            </div>

            {/* Bihar Context Block */}
            <div className="p-6 sm:p-8 bg-pipra-limestone/40 border border-[var(--border-hairline)] rounded-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-pipra-terracotta block mb-3">
                The Question of Place
              </span>
              <p className="font-serif text-lg sm:text-xl text-pipra-charcoal leading-relaxed">
                Bihar contains extraordinary cultural and human wealth, yet persistent
                poverty and limited opportunity remain. What does Bihar already
                possess that the world might value if the right infrastructure were built around it?
              </p>
            </div>

            {/* Closing Pipra Identity Statement */}
            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-col gap-6">
              <p className="font-serif italic text-2xl sm:text-3xl text-pipra-charcoal leading-snug">
                Pipra was born from this intersection of memory and infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[var(--border-hairline)]">
                <p className="font-sans text-pipra-charcoal font-medium text-base sm:text-lg">
                  How can we enable the world to experience India?
                </p>
                <span className="font-mono text-xs uppercase tracking-widest text-pipra-silt bg-pipra-limestone/50 px-3.5 py-1.5 border border-[var(--border-hairline)] rounded-xs self-start sm:self-auto">
                  Pipra means Peepul
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Observations Dossier (approx 42%) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-8 lg:border-l lg:border-[var(--border-hairline)]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-hairline)]">
              <span className="font-mono text-xs uppercase tracking-widest text-pipra-terracotta">
                Contextual Observations
              </span>
              <span className="font-mono text-xs text-pipra-silt">
                01 — 03
              </span>
            </div>

            {/* Unified Architectural Dossier */}
            <div className="border border-[var(--border-hairline)] divide-y divide-[var(--border-hairline)] bg-pipra-limestone/30 rounded-xs">
              {/* Example 1: Champaran Meat */}
              <div className="p-6 transition-editorial hover:bg-pipra-limestone/50">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta block mb-2">
                  01 // Regional Demand
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2.5">
                  Champaran Meat
                </h3>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  An example of how a recipe can create demand and economic infrastructure.
                </p>
              </div>

              {/* Example 2: Magatte Wade & Hibiscus */}
              <div className="p-6 transition-editorial hover:bg-pipra-limestone/50">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta block mb-2">
                  02 // Cultural Material
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2.5">
                  Magatte Wade &amp; Hibiscus
                </h3>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  An example of local cultural material becoming a globally relevant product.
                </p>
              </div>

              {/* Example 3: Starbucks in Seattle */}
              <div className="p-6 transition-editorial hover:bg-pipra-limestone/50">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta block mb-2">
                  03 // Systemic Infrastructure
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2.5">
                  Starbucks in Seattle
                </h3>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  An example of how infrastructure around an ordinary product can
                  include supply chains, training, quality, space, design, trust,
                  experience, and replication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
