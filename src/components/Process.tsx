import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { title: 'Konzeption', desc: 'Individuelle Beratung und Investmentstrukturierung' },
  { title: 'Finanzierung', desc: 'KfW-Förderung & optimierte Finanzierungsstruktur' },
  { title: 'Beurkundung', desc: 'Notarielle Beurkundung mit getrennten Verträgen' },
  { title: 'Bauphase', desc: 'Professionelle Baubegleitung bis zur Fertigstellung' },
  { title: 'Übergabe', desc: 'Schlüsselübergabe und Start der Vermietung' },
];

const tags = ['Hamburg', 'Metropolregion Nord', 'Wachstumslagen'];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Prozess & Standorte</h2>
          <p className="mt-6 text-gray-sub">Ihr Weg zum Neubauinvestment</p>
        </div>

        {/* Timeline */}
        <div className="mt-12 relative pl-8 md:pl-12">
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'hsl(var(--border))' }} />
          {steps.map((s, i) => (
            <div key={i} className="relative mb-10 last:mb-0 scroll-reveal">
              <div className="absolute -left-5 md:-left-7 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'hsl(var(--mint))', color: 'hsl(var(--navy))' }}>
                {i + 1}
              </div>
              <div className="ml-8 md:ml-10">
                <h3 className="font-bold text-navy-text text-lg">{s.title}</h3>
                <p className="text-gray-text text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Standorte */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-2xl font-bold text-navy-text mint-underline">Standorte</h3>
          <p className="mt-6 text-gray-text max-w-xl">
            Wachstumsstarke Wohnlagen nahe Metropolregionen. Fokus auf familienorientierte Lagen mit stabiler Nachfrage.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {tags.map((t) => (
              <span key={t} className="px-5 py-2 rounded-full text-sm font-medium text-navy-text"
                style={{ backgroundColor: 'hsl(var(--mint-light))' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
