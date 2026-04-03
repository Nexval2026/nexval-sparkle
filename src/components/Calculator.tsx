import { useState, useMemo } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function fmt(n: number) {
  return n.toLocaleString('de-DE', { maximumFractionDigits: 0 });
}
function fmtEur(n: number) {
  return fmt(n) + ' €';
}

export default function Calculator() {
  const ref = useScrollReveal();

  const [income, setIncome] = useState(120000);
  const [equity, setEquity] = useState(136099);
  const [volume, setVolume] = useState(1136099);
  const [area, setArea] = useState(296);
  const [rentPerSqm, setRentPerSqm] = useState(14.5);
  const [years, setYears] = useState(10);

  const taxRate = income <= 62810 ? 0.42 : 0.45;

  const results = useMemo(() => {
    const kfwLoan = 300000;
    const kfwRate = 0.0223;
    const kfwTilgung = 0.0165;
    const kfwAnnuity = kfwLoan * (kfwRate + kfwTilgung); // 11,640

    const bankLoan = Math.max(volume - equity - kfwLoan, 0);
    const bankRate = 0.04;
    const bankTilgung = 0.015;
    const bankAnnuity = bankLoan * (bankRate + bankTilgung);

    const totalAnnuity = kfwAnnuity + bankAnnuity;

    const afaBasis = 686909;
    const degressiveRate = 0.05;
    const sonderAfaRate = 0.05;

    let kfwRemaining = kfwLoan;
    let bankRemaining = bankLoan;
    let afaRestbuchwert = afaBasis;
    let cumulativeWealth = 0;

    const yearlyData: {
      year: number;
      afa: number;
      taxSaving: number;
      rental: number;
      liquidity: number;
      cumulativeWealth: number;
    }[] = [];

    let totalTaxSaving = 0;
    let totalRental = 0;

    for (let y = 1; y <= years; y++) {
      // AfA
      const degressiveAfa = afaRestbuchwert * degressiveRate;
      const sonderAfa = y <= 4 ? afaBasis * sonderAfaRate : 0;
      const afa = degressiveAfa + sonderAfa;
      afaRestbuchwert -= degressiveAfa;

      const taxSaving = afa * taxRate;
      totalTaxSaving += taxSaving;

      // Mieteinnahmen with 2% annual increase
      const rental = area * rentPerSqm * 12 * Math.pow(1.02, y - 1);
      totalRental += rental;

      const liquidity = rental - totalAnnuity;
      const wealthBuildup = liquidity + taxSaving;
      cumulativeWealth += wealthBuildup;

      // Restschuld-Tilgung
      kfwRemaining -= kfwLoan * kfwTilgung;
      bankRemaining -= bankLoan * bankTilgung;

      yearlyData.push({
        year: y,
        afa: Math.round(afa),
        taxSaving: Math.round(taxSaving),
        rental: Math.round(rental),
        liquidity: Math.round(liquidity),
        cumulativeWealth: Math.round(cumulativeWealth),
      });
    }

    const initialDebt = kfwLoan + bankLoan;
    const finalDebt = Math.max(kfwRemaining, 0) + Math.max(bankRemaining, 0);
    const debtReduction = initialDebt - finalDebt;

    const totalPerformance = cumulativeWealth + debtReduction;
    const equityReturn = equity > 0 ? (totalPerformance / equity) * 100 : 0;
    const monthlyLiquidity = yearlyData.length > 0 ? yearlyData[0].liquidity / 12 : 0;

    return {
      totalTaxSaving: Math.round(totalTaxSaving),
      totalRental: Math.round(totalRental),
      monthlyLiquidity: Math.round(monthlyLiquidity),
      totalPerformance: Math.round(totalPerformance),
      equityReturn: Math.round(equityReturn * 10) / 10,
      yearlyData,
      totalAnnuity: Math.round(totalAnnuity),
    };
  }, [income, equity, volume, area, rentPerSqm, years, taxRate]);

  const sliderStyle = {
    accentColor: 'hsl(var(--mint))',
  };

  return (
    <section className="py-24" ref={ref} style={{ backgroundColor: 'hsl(218,50%,12%)' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="scroll-reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4 inline-block"
            style={{ color: 'hsl(var(--mint))' }}
          >
            Rechner
          </span>
          <h2 className="section-headline-white mint-underline">
            Ihr persönlicher Investment-Rechner
          </h2>
          <p className="mt-6 text-white/50">
            Berechnen Sie Ihre individuelle Rendite auf Basis realer Projektdaten
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 scroll-reveal">
          <SliderInput
            label="Jahreseinkommen brutto"
            value={income}
            onChange={setIncome}
            min={50000}
            max={500000}
            step={1000}
            suffix=" €"
            style={sliderStyle}
          />
          <SliderInput
            label="Eigenkapital"
            value={equity}
            onChange={setEquity}
            min={50000}
            max={500000}
            step={1000}
            suffix=" €"
            style={sliderStyle}
          />
          <SliderInput
            label="Investitionsvolumen"
            value={volume}
            onChange={setVolume}
            min={500000}
            max={3000000}
            step={1000}
            suffix=" €"
            style={sliderStyle}
          />
          <SliderInput
            label="Wohnfläche gesamt"
            value={area}
            onChange={setArea}
            min={50}
            max={1000}
            step={1}
            suffix=" m²"
            style={sliderStyle}
          />
          <SliderInput
            label="Miete pro m²"
            value={rentPerSqm}
            onChange={setRentPerSqm}
            min={5}
            max={30}
            step={0.5}
            suffix=" €"
            style={sliderStyle}
          />
          {/* Betrachtungszeitraum Toggle */}
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: 'hsl(var(--navy-card))',
              borderColor: 'hsl(var(--navy-border))',
            }}
          >
            <label className="text-xs text-white/40 uppercase tracking-wider block mb-3">
              Betrachtungszeitraum
            </label>
            <div className="flex gap-2 mt-2">
              {[5, 10, 15].map((y) => (
                <button
                  key={y}
                  onClick={() => setYears(y)}
                  className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    backgroundColor:
                      years === y ? 'hsl(var(--mint))' : 'rgba(255,255,255,0.05)',
                    color:
                      years === y ? 'hsl(var(--navy))' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {y} Jahre
                </button>
              ))}
            </div>
            <p className="text-xs text-white/30 mt-2">
              Grenzsteuersatz: {Math.round(taxRate * 100)} %
            </p>
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 scroll-reveal">
          <ResultCard label="Steuerersparnis gesamt" value={fmtEur(results.totalTaxSaving)} />
          <ResultCard label="Mieteinnahmen gesamt" value={fmtEur(results.totalRental)} />
          <ResultCard label="Monatliche Liquidität" value={fmtEur(results.monthlyLiquidity)} />
          <ResultCard label="Gesamtperformance netto" value={fmtEur(results.totalPerformance)} highlight />
          <ResultCard label="Eigenkapitalrendite" value={results.equityReturn + ' %'} highlight />
        </div>

        {/* Yearly Table */}
        <div className="mt-12 scroll-reveal overflow-x-auto">
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: 'hsl(var(--navy-card))',
              borderColor: 'hsl(var(--navy-border))',
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid hsl(var(--navy-border))' }}>
                  {['Jahr', 'AfA', 'Steuerersparnis', 'Mieteinnahmen', 'Liquidität', 'Vermögensaufbau kum.'].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'hsl(var(--mint))' }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {results.yearlyData.map((row) => (
                  <tr
                    key={row.year}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <td className="px-4 py-3 text-white/60 font-semibold">{row.year}</td>
                    <td className="px-4 py-3 text-white/70">{fmtEur(row.afa)}</td>
                    <td className="px-4 py-3 text-white/70">{fmtEur(row.taxSaving)}</td>
                    <td className="px-4 py-3 text-white/70">{fmtEur(row.rental)}</td>
                    <td className="px-4 py-3 text-white/70">{fmtEur(row.liquidity)}</td>
                    <td
                      className="px-4 py-3 font-semibold"
                      style={{ color: 'hsl(var(--mint))' }}
                    >
                      {fmtEur(row.cumulativeWealth)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-white/30 scroll-reveal">
          Beispielrechnung auf Basis des Projekts Bad Segeberg (Stand 04/2026). Individuelle
          Ergebnisse können abweichen. Bitte konsultieren Sie Ihren Steuerberater.
        </p>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  style,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: 'hsl(var(--navy-card))',
        borderColor: 'hsl(var(--navy-border))',
      }}
    >
      <label className="text-xs text-white/40 uppercase tracking-wider block mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const v = parseFloat(e.target.value);
          if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
        }}
        className="w-full bg-transparent text-white text-lg font-semibold outline-none border-b border-white/10 pb-2 mb-3"
        style={{ appearance: 'textfield' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          ...style,
          background: `linear-gradient(to right, hsl(var(--mint)) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-white/30 mt-1">
        <span>{fmt(min)}{suffix}</span>
        <span>{fmt(max)}{suffix}</span>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border p-5 text-center"
      style={{
        backgroundColor: highlight ? 'hsl(var(--mint))' : 'hsl(var(--navy-card))',
        borderColor: highlight ? 'hsl(var(--mint))' : 'hsl(var(--navy-border))',
      }}
    >
      <p
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color: highlight ? 'hsl(var(--navy))' : 'rgba(255,255,255,0.4)' }}
      >
        {label}
      </p>
      <p
        className="text-xl font-bold"
        style={{ color: highlight ? 'hsl(var(--navy))' : 'white' }}
      >
        {value}
      </p>
    </div>
  );
}
