import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  { title: 'Einkommen', desc: 'Stabiles Einkommen zur steuerlichen Optimierung durch Abschreibungsvorteile' },
  { title: 'Eigenkapital', desc: 'Ca. 130.000 - 160.000 EUR Eigenkapital für optimale Finanzierungsstruktur' },
  { title: 'Anlagehorizont', desc: 'Langfristiger Vermögensaufbau, mindestens 10 Jahre empfohlen' },
  { title: 'Bonität', desc: 'Gute Bonität für KfW-Förderung und Bankfinanzierung' },
];

export default function Requirements() {
  const ref = useScrollReveal();

  return (
    <section className="py-24" style={{ backgroundColor: 'hsl(218,50%,12%)' }} ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="section-headline-white mint-underline">Voraussetzungen</h2>
          <p className="mt-6 text-white/50">Was Sie für ein PRIME-Investment mitbringen sollten</p>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="card-dark flex items-start gap-4 scroll-reveal">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--mint))' }} />
              <div>
                <h3 className="font-bold text-lg text-mint">{item.title}</h3>
                <p className="text-white/50 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-reveal">
          <a href="#contact" className="btn-mint">JETZT BERATEN LASSEN</a>
        </div>
      </div>
    </section>
  );
}
