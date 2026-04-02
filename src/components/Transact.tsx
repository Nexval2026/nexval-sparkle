import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '1', title: 'Objektsuche', desc: 'Identifikation geeigneter Immobilien mit stabilem Marktumfeld und Entwicklungspotenzial' },
  { num: '2', title: 'Analyse', desc: 'Bewertung von Standort, Wirtschaftlichkeit und Potenzial mit fundierten Marktanalysen' },
  { num: '3', title: 'Transaktionsbegleitung', desc: 'Begleitung des gesamten Ankaufsprozesses bis zur notariellen Beurkundung' },
];

export default function Transact() {
  const ref = useScrollReveal();

  return (
    <section id="transact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <span className="section-label">TRANSACT</span>
          <h2 className="section-headline mint-underline mt-2">NEXVAL TRANSACT</h2>
          <p className="mt-6 text-gray-sub">Immobilientransaktionen – strukturiert und fundiert</p>
        </div>

        <div className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="card-light flex items-start gap-5 scroll-reveal">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                style={{ backgroundColor: 'hsl(var(--navy))' }}>
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-navy-text">{s.title}</h3>
                <p className="text-sm text-gray-text mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 scroll-reveal"
          style={{ backgroundColor: 'hsl(var(--navy-card))' }}>
          <div>
            <p className="font-bold text-white text-lg">Interesse an einer Bestandsimmobilie?</p>
            <p className="text-white/50 text-sm mt-1">Wir finden und analysieren passende Objekte für Sie.</p>
          </div>
          <a href="#contact" className="btn-mint flex-shrink-0">KONTAKT</a>
        </div>
      </div>
    </section>
  );
}
