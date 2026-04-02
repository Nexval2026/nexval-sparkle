import { Link } from 'react-router-dom';

const links = [
  { label: 'PRIME', href: '#prime' },
  { label: 'TRANSACT', href: '#transact' },
  { label: 'OPS', href: '#ops' },
  { label: 'Über uns', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'hsl(218,50%,12%)' }} className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/images/nexval-logo.png" alt="Nexval" className="h-8" />
            <p className="text-white/30 text-sm mt-4 leading-relaxed">
              Hans-Henny-Jahnn-Weg 41-45<br />22085 Hamburg
            </p>
            <p className="text-white/30 text-sm mt-1">info@nexval.de</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-5">Quick Links</h4>
            <div className="space-y-2.5">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block text-sm text-white/35 hover:text-mint transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-5">Rechtliches</h4>
            <div className="space-y-2.5">
              <Link to="/impressum" className="block text-sm text-white/35 hover:text-mint transition-colors duration-300">Impressum</Link>
              <Link to="/datenschutz" className="block text-sm text-white/35 hover:text-mint transition-colors duration-300">Datenschutz</Link>
              <Link to="/datenschutz#cookies" className="block text-sm text-white/35 hover:text-mint transition-colors duration-300">Cookie Richtlinie (EU)</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-white/25 text-xs text-center">
            © 2026 Nexval GmbH i.G. | Alle Rechte vorbehalten.
          </p>
          <p className="text-white/15 text-[10px] text-center mt-2">
            Hinweis: Steuerliche Vorteile sind individuell. Wir empfehlen die Beratung durch einen Steuerberater.
          </p>
        </div>
      </div>
    </footer>
  );
}
