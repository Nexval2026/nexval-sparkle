import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useScrollReveal();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Nachricht gesendet! Wir melden uns bei Ihnen.');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass = "w-full rounded-lg border px-4 py-3.5 text-sm outline-none transition-colors duration-300 bg-secondary text-foreground border-border focus:border-mint placeholder:text-muted-foreground";

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-xl">
        <div className="scroll-reveal text-center">
          <h2 className="section-headline">Kontakt</h2>
          <p className="text-mint text-3xl md:text-4xl font-bold mint-underline mt-1">aufnehmen.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-4 scroll-reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Vorname" required className={inputClass} />
            <input type="text" placeholder="Nachname" required className={inputClass} />
          </div>
          <input type="email" placeholder="E-Mail" required className={inputClass} />
          <input type="tel" placeholder="Telefon" className={inputClass} />
          <textarea placeholder="Nachricht" rows={4} required className={inputClass + " resize-none"} />
          <button type="submit" disabled={sending} className="btn-mint w-full">
            {sending ? 'WIRD GESENDET...' : 'NACHRICHT SENDEN'}
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-gray-text scroll-reveal space-y-1">
          <p className="font-semibold text-navy-text">Nexval GmbH i.G.</p>
          <p>Hans-Henny-Jahnn-Weg 41-45, 22085 Hamburg</p>
          <p>info@nexval.de | www.nexval.de</p>
        </div>
      </div>
    </section>
  );
}
