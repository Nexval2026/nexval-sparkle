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
    <footer style={{ backgroundColor: 'hsl(218,50%,12%)' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Info */}
          <div>
            <img src="/images/nexval-logo.png" alt="Nexval" className="h-10" />
            <p className="text-white/40 text-sm mt-3">
              Nexval GmbH i.G.<br />Hans-Henny-Jahnn-Weg 41-45<br />22085 Hamburg
            </p>
            <p className="text-white/40 text-sm mt-1">info@nexval.de</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block text-sm text-white/40 hover:text-mint transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Rechtliches</h4>
            <div className="space-y-2">
              <Link to="/impressum" className="block text-sm text-white/40 hover:text-mint transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block text-sm text-white/40 hover:text-mint transition-colors">Datenschutz</Link>
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t" style={{ borderColor: 'hsl(222,27%,28%)' }}>
          <p className="text-white/30 text-xs text-center">
            © 2026 Nexval GmbH i.G. | Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-[10px] text-center mt-2">
            Hinweis: Steuerliche Vorteile sind individuell. Wir empfehlen die Beratung durch einen Steuerberater.
          </p>
        </div>
      </div>
    </footer>
  );
}
