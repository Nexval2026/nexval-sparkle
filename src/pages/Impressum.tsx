import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Impressum() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
        <div className="container mx-auto px-6 py-24 pt-32 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-12">
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Zurück zur Startseite</span>
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

          <div className="space-y-6 text-white/70 text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                Nexval GmbH i.G.<br />
                Hans-Henny-Jahnn-Weg 41-45<br />
                22085 Hamburg
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
              <p>
                E-Mail: info@nexval.de<br />
                Website: www.nexval.de
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Vertretungsberechtigte</h2>
              <p>Nick Sadetzky &amp; Sascha Hesse</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: Beantragt</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Handelsregister</h2>
              <p>Handelsregisternummer: Beantragt</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Nick Sadetzky &amp; Sascha Hesse<br />
                Hans-Henny-Jahnn-Weg 41-45<br />
                22085 Hamburg
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
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
