import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Datenschutz() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const h2Class = "text-lg font-semibold text-white mb-2 mt-8";

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-12">
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold">Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>

        <div className="space-y-2 text-white/70 text-sm leading-relaxed">
          <h2 className={h2Class}>1. Verantwortlicher</h2>
          <p>
            Nexval GmbH i.G.<br />
            Hans-Henny-Jahnn-Weg 41-45, 22085 Hamburg<br />
            E-Mail: info@nexval.de
          </p>

          <h2 className={h2Class}>2. Hosting</h2>
          <p>
            Unsere Website wird bei einem externen Dienstleister gehostet. Der Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt, und Informationen zu Browser und Betriebssystem. Dies ist erforderlich, um unsere Website korrekt darzustellen, und dient der Sicherstellung der Stabilität und Sicherheit. Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
          </p>

          <h2 className={h2Class}>3. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2 className={h2Class} id="cookies">4. Cookies</h2>
          <p>
            Unsere Website verwendet keine Tracking- oder Analyse-Cookies. Es werden lediglich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind. Diese Cookies werden automatisch nach Ende Ihrer Browser-Sitzung gelöscht. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2 className={h2Class}>5. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
          </p>

          <h2 className={h2Class}>6. Änderung dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.
          </p>

          <p className="text-xs text-white/40 pt-6">Stand: 04/2026</p>
        </div>
      </div>
    </div>
  );
}
