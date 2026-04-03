import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BarChart3, Leaf, TrendingUp, Users } from 'lucide-react';

const values = [
  { icon: BarChart3, title: 'Strukturierter Ansatz', desc: 'Fundierte Analysen und realistische Kalkulationen' },
  { icon: Leaf, title: 'Nachhaltiger Wohnraum', desc: 'Energieeffizient und familienorientiert' },
  { icon: TrendingUp, title: 'Marktexpertise', desc: 'Kontinuierliche Marktbeobachtung' },
  { icon: Users, title: 'Ganzheitliche Betreuung', desc: 'Von der Konzeption bis zur Verwaltung' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Über uns</h2>
          <p className="mt-6 text-gray-sub">Nexval GmbH – Strukturierte Immobilieninvestments aus Hamburg</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((v, i) => (
            <div key={i} className="text-center scroll-reveal">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--mint-light))' }}>
                <v.icon className="w-6 h-6 text-mint" />
              </div>
              <h3 className="font-bold text-navy-text mt-4">{v.title}</h3>
              <p className="text-sm text-gray-text mt-1">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-2xl font-bold text-navy-text mint-underline">Gründer</h3>
          <div className="mt-8 rounded-2xl overflow-hidden">
            <img
              src="/images/Team.png"
              alt="Nick Sadetzky und Sascha Hesse – Geschäftsführer der Nexval GmbH"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 text-center">
            <div>
              <h4 className="font-bold text-navy-text">Nick Sadetzky</h4>
              <p className="text-sm text-gray-text">Geschäftsführer</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-text">Sascha Hesse</h4>
              <p className="text-sm text-gray-text">Geschäftsführer</p>
            </div>
          </div>
        </div>
        {/* Founders */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-2xl font-bold text-navy-text mint-underline">Gründer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {founders.map((f) => (
              <div key={f.name} className="card-light flex items-center gap-4 scroll-reveal">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-20 h-20 rounded-full flex-shrink-0 object-cover bg-muted"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-20 h-20 rounded-full flex-shrink-0 bg-muted flex items-center justify-center text-muted-foreground text-xl font-bold';
                    fallback.textContent = f.name.split(' ').map(n => n[0]).join('');
                    el.parentElement?.insertBefore(fallback, el);
                  }}
                />
                <div>
                  <h4 className="font-bold text-navy-text">{f.name}</h4>
                  <p className="text-sm text-gray-text">Geschäftsführer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
