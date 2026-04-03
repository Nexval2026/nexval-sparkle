import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'PRIME', href: '#prime' },
  { label: 'PROJEKTE', href: '#projects' },
  { label: 'TRANSACT', href: '#transact' },
  { label: 'OPS', href: '#ops' },
  { label: 'ÜBER UNS', href: '#about' },
  { label: 'KONTAKT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 transparent' : 'none',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/">
          <img src="/images/nexval-logo.png" alt="Nexval" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold tracking-wider transition-colors duration-300 ${
                scrolled
                  ? 'text-foreground/80 hover:text-accent'
                  : 'text-white/80 hover:text-mint'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mint signature line */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
          <svg viewBox="0 0 1200 8" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,4 C200,1 300,7 500,4 C700,1 900,7 1200,4"
              fill="none"
              stroke="hsl(var(--mint))"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 ${
            scrolled ? 'bg-white/97' : ''
          }`}
          style={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(15,26,46,0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-semibold tracking-wider transition-colors ${
                scrolled
                  ? 'text-foreground/80 hover:text-accent'
                  : 'text-white/80 hover:text-mint'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
