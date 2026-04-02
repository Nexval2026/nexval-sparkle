import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  { src: '/images/project-1.jpeg', label: 'Doppelhaus – Drohnenansicht' },
  { src: '/images/project-2.jpeg', label: 'Neubau mit Solaranlage' },
  { src: '/images/project-3.jpeg', label: 'Bauphase – Rohbau' },
  { src: '/images/project-4.jpeg', label: 'Moderne Küche mit Kochinsel' },
  { src: '/images/project-5.jpeg', label: 'Offener Wohn-/Essbereich' },
  { src: '/images/project-6.jpeg', label: 'Badezimmer – Hochwertige Ausstattung' },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mint-underline">Aktuelle Projekte</h2>
          <p className="mt-6 text-white/50">Einblicke in unsere PRIME-Neubauprojekte</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {projects.map((p, i) => (
            <div key={i} className="relative group rounded-xl overflow-hidden aspect-[4/3] scroll-reveal bg-white/5">
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/40 scroll-reveal">
          Musterprojekt zur Veranschaulichung. Standort und Ausstattung können bei zukünftigen Projekten variieren.
        </p>
      </div>
    </section>
  );
}
