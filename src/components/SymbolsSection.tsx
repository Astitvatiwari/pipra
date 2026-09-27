export default function SymbolsSection() {
  return (
    <section
      id="symbols"
      aria-label="The Symbols - Peepul and Kurma"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-terracotta font-medium">
            06 // The Symbols
          </span>
        </div>

        {/* Main Heading & Contemplative Introduction */}
        <div className="max-w-5xl mb-16 sm:mb-20">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-pipra-charcoal leading-[1.08] tracking-tight">
            Rooted in tradition. Open to inquiry.
          </h2>

          <p className="font-sans text-pipra-silt mt-8 text-lg sm:text-xl leading-relaxed max-w-3xl">
            Pipra draws from two symbols: the Peepul and the tortoise. One
            suggests rootedness and outward growth; the other suggests
            withdrawal and inward reflection.
          </p>
        </div>

        {/* Quiet Contemplative Diptych: Peepul & Kūrma */}
        <div className="border-t border-b border-[var(--border-hairline)] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-hairline)]">
          {/* Left Panel: Peepul (Outward Growth) */}
          <div className="p-8 sm:p-12 lg:p-16 xl:p-20 bg-pipra-paper flex flex-col justify-between transition-editorial">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-10 font-mono text-xs uppercase tracking-widest">
                <span className="text-pipra-terracotta font-medium">01 // PEEPUL</span>
                <span className="text-pipra-silt">Outward Growth</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-pipra-charcoal font-normal leading-snug mb-8">
                Rooted. Gathering. Reaching outward.
              </h3>

              <div className="space-y-6">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed">
                  The Peepul is rooted in place, yet its branches spread outward.
                  It evokes shade, conversation, gathering, and inquiry.
                </p>

                <p className="font-serif italic text-lg sm:text-xl text-pipra-charcoal leading-relaxed font-normal pt-2">
                  For Pipra, it is a reminder that meaningful systems begin
                  somewhere specific before reaching beyond their place of
                  origin.
                </p>
              </div>
            </div>

            <div className="mt-14 pt-6 border-t border-[var(--border-hairline)] font-mono text-[11px] text-pipra-silt uppercase tracking-wider">
              Dimension // Rootedness &amp; Outward Growth
            </div>
          </div>

          {/* Right Panel: Kūrma (Inward Movement) */}
          <div className="p-8 sm:p-12 lg:p-16 xl:p-20 bg-pipra-limestone/50 flex flex-col justify-between transition-editorial">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-10 font-mono text-xs uppercase tracking-widest">
                <span className="text-pipra-terracotta font-medium">02 // KŪRMA</span>
                <span className="text-pipra-silt">Inward Movement</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-pipra-charcoal font-normal leading-snug mb-8">
                Withdraw. Reflect. Begin again.
              </h3>

              <div className="space-y-6">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed">
                  The tortoise suggests withdrawal and inward reflection. It
                  represents the movement inward before moving outward again.
                </p>

                <p className="font-serif italic text-lg sm:text-xl text-pipra-charcoal leading-relaxed font-normal pt-2">
                  For Pipra, tradition is not a fixed endpoint. It is a starting
                  point for inquiry.
                </p>
              </div>
            </div>

            <div className="mt-14 pt-6 border-t border-[var(--border-hairline)] font-mono text-[11px] text-pipra-silt uppercase tracking-wider">
              Dimension // Inward Reflection &amp; Inquiry
            </div>
          </div>
        </div>

        {/* Closing Concluding Statement: Monumental Weight */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-8">
          <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal max-w-3xl leading-[1.12] tracking-tight">
            &ldquo;Rootedness gives inquiry a place to begin.&rdquo;
          </blockquote>

          <span className="font-mono text-xs uppercase tracking-[0.22em] text-pipra-terracotta shrink-0 bg-pipra-limestone/60 px-4 py-2 border border-[var(--border-hairline)] rounded-xs self-start sm:self-auto">
            The Philosophy of Pipra
          </span>
        </div>
      </div>
    </section>
  );
}
