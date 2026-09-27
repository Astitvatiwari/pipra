import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Master Brand Introduction"
      className="relative w-full bg-[#121615] text-[#F7F5F0] overflow-hidden border-b border-white/10"
    >
      {/* Background Photographic Canvas - Ganges River Sunrise */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pipra-ganges-boats-sunrise.jpg"
          alt="Traditional wooden riverboats at sunrise on the Ganges River, Varanasi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-[65%_center] opacity-45 lg:opacity-75 select-none"
        />

        {/* Directional Cinematic Vignettes for Flawless Text Legibility */}
        {/* Left-to-right gradient ensuring WCAG AAA dark background behind typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121615] via-[#121615]/95 sm:via-[#121615]/85 lg:via-[#121615]/75 to-transparent" />
        {/* Vertical gradient protecting top masthead and anchoring the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121615] via-transparent to-black/40" />
      </div>

      {/* Foreground Brand Narrative */}
      <div className="relative z-10 container-pipra flex flex-col justify-between min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] py-12 sm:py-16 lg:py-24">
        {/* Top Archival Metadata Rail */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pipra-amber animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-pipra-amber font-medium">
              PIPRA
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/60">
            <span>Rooted in India</span>
            <span className="text-white/30">•</span>
            <span>Built for the World</span>
          </div>
        </div>

        {/* Center / Dominant Editorial Statement */}
        <div className="max-w-4xl my-auto">
          {/* Primary Cinematic Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] text-[#F7F5F0] font-normal leading-[1.06] tracking-tight">
            Building better food systems for a better-nourished India.
          </h1>

          {/* Secondary Statement & Thesis Excerpt */}
          <div className="mt-8 sm:mt-10 pt-8 border-t border-white/15 max-w-3xl">
            <p className="font-serif italic text-2xl sm:text-3xl text-amber-100/95 leading-snug">
              Rooted in India. Built for the world.
            </p>

            <p className="font-sans text-[#D8D5CC] mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
              India does not lack recipes. India lacks the infrastructure that
              allows recipes to travel. Pipra is exploring how traditional Indian
              food knowledge can become globally accessible, trusted, desirable,
              and economically valuable.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#thesis"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F7F5F0] text-[#121615] font-sans text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:bg-pipra-amber hover:text-white transition-editorial shadow-sm"
            >
              Explore Pipra
            </a>
            <a
              href="#origin"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-[#F7F5F0] font-sans text-xs uppercase tracking-[0.16em] font-medium rounded-xs hover:border-white hover:bg-white/10 transition-editorial"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Bottom Documentary Attribution Ledger */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-white/50 tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>Documentary Record: Traditional riverboats at sunrise on the Ganges, Varanasi</span>
          </div>
          <div>
            <span>Photo: Schwiki / CC BY-SA 4.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
