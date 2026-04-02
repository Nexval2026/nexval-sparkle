import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Datenschutz() {
  const h2Class = "text-lg font-bold text-white mb-2 mt-8";

  return (
    <>
      <Navigation />
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
        <div className="container mx-auto px-6 py-24 pt-32 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-12">
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Zurück zur Startseite</span>
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-white/70 text-sm leading-relaxed">
            <p>
              Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich noch vertraglich vorgeschrieben. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen.
            </p>

            <div>
              <h2 className={h2Class}>Verantwortlicher</h2>
              <p>
                Nexval GmbH, Hans-Henny-Jahnn-Weg 41–45, 22085 Hamburg<br />
                E-Mail: <a href="mailto:info@nexval.de" className="text-mint hover:underline">info@nexval.de</a>
              </p>
              <p className="mt-2">Vertreten durch: Nick Sadetzky &amp; Sascha Hesse</p>
            </div>

            <div>
              <h2 className={h2Class}>Server-Logfiles</h2>
              <p>
                Bei jedem Zugriff auf unsere Website werden Nutzungsdaten durch Ihren Browser übermittelt und in Server-Logfiles gespeichert (aufgerufene Seite, Datum/Uhrzeit, IP-Adresse, übertragene Datenmenge). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines störungsfreien Betriebs.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>Kontaktformular</h2>
              <p>
                Bei Nutzung unseres Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur im von Ihnen angegebenen Umfang. Die Datenverarbeitung dient der Bearbeitung Ihrer Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Ihre Daten werden nach Bearbeitung unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>Formspree (Formularversand)</h2>
              <p>
                Unser Kontaktformular nutzt den Dienst Formspree (Formspree Inc., USA). Die von Ihnen eingegebenen Daten werden an Formspree übermittelt und dort verarbeitet. Weitere Informationen:{' '}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">formspree.io/legal/privacy-policy</a>. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>hCaptcha (Spam-Schutz)</h2>
              <p>
                Wir nutzen hCaptcha (Intuition Machines Inc., USA) zum Schutz unseres Kontaktformulars vor Spam. hCaptcha setzt technisch notwendige Cookies. Weitere Informationen:{' '}
                <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">hcaptcha.com/privacy</a>. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO i.V.m. § 25 Abs. 2 TTDSG.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>Cookies</h2>
              <p>
                Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Rechtsgrundlage: § 25 Abs. 2 TTDSG.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>Ihre Rechte</h2>
              <p>
                Sie haben nach Art. 15–20 DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Beschwerden können Sie bei der zuständigen Aufsichtsbehörde einreichen:
              </p>
              <p className="mt-3">
                Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
                Ludwig-Erhard-Str. 22, 20459 Hamburg<br />
                E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de" className="text-mint hover:underline">mailbox@datenschutz.hamburg.de</a>
              </p>
            </div>

            <p className="text-xs text-white/40 pt-6">Letzte Aktualisierung: April 2026</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
