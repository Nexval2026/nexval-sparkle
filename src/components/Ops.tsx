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
    <section id="ops" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <span className="section-label">OPS</span>
          <h2 className="section-headline mint-underline mt-2">NEXVAL OPS</h2>
          <p className="mt-6 text-gray-sub">Operatives Immobilienmanagement aus einer Hand</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {features.map((f, i) => (
            <div key={i} className="card-light scroll-reveal hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-navy-text">{f.title}</h3>
              <p className="text-sm text-gray-text mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="mt-12 rounded-xl p-6 md:p-8 scroll-reveal" style={{ backgroundColor: 'hsl(var(--mint-light))' }}>
          <p className="text-xl md:text-[22px] font-bold text-mint">PRIME + OPS = Rundum-Sorglos</p>
          <p className="text-gray-text text-sm mt-2 max-w-xl">
            Kombinieren Sie Ihr Neubauinvestment mit unserem operativen Management für maximale Effizienz.
          </p>
          <a href="#contact" className="btn-mint mt-4 inline-flex">MEHR ERFAHREN</a>
        </div>
      </div>
    </section>
  );
}
