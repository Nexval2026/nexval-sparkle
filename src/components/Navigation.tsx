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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        backgroundColor: 'rgba(15,26,46,0.95)',
        backdropFilter: 'blur(20px)',
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
              className="text-sm font-semibold tracking-wider text-white/80 hover:text-mint transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(15,26,46,0.95)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold tracking-wider text-white/80 hover:text-mint transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
