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

            <div>
              <h2 className={h2Class}>1. Verantwortlicher</h2>
              <p>
                Nexval GmbH<br />
                Hans-Henny-Jahnn-Weg 41-45<br />
                22085 Hamburg<br />
                E-Mail: <a href="mailto:info@nexval.de" className="text-mint hover:underline">info@nexval.de</a>
              </p>
              <p className="mt-2">Vertreten durch: Nick Sadetzky &amp; Sascha Hesse</p>
              <p>Handelsregister: Amtsgericht Hamburg, HRB 198324</p>
            </div>

            <div>
              <h2 className={h2Class}>2. Überblick der Verarbeitungen</h2>
              <p>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen. Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben, kann aber für die Nutzung bestimmter Funktionen (z.&nbsp;B. Kontaktformular) erforderlich sein.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>3. Maßgebliche Rechtsgrundlagen</h2>
              <p>Nachfolgend erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO)</strong> – Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.</li>
                <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Verarbeitung ist zur Wahrung unserer berechtigten Interessen erforderlich, sofern nicht die Interessen oder Grundrechte der betroffenen Person überwiegen.</li>
              </ul>
            </div>

            <div>
              <h2 className={h2Class}>4. Hosting</h2>
              <p>
                Unsere Website wird bei United Domains AG (Gautinger Str. 10, 82319 Starnberg, Deutschland) gehostet. Beim Aufruf unserer Website werden automatisch Informationen durch den von Ihnen genutzten Browser an den Server übermittelt und temporär in Server-Logfiles gespeichert. Folgende Daten werden dabei erfasst:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Übertragene Datenmenge</li>
                <li>Meldung über erfolgreichen Abruf</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem des Nutzers</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="mt-2">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Gewährleistung eines störungsfreien Betriebs unserer Website sowie der Verbesserung unseres Angebots. Die Logfiles werden nach 14 Tagen automatisch gelöscht, sofern keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist.
              </p>
              <p className="mt-2">United Domains verarbeitet die Daten ausschließlich in Deutschland/der EU.</p>
            </div>

            <div>
              <h2 className={h2Class}>5. Kontaktformular</h2>
              <p>
                Wenn Sie unser Kontaktformular nutzen, erheben wir die von Ihnen angegebenen personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext). Die Verarbeitung dient der Bearbeitung Ihrer Kontaktanfrage.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
              <p className="mt-2">
                Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten (z.&nbsp;B. handels- oder steuerrechtliche Aufbewahrungsfristen von bis zu 10 Jahren) entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className={h2Class}>6. Formspree (Formularversand)</h2>
              <p>
                Für die Verarbeitung von Kontaktformulardaten nutzen wir den Dienst Formspree (Formspree Inc., 1123 Broadway, Suite 220, New York, NY 10010, USA). Die von Ihnen im Kontaktformular eingegebenen Daten werden an Server von Formspree in den USA übermittelt und dort verarbeitet.
              </p>
              <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der zuverlässigen und effizienten Verarbeitung von Kontaktanfragen.</p>
              <p className="mt-2">
                Drittlandtransfer: Die USA verfügen über einen Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework). Sofern Formspree unter dem Data Privacy Framework zertifiziert ist, erfolgt die Übermittlung auf dieser Grundlage gemäß Art. 45 DSGVO. Ergänzend oder alternativ kommen Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO zur Anwendung.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">formspree.io/legal/privacy-policy</a>
              </p>
            </div>

            <div>
              <h2 className={h2Class}>7. hCaptcha (Spam-Schutz)</h2>
              <p>
                Zum Schutz unseres Kontaktformulars vor automatisiertem Missbrauch (Spam) setzen wir hCaptcha (Intuition Machines Inc., 350 Rhode Island St., Suite 400, San Francisco, CA 94103, USA) ein. hCaptcha analysiert das Verhalten des Websitebesuchers anhand verschiedener Merkmale und setzt dabei technisch notwendige Cookies.
              </p>
              <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO i.V.m. § 25 Abs. 2 TTDSG. Unser berechtigtes Interesse liegt im Schutz unserer Website vor missbräuchlicher automatisierter Nutzung und Spam.</p>
              <p className="mt-2">
                Drittlandtransfer: Die USA verfügen über einen Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework). Sofern Intuition Machines unter dem Data Privacy Framework zertifiziert ist, erfolgt die Übermittlung auf dieser Grundlage gemäß Art. 45 DSGVO. Ergänzend oder alternativ kommen Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO zur Anwendung.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">hcaptcha.com/privacy</a>
              </p>
            </div>

            <div>
              <h2 className={h2Class}>8. Cookies</h2>
              <p>
                Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den ordnungsgemäßen Betrieb der Website erforderlich sind (z.&nbsp;B. hCaptcha-Cookies). Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
              </p>
              <p className="mt-2">Rechtsgrundlage: § 25 Abs. 2 TTDSG (technisch notwendige Cookies sind von der Einwilligungspflicht ausgenommen).</p>
            </div>

            <div>
              <h2 className={h2Class}>9. Ihre Rechte als betroffene Person</h2>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunftsrecht (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Sofern wir Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen. In diesem Fall müssen wir die Verarbeitung einstellen, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>
              <h3 className="text-white font-semibold mt-4 mb-1">Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
              <p>
                Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p className="mt-2">
                Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
                Ludwig-Erhard-Str. 22<br />
                20459 Hamburg<br />
                E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de" className="text-mint hover:underline">mailbox@datenschutz.hamburg.de</a>
              </p>
            </div>

            <p className="text-xs text-white/40 pt-4">Letzte Aktualisierung: 04/2026</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
