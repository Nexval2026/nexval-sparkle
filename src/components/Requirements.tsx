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
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-[44px] font-bold leading-tight text-[hsl(218,50%,12%)] mint-underline">Voraussetzungen</h2>
          <p className="mt-6 text-[hsl(220,9%,46%)]">Was Sie für ein PRIME-Investment mitbringen sollten</p>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-[hsl(220,13%,91%)] bg-[hsl(220,14%,96%)] p-6 flex items-start gap-4 scroll-reveal">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--mint))' }} />
              <div>
                <h3 className="font-bold text-lg text-mint">{item.title}</h3>
                <p className="text-[hsl(220,9%,46%)] text-sm mt-1">{item.desc}</p>
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
