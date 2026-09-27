import Image from "next/image";

export default function OriginSection() {
  return (
    <section
      id="origin"
      aria-label="The Origin - Memory and Infrastructure"
      className="section-spacing border-t border-[var(--border-hairline)] bg-pipra-paper text-pipra-charcoal"
    >
      <div className="container-pipra">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-[var(--border-hairline)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pipra-terracotta" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-terracotta font-medium">
              05 // The Origin
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-pipra-silt hidden sm:inline">
            Founder Narrative &amp; Infrastructure
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl text-pipra-charcoal leading-[1.08] tracking-tight">
            Pipra was born between memory and infrastructure.
          </h2>
        </div>

        {/* Monumental Pull-Quote / Central Memory Anchor */}
        <div className="mb-16 sm:mb-20 p-8 sm:p-12 lg:p-16 bg-pipra-limestone/60 border border-[var(--border-hairline)] border-l-4 border-l-pipra-terracotta rounded-xs relative">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta pb-6 mb-8 border-b border-[var(--border-hairline)]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
              Founder&rsquo;s Recollection
            </span>
            <span className="text-pipra-silt">Roughly 23 Years Away</span>
          </div>

          <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-pipra-charcoal leading-[1.18] tracking-tight">
            &ldquo;I searched Jackson Heights. I searched Edison. I tried salmon.
            I tried tilapia. And eventually I came home.&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-pipra-silt">
            <span className="font-medium text-pipra-charcoal uppercase tracking-wider">
              Sanjeev Kumar
            </span>
            <span>2022 // Return to India</span>
          </div>
        </div>

        {/* Asymmetric Editorial Essay & Evidence Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Paced Narrative Arc (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Movement 1 & 2: Memory, Return, and The Core Inquiry */}
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta block">
                The Narrative // Memory &amp; Return
              </span>
              <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                After roughly twenty-three years in the United States, founder Sanjeev Kumar returned
                to India in 2022. One taste had proved impossible to find abroad: his mother’s mustard fish.
              </p>

              <div className="p-6 sm:p-8 bg-pipra-limestone/30 border-l-2 border-pipra-charcoal my-4">
                <p className="font-serif italic text-xl sm:text-2xl text-pipra-charcoal leading-snug">
                  What is missing when a traditional Indian food cannot travel with the people who remember it?
                </p>
              </div>

              <p className="font-sans text-pipra-silt text-base sm:text-lg leading-relaxed reading-width">
                The answer was not simply recipe preservation, but infrastructure: the systems and
                standards that allow culinary inheritance to become trusted, desirable, and economically valuable.
              </p>
            </div>

            {/* Archival Landscape Plate: Agricultural Mustard Field */}
            <div className="my-2">
              <figure
                className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden rounded-xs border border-[var(--border-hairline)] bg-pipra-limestone/40 shadow-sm"
                aria-label="Documentary photograph of a blooming mustard field in rural eastern India"
              >
                <Image
                  src="/images/pipra-mustard-field-landscape.jpg"
                  alt="Blooming yellow mustard field in rural eastern India along the Gangetic plain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center filter saturate-[0.80] brightness-[0.92] contrast-[1.04] sepia-[0.08]"
                />
                {/* Archival Inset Header */}
                <div className="absolute top-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-b from-black/60 via-black/20 to-transparent flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-white/95">
                  <span>FIELD ARCHIVE // AGRICULTURAL COMMONS</span>
                  <span className="text-amber-200">MUSTARD CULTIVATION</span>
                </div>
                {/* Bottom Inset Tag */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between font-mono text-[9px] sm:text-[10px] text-white/90 uppercase tracking-widest">
                  <span>Rural Eastern India // Gangetic Basin</span>
                  <span className="text-white/70">Photo: Pinakpani / CC BY-SA 4.0</span>
                </div>
              </figure>
            </div>

            {/* Movement 3: The Bihar Question */}
            <div className="p-8 sm:p-10 bg-pipra-limestone/50 border border-[var(--border-hairline)] rounded-xs space-y-4">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-pipra-terracotta">
                <span className="w-1.5 h-1.5 rounded-full bg-pipra-terracotta" />
                <span>The Question of Place</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-pipra-charcoal leading-relaxed">
                Bihar possesses deep cultural wealth alongside persistent economic challenges. What does the region already hold that the world would value if the right infrastructure existed?
              </p>
            </div>

            {/* Movement 4: Closing Axiom */}
            <div className="pt-8 border-t border-[var(--border-hairline)] space-y-6">
              <p className="font-serif italic text-2xl sm:text-3xl text-pipra-charcoal leading-snug">
                Pipra was born from this intersection of memory and infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border-hairline)]">
                <p className="font-sans text-pipra-charcoal font-medium text-lg sm:text-xl">
                  How can we enable the world to experience India?
                </p>
                <span className="font-mono text-xs uppercase tracking-widest text-pipra-terracotta bg-pipra-limestone/70 px-4 py-2 border border-[var(--border-hairline)] rounded-xs self-start sm:self-auto">
                  Pipra means Peepul
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Observations Dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6 lg:border-l lg:border-[var(--border-hairline)]">
            <div className="pb-4 border-b border-[var(--border-hairline)]">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-pipra-terracotta mb-2">
                <span>Field Casebook</span>
                <span>01 — 03</span>
              </div>
              <h3 className="font-serif text-2xl text-pipra-charcoal">
                Comparative Observations
              </h3>
              <p className="text-xs font-mono text-pipra-silt mt-1 tracking-wider">
                How recipes and ordinary products become global infrastructure:
              </p>
            </div>

            {/* Architectural Dossier Ledger (Hairline separated, flat, archival) */}
            <div className="border border-[var(--border-hairline)] divide-y divide-[var(--border-hairline)] bg-pipra-limestone/25 rounded-xs">
              {/* Item 01 */}
              <div className="p-6 sm:p-7 hover:bg-pipra-limestone/50 transition-editorial">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta mb-2">
                  <span>01 // Regional Demand</span>
                  <span className="text-pipra-silt">Recipe → Scale</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2">
                  Champaran Meat
                </h4>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  How a regional preparation creates spontaneous demand and rural economic infrastructure.
                </p>
              </div>

              {/* Item 02 */}
              <div className="p-6 sm:p-7 hover:bg-pipra-limestone/50 transition-editorial">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta mb-2">
                  <span>02 // Cultural Material</span>
                  <span className="text-pipra-silt">Local → Global</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2">
                  Magatte Wade &amp; Hibiscus
                </h4>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  Transforming local botanical heritage into a globally valued brand.
                </p>
              </div>

              {/* Item 03 */}
              <div className="p-6 sm:p-7 hover:bg-pipra-limestone/50 transition-editorial">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-pipra-terracotta mb-2">
                  <span>03 // Systemic Infrastructure</span>
                  <span className="text-pipra-silt">Process → Trust</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-pipra-charcoal font-normal mb-2">
                  Starbucks in Seattle
                </h4>
                <p className="font-sans text-pipra-silt text-sm leading-relaxed">
                  Building global trust around an everyday commodity through consistent supply chains, quality, and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
