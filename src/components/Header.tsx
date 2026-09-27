"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "Method", href: "#method" },
  { label: "Pipra Fish", href: "#fish" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Origin", href: "#origin" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile navigation on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-pipra-paper border-b border-[var(--border-hairline)] transition-editorial">
      <div className="container-pipra">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-6">
          {/* Primary Header Logo */}
          <a
            href="#hero"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-pipra-terracotta rounded-xs"
            aria-label="Pipra - Return to top"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Pipra Official Logo"
              width={56}
              height={56}
              priority
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain mix-blend-multiply transition-editorial group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] text-pipra-silt hover:text-pipra-charcoal transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#dialogue"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium text-pipra-charcoal border border-[var(--border-hairline)] rounded-xs hover:border-pipra-charcoal hover:bg-pipra-limestone transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-terracotta"
            >
              Institutional Dialogue
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-pipra-charcoal focus-visible:outline-2 focus-visible:outline-pipra-terracotta rounded-xs"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 bg-pipra-paper z-50 flex flex-col px-6 py-8 border-t border-[var(--border-hairline)] overflow-y-auto md:hidden"
        >
          <div className="flex items-center pb-6 mb-4 border-b border-[var(--border-hairline)]">
            <Image
              src="/images/logo.jpeg"
              alt="Pipra Official Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain mix-blend-multiply"
            />
          </div>

          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-pipra-charcoal hover:text-pipra-terracotta transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-terracotta"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-[var(--border-hairline)]">
              <a
                href="#dialogue"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center py-3 text-xs uppercase tracking-[0.14em] font-medium text-pipra-charcoal border border-[var(--border-hairline)] rounded-xs hover:border-pipra-charcoal hover:bg-pipra-limestone transition-editorial focus-visible:outline-2 focus-visible:outline-pipra-terracotta"
              >
                Institutional Dialogue
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
