import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  { title: 'Einkommen', desc: 'Stabiles Einkommen zur steuerlichen Optimierung durch Abschreibungsvorteile' },
  { title: 'Eigenkapital', desc: 'Ausreichend Eigenkapital für eine solide Finanzierungsstruktur – individuell je nach Projekt und Finanzierungssituation.' },
  { title: 'Anlagehorizont', desc: 'Langfristiger Vermögensaufbau, mindestens 10 Jahre empfohlen' },
  { title: 'Bonität', desc: 'Gute Bonität für KfW-Förderung und Bankfinanzierung' },
];

export default function Requirements() {
  const ref = useScrollReveal();

  return (
    <section className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Voraussetzungen</h2>
          <p className="mt-6 section-subtext">Was Sie für ein PRIME-Investment mitbringen sollten</p>
        </div>

        <div className="mt-14 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-5 scroll-reveal rounded-2xl p-6 transition-all duration-300 hover:shadow-sm" style={{ backgroundColor: 'hsl(var(--gray-light))' }}>
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--mint))' }} />
              <div>
                <h3 className="font-semibold text-lg text-mint">{item.title}</h3>
                <p className="text-gray-text text-sm mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center scroll-reveal">
          <a href="#contact" className="btn-mint">JETZT BERATEN LASSEN</a>
        </div>
      </div>
    </section>
  );
}
