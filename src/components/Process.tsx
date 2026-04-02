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
    <section className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Prozess & Standorte</h2>
          <p className="mt-6 section-subtext">Ihr Weg zum Neubauinvestment</p>
        </div>

        <div className="mt-14 relative pl-10 md:pl-14">
          <div className="absolute left-[14px] md:left-[22px] top-0 bottom-0 w-px" style={{ backgroundColor: 'hsl(var(--border))' }} />
          {steps.map((s, i) => (
            <div key={i} className="relative mb-12 last:mb-0 scroll-reveal">
              <div className="absolute -left-[26px] md:-left-[30px] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold"
                style={{ backgroundColor: 'hsl(var(--mint))', color: 'hsl(var(--navy))' }}>
                {i + 1}
              </div>
              <div className="ml-4 md:ml-6">
                <h3 className="font-semibold text-navy-text text-lg">{s.title}</h3>
                <p className="text-gray-text text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 scroll-reveal">
          <h3 className="text-2xl font-semibold text-navy-text mint-underline tracking-tight">Standorte</h3>
          <p className="mt-6 text-gray-text max-w-xl leading-relaxed">
            Wachstumsstarke Wohnlagen nahe Metropolregionen. Fokus auf familienorientierte Lagen mit stabiler Nachfrage.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {tags.map((t) => (
              <span key={t} className="px-5 py-2.5 rounded-full text-sm font-medium text-navy-text transition-colors hover:bg-mint hover:text-navy-text"
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
