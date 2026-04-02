import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { title: 'Degressive AfA', desc: '5 % p.a. vom Restbuchwert gemäß § 7 Abs. 5a EStG' },
  { title: 'Sonder-AfA', desc: 'Zusätzlich 5 % p.a. in den ersten 4 Jahren (§ 7b EStG)' },
  { title: 'KfW-Förderung', desc: 'Programm 297/298, bis 150.000 EUR pro Einheit, Zinsen unter Marktniveau' },
  { title: 'Nebenkosten', desc: 'Optimiert durch getrennten Grundstücks- und Bauvertrag' },
];

export default function Prime() {
  const ref = useScrollReveal();

  return (
    <section id="prime" className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <span className="section-label">PRIME</span>
          <h2 className="section-headline mint-underline mt-3">NEXVAL PRIME</h2>
          <p className="mt-6 section-subtext max-w-xl">
            Nachhaltige Neubauinvestments in wachstumsstarken Wohnlagen.
          </p>
          <p className="mt-4 text-gray-text leading-relaxed max-w-2xl">
            Unsere PRIME-Investments setzen auf den KfW-40/QNG-Standard und bieten maximale steuerliche Vorteile durch
            degressive und Sonder-AfA. Wir entwickeln energieeffiziente Doppelhäuser in familienorientierten Lagen mit
            stabiler Nachfrage und langfristigem Wertsteigerungspotenzial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {features.map((f, i) => (
            <div key={i} className="card-mint scroll-reveal">
              <h3 className="font-semibold text-navy-text">{f.title}</h3>
              <p className="text-sm text-gray-text mt-1.5 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* AfA Breakdown */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-xl font-semibold text-navy-text">AfA-Breakdown: bis zu 38,5 % in 4 Jahren</h3>
          <div className="mt-5 relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'hsl(var(--gray-light))' }}>
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{ width: '38.5%', background: 'linear-gradient(90deg, hsl(155,94%,67%), hsl(155,80%,50%))' }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-sub">
              Degressive AfA 5 % + Sonder-AfA 5 % in den ersten 4 Jahren
            </p>
            <span className="text-sm font-semibold text-mint">38,5 %</span>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground/50 scroll-reveal leading-relaxed">
          Die dargestellten steuerlichen Vorteile basieren auf der aktuellen Gesetzeslage (Stand 04/2026) und können sich ändern. Steuerliche Effekte hängen von der individuellen Situation ab. Bitte konsultieren Sie Ihren Steuerberater.
        </p>
      </div>
    </section>
  );
}
