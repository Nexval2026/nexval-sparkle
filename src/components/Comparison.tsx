import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows = [
  { label: 'Investitionsvolumen', bestand: '1.155.327 EUR', neubau: '1.136.099 EUR' },
  { label: 'Nebenkosten', bestand: '119.809 EUR', neubau: '100.581 EUR' },
  { label: 'KfW-Kredit', bestand: '0 EUR', neubau: '300.000 EUR (1,65 %)' },
  { label: 'Hausbank-Kredit', bestand: '1.000.000 EUR (4,40 %)', neubau: '700.000 EUR (4,00 %)' },
  { label: 'Eigenkapitalbedarf', bestand: '155.327 EUR', neubau: '136.099 EUR' },
  { label: 'Abschreibung 10 J.', bestand: '156.181 EUR', neubau: '396.442 EUR', highlight: true },
  { label: 'Gesamtperformance 10 J.', bestand: '172.427 EUR', neubau: '339.419 EUR', highlight: true },
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
            Ergebnis: +167.000 EUR Mehrperformance mit Neubau
          </p>
          <p className="text-sm mt-1" style={{ color: 'hsl(var(--navy))' }}>
            Dank KfW-Förderung, optimierter AfA und geringerer Nebenkosten
          </p>
        </div>
      </div>
    </section>
  );
}
