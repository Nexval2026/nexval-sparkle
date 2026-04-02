import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-12">
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold">Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

        <div className="space-y-6 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Nexval GmbH i.G.<br />
              Hans-Henny-Jahnn-Weg 41-45<br />
              22085 Hamburg
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
            <p>
              E-Mail: info@nexval.de<br />
              Website: www.nexval.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Vertretungsberechtigte</h2>
            <p>Nick Sadetzky &amp; Sascha Hesse</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: Beantragt</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Handelsregister</h2>
            <p>Handelsregisternummer: Beantragt</p>
          </div>

          <p className="text-xs text-white/40 pt-4">Letzte Aktualisierung: 04/2026</p>
        </div>
      </div>
    </div>
  );
}
