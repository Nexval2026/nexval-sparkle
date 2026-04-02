import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows = [
  { label: 'Investitionsvolumen', bestand: '1.155.327 €', neubau: '1.136.099 €' },
  { label: 'davon Nebenkosten', bestand: '119.809 €', neubau: '100.581 €' },
  { label: 'Eigenkapitalbedarf', bestand: '155.327 €', neubau: '136.099 €' },
  { label: 'KfW-Förderdarlehen', bestand: '–', neubau: '300.000 €' },
  { label: 'Bankdarlehen', bestand: '1.000.000 €', neubau: '700.000 €' },
  { label: 'Abschreibung nach 10 J.', bestand: '156.181 €', neubau: '396.442 €', highlight: true },
  { label: 'Gesamtperformance 10 J.', bestand: '172.427 €', neubau: '339.419 €', highlight: true },
];

export default function Comparison() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Neubau vs. Bestand</h2>
          <p className="mt-6 text-gray-sub">Warum sich ein Neubauinvestment lohnt</p>
        </div>

        <div className="mt-12 overflow-x-auto scroll-reveal">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: 'hsl(var(--navy))' }}>
                <th className="text-left text-white py-3 px-4 rounded-tl-lg font-semibold">Kennzahl</th>
                <th className="text-left text-white py-3 px-4 font-semibold">Bestand</th>
                <th className="text-left text-white py-3 px-4 rounded-tr-lg font-semibold">Neubau</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-background' : ''} style={i % 2 !== 0 ? { backgroundColor: '#F9FAFB' } : {}}>
                  <td className="py-3 px-4 font-medium text-navy-text">{r.label}</td>
                  <td className="py-3 px-4 text-gray-text">{r.bestand}</td>
                  <td className={`py-3 px-4 font-semibold ${r.highlight ? 'text-mint' : 'text-navy-text'}`}>
                    {r.neubau}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result banner */}
        <div className="mt-8 rounded-xl p-6 md:p-8 scroll-reveal" style={{ backgroundColor: 'hsl(var(--mint))' }}>
          <p className="text-xl font-bold" style={{ color: 'hsl(var(--navy))' }}>
            Ergebnis: Bis zu +167.000 € Mehrperformance mit Neubau
          </p>
          <p className="text-sm mt-1" style={{ color: 'hsl(var(--navy))' }}>
            Dank KfW-Förderung, optimierter AfA und geringerer Nebenkosten.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-muted-foreground/50 scroll-reveal">
          Beispielrechnung auf Basis einer Doppelhaushälfte mit 2 Wohneinheiten (Stand 04/2026). Annahmen: KfW-Förderdarlehen zu marktüblichen Konditionen, Spitzensteuersatz 42 %, Betrachtungszeitraum 10 Jahre. Zinssätze und Konditionen können variieren. Individuelle Ergebnisse können abweichen. Die dargestellten Werte dienen der Veranschaulichung und stellen keine Zusicherung dar. Bitte konsultieren Sie Ihren Steuerberater für eine individuelle Berechnung.
        </p>
      </div>
    </section>
  );
}
