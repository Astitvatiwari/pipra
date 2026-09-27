const INVITATION_ACTIONS = ["Eat", "Host", "Discover", "Document", "Build"];

export default function DialogueSection() {
  return (
    <section
      id="dialogue"
      aria-label="Institutional Dialogue and Invitation"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header / Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pipra-terracotta">
            07 // The Invitation
          </span>
        </div>

        {/* Primary Invitation Headline & Narrative */}
        <div className="max-w-5xl">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.12]">
            How can we enable the world to experience India?
          </h2>

          <p className="font-sans text-pipra-silt mt-6 text-base sm:text-lg leading-relaxed reading-width">
            Pipra is beginning with food, but the larger inquiry reaches
            further: how can traditional knowledge become accessible,
            trusted, desirable, and economically valuable without losing the
            context that gives it meaning?
          </p>
        </div>

        {/* The 5 Actions Typographic Index Rail */}
        <div className="mt-14 sm:mt-16">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-hairline)] mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-pipra-silt">
              Ways of Engaging // The Five Practices
            </span>
            <span className="font-mono text-xs text-pipra-terracotta hidden sm:inline">
              01 — 05
            </span>
          </div>

          <div className="border-t border-b border-[var(--border-hairline)] grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-hairline)]">
            {INVITATION_ACTIONS.map((action, idx) => (
              <div
                key={action}
                className="py-6 px-4 sm:px-6 flex sm:flex-col justify-between items-baseline sm:items-start group transition-editorial hover:bg-pipra-limestone/30"
              >
                <span className="font-mono text-xs text-pipra-terracotta tracking-widest block mb-2 sm:mb-4">
                  0{idx + 1}
                </span>
                <span className="font-serif text-2xl lg:text-3xl text-pipra-charcoal font-normal group-hover:text-pipra-terracotta transition-editorial">
                  {action}
                </span>
              </div>
            ))}
          </div>

          {/* Restrained Final CTA */}
          <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-serif italic text-base sm:text-lg text-pipra-silt">
              Traditional food knowledge made globally accessible, trusted, and economically valuable.
            </p>
            <a
              href="#dialogue"
              className="btn-pipra-primary text-xs uppercase tracking-[0.14em] self-start sm:self-auto shrink-0 inline-flex items-center gap-2"
            >
              <span>Start a conversation</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Pipra Lab: Research Footnote & Institutional Extension */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[var(--border-hairline)]">
          <div className="bg-pipra-limestone/40 border border-[var(--border-hairline)] rounded-xs p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-pipra-terracotta">
                PIPRA LAB // RESEARCH &amp; INQUIRY
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-pipra-silt">
                Institutional Extension
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl text-pipra-charcoal font-normal">
                  Questions worth exploring.
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed">
                  Pipra Lab is a space for research, experimentation, and
                  questions about food, culture, nutrition, knowledge, and the
                  systems that connect them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
