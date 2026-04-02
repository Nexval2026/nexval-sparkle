import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { title: 'Vermietung', desc: 'Suche geeigneter Mieter, stabile Mietstruktur' },
  { title: 'Mieterbetreuung', desc: 'Ansprechpartner für laufende Anliegen, geringe Fluktuation' },
  { title: 'Objektverwaltung', desc: 'Kaufmännische Abläufe: Abrechnung & Verwaltung' },
  { title: 'Werterhalt', desc: 'Koordination von Wartung und Instandhaltung' },
];

export default function Ops() {
  const ref = useScrollReveal();

  return (
    <section id="ops" className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <span className="section-label">OPS</span>
          <h2 className="section-headline mint-underline mt-3">NEXVAL OPS</h2>
          <p className="mt-6 section-subtext">Operatives Immobilienmanagement aus einer Hand</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {features.map((f, i) => (
            <div key={i} className="card-light scroll-reveal">
              <h3 className="font-semibold text-navy-text">{f.title}</h3>
              <p className="text-sm text-gray-text mt-1.5 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl p-8 md:p-10 scroll-reveal" style={{ backgroundColor: 'hsl(var(--mint-light))' }}>
          <p className="text-xl font-semibold text-mint tracking-tight">PRIME + OPS = Rundum-Sorglos</p>
          <p className="text-gray-text text-sm mt-2 max-w-xl leading-relaxed">
            Kombinieren Sie Ihr Neubauinvestment mit unserem operativen Management für maximale Effizienz.
          </p>
          <a href="#contact" className="btn-mint mt-6 inline-flex">MEHR ERFAHREN</a>
        </div>
      </div>
    </section>
  );
}
