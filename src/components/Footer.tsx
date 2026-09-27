const BRAND_ARCHITECTURE = [
  {
    name: "Pipra Fish",
    role: "The First Vehicle",
    description: "The first vertical and bounded system experiment.",
  },
  {
    name: "Pipra Lab",
    role: "Research & Experimentation",
    description: "A space for research, testing, and systemic food questions.",
  },
  {
    name: "Supper Circles",
    role: "Regional Foodways",
    description: "Community and dialogue around traditional food knowledge.",
  },
  {
    name: "Pipra Explorers",
    role: "Distributed Network",
    description: "A distributed student and local-knowledge field network.",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-pipra-basalt text-[#F5F8F7] border-t border-white/10 pt-24 sm:pt-32 pb-16 sm:pb-20"
    >
      <div className="container-pipra">
        {/* Primary Closing Statement / Publication Colophon Head */}
        <div className="max-w-4xl pb-16 sm:pb-20 border-b border-white/10">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F8F7] leading-[1.08] tracking-tight">
            Traditional knowledge.
            <br />
            Modern infrastructure.
            <br />
            Global table.
          </h2>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <span className="font-serif text-2xl tracking-[0.2em] font-normal text-[#F5F8F7]">
                PIPRA
              </span>
              <span className="text-white/20 font-mono text-sm hidden sm:inline">|</span>
              <p className="text-sm sm:text-base text-[#8FA3A2] font-sans">
                Building better food systems for a better-nourished India.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-pipra-amber shrink-0">
              Publication Colophon
            </span>
          </div>
        </div>

        {/* Brand Architecture: The Ecosystem Ledger */}
        <div className="py-14 sm:py-20 border-b border-white/10">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10 font-mono text-xs uppercase tracking-widest text-[#8FA3A2]">
            <span>Brand Architecture // The Ecosystem</span>
            <span className="text-pipra-terracotta">Pipra Master Brand</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {BRAND_ARCHITECTURE.map((entity) => (
              <div key={entity.name} className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pipra-amber mb-2">
                  {entity.role}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F8F7] font-normal mb-2.5">
                  {entity.name}
                </h3>
                <p className="text-xs text-[#8FA3A2] leading-relaxed font-sans">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note & Attribution */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8FA3A2]">
          <p className="font-serif italic text-sm text-[#F5F8F7]/85">
            Pipra — Rooted in India. Built for the world.
          </p>
          <p className="font-mono text-[11px] tracking-wider uppercase text-[#8FA3A2]/70">
            &copy; {currentYear} Pipra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
