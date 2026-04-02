import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '1', title: 'Objektsuche', desc: 'Identifikation geeigneter Immobilien mit stabilem Marktumfeld und Entwicklungspotenzial' },
  { num: '2', title: 'Analyse', desc: 'Bewertung von Standort, Wirtschaftlichkeit und Potenzial mit fundierten Marktanalysen' },
  { num: '3', title: 'Transaktionsbegleitung', desc: 'Begleitung des gesamten Ankaufsprozesses bis zur notariellen Beurkundung' },
];

export default function Transact() {
  const ref = useScrollReveal();

  return (
    <section id="transact" className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <span className="section-label">TRANSACT</span>
          <h2 className="section-headline mint-underline mt-3">NEXVAL TRANSACT</h2>
          <p className="mt-6 section-subtext">Immobilientransaktionen – strukturiert und fundiert</p>
        </div>

        <div className="mt-14 space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="card-light flex items-start gap-5 scroll-reveal">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-semibold text-white"
                style={{ backgroundColor: 'hsl(var(--navy))' }}>
                {s.num}
              </div>
              <div>
                <h3 className="font-semibold text-navy-text">{s.title}</h3>
                <p className="text-sm text-gray-text mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 scroll-reveal"
          style={{ backgroundColor: 'hsl(var(--navy-card))' }}>
          <div>
            <p className="font-semibold text-white text-lg">Interesse an einer Bestandsimmobilie?</p>
            <p className="text-white/40 text-sm mt-1.5 leading-relaxed">Wir finden und analysieren passende Objekte für Sie.</p>
          </div>
          <a href="#contact" className="btn-mint flex-shrink-0">KONTAKT</a>
        </div>
      </div>
    </section>
  );
}
