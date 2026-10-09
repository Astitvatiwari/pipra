import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const FOUNDER: TeamMember = {
  name: "Sanjeev Kumar",
  role: "Founder",
  image: "/images/team/sanjeev-kumar.jpg",
  linkedin: "https://www.linkedin.com/in/sansjeev/",
};

const FOUNDING_TEAM: TeamMember[] = [
  {
    name: "Yashaswini Mohanty",
    role: "Founding Team",
    image: "/images/team/yashaswini-mohanty.png",
    linkedin: "https://www.linkedin.com/in/yashaswinimohanty/",
  },
  {
    name: "Astitva Tiwari",
    role: "Founding Team",
    image: "/images/team/astitva-tiwari.png",
    linkedin: "https://www.linkedin.com/in/astitva-tiwari-960185371/",
  },
];

export default function FoundingTeamSection() {
  return (
    <section
      id="founding-team"
      aria-label="Founding Team"
      className="relative w-full bg-[#121615] text-[#F5F8F7] section-spacing border-t border-white/10 overflow-hidden"
    >
      {/* Background Atmosphere — Documentary River Canvas with Deep Vignettes */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/pipra-ganges-boats-sunrise.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-10 filter grayscale contrast-125"
        />
        {/* Vertical gradient protection ensuring dark atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121615] via-[#121615]/92 to-[#121615]" />
        {/* Subtle radial spotlight focused behind the Founder presentation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_35%,rgba(200,142,58,0.07),transparent_75%)]" />
      </div>

      <div className="relative z-10 container-pipra">
        {/* Section Header / Restrained Eyebrow */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-pipra-amber font-medium pb-2 border-b border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-pipra-amber" />
            <span>Founding Team</span>
          </div>
        </div>

        {/* 1. Prominent Founder Presentation — Sanjeev Kumar */}
        <div className="max-w-[620px] w-full mx-auto relative group">
          <div className="relative bg-[#161B1A]/85 hover:bg-[#161B1A]/95 border border-white/15 hover:border-pipra-amber/40 rounded-xs p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-editorial overflow-hidden">
            {/* Subtle top hairline highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Founder Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.24em] text-pipra-amber font-medium mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-pipra-amber" />
              <span>Founder</span>
            </div>

            {/* Dominant Portrait Presentation Frame */}
            <div className="relative mb-5 sm:mb-6">
              <div className="w-52 h-64 sm:w-60 sm:h-74 md:w-68 md:h-84 rounded-xs border border-white/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xs relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.45)] group-hover:border-pipra-amber/50 transition-editorial">
                <Image
                  src={FOUNDER.image}
                  alt={`${FOUNDER.name}, ${FOUNDER.role}`}
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 272px"
                  className="object-cover object-center filter contrast-[1.02] transition-editorial group-hover:scale-[1.02]"
                  priority
                />
                {/* Subtle inner hairline and soft shadow overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121615]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Founder Name in Newsreader Serif */}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-[#F5F8F7] font-normal tracking-tight leading-tight mb-2">
              {FOUNDER.name}
            </h3>

            {/* Role Descriptor in Geist Mono */}
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8FA3A2] mb-5">
              {FOUNDER.role}
            </p>

            {/* Subtle LinkedIn Link */}
            <div className="pt-4 border-t border-white/10 w-full max-w-[200px] flex items-center justify-center">
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-[#8FA3A2] hover:text-[#F5F8F7] transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-amber group/link"
                aria-label={`${FOUNDER.name} on LinkedIn`}
              >
                <span>LinkedIn</span>
                <span
                  aria-hidden="true"
                  className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Architectural Axis Connector */}
        <div className="flex justify-center my-8 sm:my-10">
          <div className="h-8 sm:h-10 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        </div>

        {/* 2. Founding Team Members Row — Yashaswini Mohanty & Astitva Tiwari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[760px] mx-auto">
          {FOUNDING_TEAM.map((member) => (
            <div
              key={member.name}
              className="relative group bg-[#161B1A]/70 hover:bg-[#161B1A]/90 border border-white/10 hover:border-white/25 rounded-xs p-5 sm:p-7 text-center flex flex-col items-center justify-between backdrop-blur-xs shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-editorial overflow-hidden"
            >
              {/* Subtle top hairline highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex flex-col items-center w-full">
                {/* Balanced Portrait Frame */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-36 h-45 sm:w-40 sm:h-50 md:w-44 md:h-55 rounded-xs border border-white/15 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xs relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] group-hover:border-white/30 transition-editorial">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 176px"
                      className="object-cover object-center filter contrast-[1.02] transition-editorial group-hover:scale-[1.02]"
                    />
                    {/* Subtle inner hairline and soft shadow overlay */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121615]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Member Name in Newsreader Serif */}
                <h4 className="font-serif text-2xl sm:text-[1.65rem] text-[#F5F8F7] font-normal tracking-tight leading-snug mb-1.5">
                  {member.name}
                </h4>

                {/* Member Role in Geist Mono */}
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8FA3A2] mb-5">
                  {member.role}
                </p>
              </div>

              {/* Subtle LinkedIn Link */}
              <div className="pt-3.5 border-t border-white/10 w-full flex items-center justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-[#8FA3A2] hover:text-[#F5F8F7] transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-amber group/link"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <span>LinkedIn</span>
                  <span
                    aria-hidden="true"
                    className="text-[10px] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
