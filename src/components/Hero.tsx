import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 'KfW-40 / QNG', label: 'Baustandard', isText: true },
  { value: 'bis 38,5 %', label: 'AfA in 4 Jahren', isText: false },
  { value: '150.000 EUR', label: 'KfW-Förderung', isText: false },
  { value: '10+ Jahre', label: 'Erfahrung', isText: false },
];

function StatItem({ value, label, isText }: { value: string; label: string; isText: boolean }) {
  const { ref, display } = useCountUp(value, 1500);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-lg md:text-xl font-semibold text-mint">
        {isText ? value : display}
      </span>
      <span className="block text-xs text-white/40 mt-1.5 tracking-wide">{label}</span>
    </div>
  );
}

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden"
        style={{ backgroundColor: 'hsl(218,50%,12%)' }}
      >
        <img
          ref={imgRef}
          src="/images/Titelbild.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,50%,12%)]/70 via-[hsl(218,50%,12%)]/50 to-[hsl(218,50%,12%)]/80" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[640px] animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.035em]">
              <span className="text-white block">Zukunft bauen.</span>
              <span className="text-mint block mt-1">Werte sichern.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/50 max-w-[480px] leading-relaxed font-light">
              Strukturierte Immobilieninvestments mit Fokus auf nachhaltigen Vermögensaufbau.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#prime" className="btn-mint">PRIME ENTDECKEN</a>
              <a href="#contact" className="btn-outline-mint">KONTAKT</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'hsl(218,52%,10%)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'PRIME', desc: 'Nachhaltige Neubauinvestments' },
              { title: 'TRANSACT', desc: 'Immobilientransaktionen' },
              { title: 'OPS', desc: 'Operatives Management' },
            ].map((c, i) => (
              <a href={`#${c.title.toLowerCase()}`} key={i} className="glass-card cursor-pointer group">
                <h3 className="text-lg font-semibold text-mint group-hover:text-white transition-colors">{c.title}</h3>
                <p className="text-sm text-white/40 mt-2 leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/[0.06]">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
