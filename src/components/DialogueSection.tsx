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
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-terracotta font-medium">
            07 // The Invitation
          </span>
        </div>

        {/* Dominant Emotional Statement */}
        <div className="max-w-5xl mb-16 sm:mb-20">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-pipra-charcoal leading-[1.06] tracking-tight">
            How can we enable the world to experience India?
          </h2>

          <p className="font-sans text-pipra-silt mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl leading-relaxed reading-width">
            Pipra is beginning with food, but the larger inquiry reaches
            further: how can traditional knowledge become accessible,
            trusted, desirable, and economically valuable without losing the
            context that gives it meaning?
          </p>
        </div>

        {/* The Five Practices: Restrained Supporting Index */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-hairline)] mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-pipra-silt">
              Ways of Engaging // The Five Practices
            </span>
            <span className="font-mono text-xs text-pipra-terracotta hidden sm:inline">
              01 — 05
            </span>
          </div>

          <div className="border-t border-b border-[var(--border-hairline)] grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-hairline)]">
            {INVITATION_ACTIONS.map((action, idx) => (
              <div
                key={action}
                className="py-6 px-4 sm:px-6 flex flex-col justify-between group transition-editorial hover:bg-pipra-limestone/40"
              >
                <span className="font-mono text-xs text-pipra-terracotta tracking-widest block mb-3">
                  0{idx + 1}
                </span>
                <span className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal group-hover:text-pipra-terracotta transition-editorial">
                  {action}
                </span>
              </div>
            ))}
          </div>

          {/* Magnetic Final Invitation Block */}
          <div className="mt-12 p-8 sm:p-12 bg-pipra-limestone/50 border border-[var(--border-hairline)] rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-pipra-terracotta block mb-2">
                Open Dialogue
              </span>
              <p className="font-serif italic text-2xl sm:text-3xl text-pipra-charcoal leading-snug">
                Traditional food knowledge made globally accessible, trusted, and economically valuable.
              </p>
            </div>

            <a
              href="#dialogue"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-pipra-charcoal text-[#F7F5F0] text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-pipra-terracotta transition-editorial shrink-0 self-start md:self-auto shadow-sm"
            >
              <span>Start a conversation</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Pipra Lab: Research Footnote & Institutional Extension */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-[var(--border-hairline)]">
          <div className="bg-pipra-limestone/30 border border-[var(--border-hairline)] rounded-xs p-6 sm:p-8 lg:p-10">
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
