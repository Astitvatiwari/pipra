export default function SymbolsSection() {
  return (
    <section
      id="symbols"
      aria-label="The Symbols - Peepul and Kurma"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
            06 // The Symbols
          </span>
        </div>

        {/* Main Heading & Introduction */}
        <div className="max-w-5xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.12]">
            Rooted in tradition. Open to inquiry.
          </h2>

          <p className="font-sans text-pipra-silt mt-6 text-base sm:text-lg leading-relaxed max-w-3xl">
            Pipra draws from two symbols: the Peepul and the tortoise. One
            suggests rootedness and outward growth; the other suggests
            withdrawal and inward reflection.
          </p>
        </div>

        {/* Quiet Editorial Diptych: Peepul & Kūrma */}
        <div className="mt-16 sm:mt-20 border-t border-b border-[var(--border-hairline)] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-hairline)]">
          {/* Left Panel: Peepul (Outward Growth) */}
          <div className="p-8 sm:p-10 lg:p-14 bg-pipra-paper flex flex-col justify-between transition-editorial">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-8 font-mono text-xs uppercase tracking-widest">
                <span className="text-pipra-terracotta">01 // PEEPUL</span>
                <span className="text-pipra-silt">Outward Growth</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-pipra-charcoal font-normal leading-snug mb-6">
                Rooted. Gathering. Reaching outward.
              </h3>

              <div className="space-y-4">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed">
                  The Peepul is rooted in place, yet its branches spread outward.
                  It evokes shade, conversation, gathering, and inquiry.
                </p>

                <p className="font-serif italic text-base sm:text-lg text-pipra-charcoal leading-relaxed font-normal">
                  For Pipra, it is a reminder that meaningful systems begin
                  somewhere specific before reaching beyond their place of
                  origin.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[var(--border-hairline)] font-mono text-[11px] text-pipra-silt uppercase tracking-wider">
              Dimension // Rootedness &amp; Outward Growth
            </div>
          </div>

          {/* Right Panel: Kūrma (Inward Movement) */}
          <div className="p-8 sm:p-10 lg:p-14 bg-pipra-limestone/40 flex flex-col justify-between transition-editorial">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-8 font-mono text-xs uppercase tracking-widest">
                <span className="text-pipra-terracotta">02 // KŪRMA</span>
                <span className="text-pipra-silt">Inward Movement</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-pipra-charcoal font-normal leading-snug mb-6">
                Withdraw. Reflect. Begin again.
              </h3>

              <div className="space-y-4">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed">
                  The tortoise suggests withdrawal and inward reflection. It
                  represents the movement inward before moving outward again.
                </p>

                <p className="font-serif italic text-base sm:text-lg text-pipra-charcoal leading-relaxed font-normal">
                  For Pipra, tradition is not a fixed endpoint. It is a starting
                  point for inquiry.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[var(--border-hairline)] font-mono text-[11px] text-pipra-silt uppercase tracking-wider">
              Dimension // Inward Reflection &amp; Inquiry
            </div>
          </div>
        </div>

        {/* Closing Concluding Statement */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-[var(--border-hairline)] text-center sm:text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-pipra-charcoal max-w-2xl leading-tight">
            &ldquo;Rootedness gives inquiry a place to begin.&rdquo;
          </p>

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta shrink-0">
            The Philosophy of Pipra
          </span>
        </div>
      </div>
    </section>
  );
}
