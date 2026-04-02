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
    <section className="py-28" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <h2 className="section-headline-white mint-underline">Neubau vs. Bestand</h2>
          <p className="mt-6 text-white/45 text-base md:text-lg">Warum sich ein Neubauinvestment lohnt</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {/* Bestand card */}
          <div className="card-dark scroll-reveal">
            <h3 className="text-lg font-semibold text-white/35 mb-8">Bestand</h3>
            <div className="space-y-0">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.05]">
                  <span className="text-sm text-white/35">{r.label}</span>
                  <span className="text-sm font-medium text-white/45">{r.bestand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neubau card */}
          <div className="rounded-2xl p-6 md:p-8 relative scroll-reveal transition-all duration-300" style={{ backgroundColor: 'hsl(var(--navy-card))', border: '1.5px solid hsl(var(--mint) / 0.4)' }}>
            <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: 'hsl(var(--mint))', color: 'hsl(var(--navy))' }}>
              Unsere Empfehlung
            </span>
            <h3 className="text-lg font-semibold text-mint mb-8">Neubau</h3>
            <div className="space-y-0">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-mint/[0.08]">
                  <span className="text-sm text-white/55">{r.label}</span>
                  <span className={`text-sm font-medium ${r.highlight ? 'text-mint' : 'text-white/80'}`}>{r.neubau}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result banner */}
        <div className="mt-10 rounded-2xl p-8 md:p-10 scroll-reveal" style={{ backgroundColor: 'hsl(var(--mint))' }}>
          <p className="text-xl md:text-2xl font-semibold tracking-tight" style={{ color: 'hsl(var(--navy))' }}>
            Ergebnis: Bis zu +167.000 € Mehrperformance mit Neubau
          </p>
          <p className="text-sm mt-2 opacity-70" style={{ color: 'hsl(var(--navy))' }}>
            Dank KfW-Förderung, optimierter AfA und geringerer Nebenkosten.
          </p>
        </div>

        <p className="mt-8 text-xs text-white/25 scroll-reveal leading-relaxed">
          Beispielrechnung auf Basis einer Doppelhaushälfte mit 2 Wohneinheiten (Stand 04/2026). Annahmen: KfW-Förderdarlehen zu marktüblichen Konditionen, Spitzensteuersatz 42 %, Betrachtungszeitraum 10 Jahre. Zinssätze und Konditionen können variieren. Individuelle Ergebnisse können abweichen. Die dargestellten Werte dienen der Veranschaulichung und stellen keine Zusicherung dar. Bitte konsultieren Sie Ihren Steuerberater für eine individuelle Berechnung.
        </p>
      </div>
    </section>
  );
}
