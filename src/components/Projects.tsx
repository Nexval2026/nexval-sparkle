import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  { src: '/images/projekt-1.jpeg', label: 'Doppelhaus – Drohnenansicht' },
  { src: '/images/projekt-2.jpeg', label: 'Neubau mit Solaranlage' },
  { src: '/images/projekt-3.jpeg', label: 'Bauphase – Rohbau' },
  { src: '/images/projekt-4.jpeg', label: 'Moderne Küche mit Kochinsel' },
  { src: '/images/projekt-5.jpeg', label: 'Offener Wohn-/Essbereich' },
  { src: '/images/projekt-6.jpeg', label: 'Badezimmer – Hochwertige Ausstattung' },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="scroll-reveal">
          <h2 className="section-headline-white mint-underline">Aktuelle Projekte</h2>
          <p className="mt-6 text-white/40 text-base md:text-lg">Einblicke in unsere PRIME-Neubauprojekte</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {projects.map((p, i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden aspect-[4/3] scroll-reveal bg-white/5">
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-white text-sm font-medium">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/25 scroll-reveal leading-relaxed">
          Musterprojekt zur Veranschaulichung. Standort und Ausstattung können bei zukünftigen Projekten variieren.
        </p>
      </div>
    </section>
  );
}
