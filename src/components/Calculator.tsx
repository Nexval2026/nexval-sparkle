import { useState, useMemo } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Slider } from '@/components/ui/slider';

/* ── § 32a EStG 2024 Grenzsteuersatz ── */
function grenzsteuersatz(zvE: number): number {
  if (zvE <= 11784) return 0;
  if (zvE <= 17005) {
    const y = (zvE - 11784) / 10000;
    // Tarif Zone 2: ESt = (922.98·y + 1400)·y  →  dESt/dzvE = (2·922.98·y + 1400)/10000
    return (2 * 922.98 * y + 1400) / 10000;
  }
  if (zvE <= 66760) {
    const z = (zvE - 17005) / 10000;
    // Zone 3: ESt = (181.19·z + 2397)·z + 1025.38  →  dESt/dzvE = (2·181.19·z + 2397)/10000
    return (2 * 181.19 * z + 2397) / 10000;
  }
  if (zvE <= 277825) return 0.42;
  return 0.45;
}

/* ── Formatter ── */
const eur = (v: number) =>
  v.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
const pct = (v: number) => `${v.toFixed(1)} %`;

/* ── Slider+Input Combo ── */
function SliderInput({
  label, value, onChange, min, max, step, suffix,
}: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; suffix: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm text-white/60">{label}</label>
        <div className="flex items-center gap-1">
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              const n = Number(e.target.value);
              if (!isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
            }}
            className="w-28 text-right bg-transparent border rounded-lg px-3 py-1.5 text-sm font-semibold text-white focus:outline-none focus:ring-1"
            style={{ borderColor: 'hsl(var(--navy-border))' }}
          />
          <span className="text-xs text-white/40 w-6">{suffix}</span>
        </div>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:border-mint [&_[role=slider]]:bg-navy [&_.relative]:h-1.5"
      />
    </div>
  );
}

export default function Calculator() {
  const ref = useScrollReveal();

  const [zvE, setZvE] = useState(80000);
  const [ek, setEk] = useState(150000);
  const [flaeche, setFlaeche] = useState(296);
  const [mieteM2, setMieteM2] = useState(14.5);
  const [jahre, setJahre] = useState(10);

  const result = useMemo(() => {
    const baukostenM2 = 2442.78;
    const grundstueck = 337452;
    const gebaeudePct = 0.636;
    const kfwDarlehen = 300000;
    const kfwZins = 0.0223;
    const kfwTilgung = 0.0165;
    const kfwAnnuitaet = 11640;
    const bankZins = 0.04;
    const bankTilgung = 0.015;
    const afaSatz = 0.05;
    const sonderAfaSatz = 0.05;
    const mietsteigerung = 0.02;

    const investition = flaeche * baukostenM2 + grundstueck;
    const afaBasis = investition * gebaeudePct;
    const bankDarlehen = Math.max(0, investition - ek - kfwDarlehen);
    const bankAnnuitaet = bankDarlehen * (bankZins + bankTilgung);
    const gesamtAnnuitaet = kfwAnnuitaet + bankAnnuitaet;

    const gs = grenzsteuersatz(zvE);

    let restbuchwert = afaBasis;
    let kumuliert = 0;
    let gesamtSteuer = 0;
    let gesamtMiete = 0;
    let tilgungGesamt = 0;

    // Track remaining loan balances for tilgung
    let kfwRest = kfwDarlehen;
    let bankRest = bankDarlehen;

    const rows: {
      jahr: number; afaGesamt: number; steuerersparnis: number;
      miete: number; liquiditaet: number; kumuliertVA: number;
    }[] = [];

    for (let j = 1; j <= jahre; j++) {
      // AfA
      const degressiv = restbuchwert * afaSatz;
      const sonder = j <= 4 ? afaBasis * sonderAfaSatz : 0;
      const afaGesamt = degressiv + sonder;
      restbuchwert -= degressiv; // Sonder-AfA mindert nicht den Restbuchwert für degressive

      const steuerersparnis = afaGesamt * gs;
      gesamtSteuer += steuerersparnis;

      // Miete
      const miete = flaeche * mieteM2 * 12 * Math.pow(1 + mietsteigerung, j - 1);
      gesamtMiete += miete;

      // Tilgung
      const kfwTilgJ = kfwRest * kfwTilgung;
      const bankTilgJ = bankRest * bankTilgung;
      kfwRest -= kfwTilgJ;
      bankRest -= bankTilgJ;
      tilgungGesamt += kfwTilgJ + bankTilgJ;

      const liquiditaet = miete - gesamtAnnuitaet;
      const va = liquiditaet + steuerersparnis;
      kumuliert += va;

      rows.push({ jahr: j, afaGesamt, steuerersparnis, miete, liquiditaet, kumuliertVA: kumuliert });
    }

    const gesamtperformance = kumuliert + tilgungGesamt;
    const ekRendite = (gesamtperformance / ek) * 100;
    const monatlicheLiquiditaet = rows.length > 0 ? rows[0].liquiditaet / 12 : 0;

    return { gs, gesamtSteuer, gesamtMiete, monatlicheLiquiditaet, gesamtperformance, ekRendite, rows };
  }, [zvE, ek, flaeche, mieteM2, jahre]);

  return (
    <section id="rechner" className="py-24" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mint">Rechner</span>
          <h2 className="section-headline-white mint-underline mt-2">Ihr persönlicher Investment-Rechner</h2>
          <p className="mt-6 text-white/50">Berechnen Sie Ihre individuelle Rendite auf Basis realer Projektdaten</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* ── Inputs ── */}
          <div className="lg:col-span-1 space-y-8 scroll-reveal">
            <div className="rounded-2xl border p-6 space-y-6" style={{ backgroundColor: 'hsl(var(--navy-card))', borderColor: 'hsl(var(--navy-border))' }}>
              <SliderInput label="Zu versteuerndes Einkommen" value={zvE} onChange={setZvE} min={20000} max={500000} step={1000} suffix="€" />
              <SliderInput label="Eigenkapital" value={ek} onChange={setEk} min={50000} max={500000} step={5000} suffix="€" />
              <SliderInput label="Wohnfläche gesamt" value={flaeche} onChange={setFlaeche} min={100} max={600} step={1} suffix="m²" />

              <div className="space-y-2">
                <label className="text-sm text-white/60">Miete pro m²</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={mieteM2}
                    step={0.5}
                    min={5}
                    max={30}
                    onChange={(e) => {
                      const n = Number(e.target.value);
                      if (!isNaN(n)) setMieteM2(Math.min(30, Math.max(5, n)));
                    }}
                    className="w-28 text-right bg-transparent border rounded-lg px-3 py-1.5 text-sm font-semibold text-white focus:outline-none focus:ring-1"
                    style={{ borderColor: 'hsl(var(--navy-border))' }}
                  />
                  <span className="text-xs text-white/40">€</span>
                </div>
              </div>

              {/* Betrachtungszeitraum toggle */}
              <div className="space-y-2">
                <label className="text-sm text-white/60">Betrachtungszeitraum</label>
                <div className="flex gap-2">
                  {[5, 10, 15].map((y) => (
                    <button
                      key={y}
                      onClick={() => setJahre(y)}
                      className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                      style={{
                        backgroundColor: jahre === y ? 'hsl(var(--mint))' : 'transparent',
                        color: jahre === y ? 'hsl(var(--navy))' : 'rgba(255,255,255,0.5)',
                        border: `1px solid ${jahre === y ? 'hsl(var(--mint))' : 'hsl(var(--navy-border))'}`,
                      }}
                    >
                      {y} Jahre
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Results ── */}
          <div className="lg:col-span-2 space-y-6 scroll-reveal">
            {/* KPI cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Grenzsteuersatz', val: pct(result.gs * 100) },
                { label: 'Steuerersparnis gesamt', val: eur(result.gesamtSteuer) },
                { label: 'Mieteinnahmen gesamt', val: eur(result.gesamtMiete) },
                { label: 'Mtl. Liquidität (Jahr 1)', val: eur(result.monatlicheLiquiditaet) },
                { label: 'Gesamtperformance netto', val: eur(result.gesamtperformance), highlight: true },
                { label: 'EK-Rendite', val: pct(result.ekRendite), highlight: true },
              ].map((kpi, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: kpi.highlight ? 'hsla(155,94%,67%,0.08)' : 'hsl(var(--navy-card))',
                    borderColor: kpi.highlight ? 'hsl(var(--mint))' : 'hsl(var(--navy-border))',
                  }}
                >
                  <p className="text-xs text-white/40 mb-1">{kpi.label}</p>
                  <p className={`text-lg font-bold ${kpi.highlight ? 'text-mint' : 'text-white'}`}>{kpi.val}</p>
                </div>
              ))}
            </div>

            {/* Yearly table */}
            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: 'hsl(var(--navy-card))', borderColor: 'hsl(var(--navy-border))' }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid hsl(var(--navy-border))' }}>
                      {['Jahr', 'AfA gesamt', 'Steuerersparnis', 'Mieteinnahmen', 'Liquidität', 'Vermögen kum.'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-white/40 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows.map((r) => (
                      <tr key={r.jahr} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td className="px-4 py-2.5 text-white/60">{r.jahr}</td>
                        <td className="px-4 py-2.5 text-white">{eur(r.afaGesamt)}</td>
                        <td className="px-4 py-2.5 text-white">{eur(r.steuerersparnis)}</td>
                        <td className="px-4 py-2.5 text-white">{eur(r.miete)}</td>
                        <td className={`px-4 py-2.5 font-medium ${r.liquiditaet >= 0 ? 'text-mint' : 'text-red-400'}`}>{eur(r.liquiditaet)}</td>
                        <td className="px-4 py-2.5 text-mint font-semibold">{eur(r.kumuliertVA)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-white/30 scroll-reveal">
          Beispielrechnung auf Basis des Projekts Bad Segeberg (Stand 04/2026). Steuerliche Effekte basieren auf § 32a EStG. Individuelle Ergebnisse können abweichen. Bitte konsultieren Sie Ihren Steuerberater.
        </p>
      </div>
    </section>
  );
}
