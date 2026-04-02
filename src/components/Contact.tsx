import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useRef, FormEvent } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
  const ref = useScrollReveal();
  const [sending, setSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  const isValid = privacyChecked && !!captchaToken;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('h-captcha-response', captchaToken!);

    try {
      const res = await fetch('https://formspree.io/f/mwvwnbnj', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        toast.success('Nachricht gesendet! Wir melden uns bei Ihnen.');
        form.reset();
        setPrivacyChecked(false);
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        toast.error('Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch {
      toast.error('Netzwerkfehler. Bitte versuchen Sie es später erneut.');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border px-4 py-3.5 text-sm outline-none transition-colors duration-300 bg-secondary text-foreground border-border focus:border-mint placeholder:text-muted-foreground';

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-xl">
        <div className="scroll-reveal text-center">
          <h2 className="section-headline">Kontakt</h2>
          <p className="text-mint text-3xl md:text-4xl font-bold mint-underline mt-1">aufnehmen.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-4 scroll-reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="vorname" placeholder="Vorname" required className={inputClass} />
            <input type="text" name="nachname" placeholder="Nachname" required className={inputClass} />
          </div>
          <input type="email" name="email" placeholder="E-Mail" required className={inputClass} />
          <input type="tel" name="telefon" placeholder="Telefon" className={inputClass} />
          <textarea name="nachricht" placeholder="Nachricht" rows={4} required className={inputClass + ' resize-none'} />

          {/* hCaptcha */}
          <div className="flex justify-center">
            <HCaptcha
              ref={captchaRef}
              sitekey="0b3a5b12-828c-486e-b7ac-7582bf82590e"
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
            />
          </div>

          {/* Privacy checkbox */}
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-border accent-mint flex-shrink-0"
            />
            <span className="text-sm text-muted-foreground">
              Ich habe die{' '}
              <Link to="/datenschutz" className="text-mint hover:underline" target="_blank">
                Datenschutzerklärung
              </Link>{' '}
              gelesen und stimme der Verarbeitung meiner Daten zu.
            </span>
          </label>

          <button type="submit" disabled={!isValid || sending} className="btn-mint w-full disabled:opacity-50 disabled:cursor-not-allowed">
            {sending ? 'WIRD GESENDET...' : 'NACHRICHT SENDEN'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-text scroll-reveal">
          Alternativ erreichen Sie uns direkt unter{' '}
          <a href="mailto:info@nexval.de" className="text-mint hover:underline">
            info@nexval.de
          </a>
        </p>

        <div className="mt-12 text-center text-sm text-gray-text scroll-reveal space-y-1">
          <p className="font-semibold text-navy-text">Nexval GmbH i.G.</p>
          <p>Hans-Henny-Jahnn-Weg 41-45, 22085 Hamburg</p>
          <p>info@nexval.de | www.nexval.de</p>
        </div>
      </div>
    </section>
  );
}
