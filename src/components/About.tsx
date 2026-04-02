import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BarChart3, Leaf, TrendingUp, Users } from 'lucide-react';

const values = [
  { icon: BarChart3, title: 'Strukturierter Ansatz', desc: 'Fundierte Analysen und realistische Kalkulationen' },
  { icon: Leaf, title: 'Nachhaltiger Wohnraum', desc: 'Energieeffizient und familienorientiert' },
  { icon: TrendingUp, title: 'Marktexpertise', desc: 'Kontinuierliche Marktbeobachtung' },
  { icon: Users, title: 'Ganzheitliche Betreuung', desc: 'Von der Konzeption bis zur Verwaltung' },
];

const founders = [
  { name: 'Nick Sadetzky', img: '/images/nick.jpg' },
  { name: 'Sascha Hesse', img: '/images/sascha.jpg' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <h2 className="section-headline mint-underline">Über uns</h2>
          <p className="mt-6 section-subtext">Nexval GmbH – Strukturierte Immobilieninvestments aus Hamburg</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {values.map((v, i) => (
            <div key={i} className="text-center scroll-reveal group">
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: 'hsl(var(--mint-light))' }}>
                <v.icon className="w-5 h-5 text-mint" />
              </div>
              <h3 className="font-semibold text-navy-text mt-5">{v.title}</h3>
              <p className="text-sm text-gray-text mt-1.5 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 scroll-reveal">
          <h3 className="text-2xl font-semibold text-navy-text mint-underline tracking-tight">Gründer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {founders.map((f) => (
              <div key={f.name} className="card-light flex items-center gap-5 scroll-reveal">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-16 h-16 rounded-2xl flex-shrink-0 object-cover bg-muted"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-16 h-16 rounded-2xl flex-shrink-0 bg-muted flex items-center justify-center text-muted-foreground text-lg font-semibold';
                    fallback.textContent = f.name.split(' ').map(n => n[0]).join('');
                    el.parentElement?.insertBefore(fallback, el);
                  }}
                />
                <div>
                  <h4 className="font-semibold text-navy-text">{f.name}</h4>
                  <p className="text-sm text-gray-text mt-0.5">Geschäftsführer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
