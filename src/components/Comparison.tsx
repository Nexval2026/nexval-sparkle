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
    <section className="py-24" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="section-headline-white mint-underline">Neubau vs. Bestand</h2>
          <p className="mt-6 text-white/50">Warum sich ein Neubauinvestment lohnt</p>
        </div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Bestand card */}
          <div className="rounded-2xl border p-6 md:p-8 scroll-reveal" style={{ backgroundColor: 'hsl(var(--navy-card))', borderColor: 'hsl(var(--navy-border))' }}>
            <h3 className="text-xl font-bold text-white/40 mb-6">Bestand</h3>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <span className="text-sm text-white/40">{r.label}</span>
                  <span className="text-sm font-semibold text-white/50">{r.bestand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neubau card */}
          <div className="rounded-2xl border-2 p-6 md:p-8 relative scroll-reveal" style={{ backgroundColor: 'hsl(var(--navy-card))', borderColor: 'hsl(var(--mint))' }}>
            {/* Badge */}
            <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: 'hsl(var(--mint))', color: 'hsl(var(--navy))' }}>
              Unsere Empfehlung
            </span>
            <h3 className="text-xl font-bold text-mint mb-6">Neubau</h3>
            <div className="space-y-4">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(93,250,177,0.1)' }}>
                  <span className="text-sm text-white/60">{r.label}</span>
                  <span className={`text-sm font-semibold ${r.highlight ? 'text-mint' : 'text-white'}`}>{r.neubau}</span>
                </div>
              ))}
            </div>
          </div>
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
        <p className="mt-6 text-xs text-white/30 scroll-reveal">
          Beispielrechnung auf Basis einer Doppelhaushälfte mit 2 Wohneinheiten (Stand 04/2026). Annahmen: KfW-Förderdarlehen zu marktüblichen Konditionen, Spitzensteuersatz 42 %, Betrachtungszeitraum 10 Jahre. Zinssätze und Konditionen können variieren. Individuelle Ergebnisse können abweichen. Die dargestellten Werte dienen der Veranschaulichung und stellen keine Zusicherung dar. Bitte konsultieren Sie Ihren Steuerberater für eine individuelle Berechnung.
        </p>
      </div>
    </section>
  );
}
