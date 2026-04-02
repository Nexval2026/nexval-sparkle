import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 'KfW-40 / QNG', label: 'Baustandard', isText: true },
  { value: 'bis 38,5 %', label: 'AfA in 4 Jahren', isText: false },
  { value: '150.000 EUR', label: 'KfW-Förderung', isText: false },
  { value: '10+ Jahre', label: 'Erfahrung', isText: false },
];

function StatItem({ value, label, isText }: { value: string; label: string; isText: boolean }) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-xl md:text-2xl font-bold text-mint">
        {isText ? value : display}
      </span>
      <span className="block text-xs text-white/50 mt-1">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Upper hero with background image */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden"
        style={{ backgroundColor: 'hsl(218,50%,12%)' }}
      >
        <img
          src="/images/Titelbild.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(218,50%,12%)]/55" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[700px] animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[0.95] tracking-[-0.03em]">
              <span className="text-white block">ZUKUNFT BAUEN.</span>
              <span className="text-mint block mt-2">WERTE SICHERN.</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-[500px]" style={{ animationDelay: '200ms' }}>
              Strukturierte Immobilieninvestments mit Fokus auf nachhaltigen Vermögensaufbau.
            </p>
            <div className="mt-8 flex flex-wrap gap-4" style={{ animationDelay: '400ms' }}>
              <a href="#prime" className="btn-mint">PRIME ENTDECKEN</a>
              <a href="#contact" className="btn-outline-mint">KONTAKT</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lower section: cards + stats on dark bg */}
      <section className="py-16" style={{ backgroundColor: '#0a1628' }}>
        <div className="container mx-auto px-6">
          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'PRIME', desc: 'Nachhaltige Neubauinvestments' },
              { title: 'TRANSACT', desc: 'Immobilientransaktionen' },
              { title: 'OPS', desc: 'Operatives Management' },
            ].map((c, i) => (
              <a href={`#${c.title.toLowerCase()}`} key={i} className="glass-card cursor-pointer">
                <h3 className="text-xl font-bold text-mint">{c.title}</h3>
                <p className="text-sm text-white/50 mt-1">{c.desc}</p>
              </a>
            ))}
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
