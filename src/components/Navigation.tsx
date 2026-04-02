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
        backgroundColor: scrolled ? 'hsl(218, 50%, 12%)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/">
          <img
            src="/images/nexval-logo.png"
            alt="Nexval"
            className="h-7 transition-all duration-300"
            style={{
              filter: scrolled ? 'brightness(1)' : 'brightness(1)',
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.1em] text-white/60 hover:text-mint transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white/70"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-8 px-6 flex flex-col gap-5"
          style={{ backgroundColor: 'hsl(218, 50%, 12%)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs font-medium tracking-[0.1em] text-white/60 hover:text-mint transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
