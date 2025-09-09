"use client";

import { useMemo, useState } from "react";

type Inputs = {
  price: number;
  downPct: number; // %
  ratePct: number; // annual %
  termYears: number;
  taxesAnnual: number;
  insuranceAnnual: number;
  hoaMonthly: number;
};

function fmt(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function Calculator({initialTaxes=0, initialZip=""}:{initialTaxes?: number; initialZip?: string}) {
  const [inputs, setInputs] = useState<Inputs>({
    price: 350000,
    downPct: 20,
    ratePct: 6.75,
    termYears: 30,
    taxesAnnual: initialTaxes || 3000,
    insuranceAnnual: 1200,
    hoaMonthly: 0,
  });

  const loanAmt = useMemo(() => inputs.price * (1 - inputs.downPct/100), [inputs.price, inputs.downPct]);
  const monthly = useMemo(() => {
    const r = inputs.ratePct/100/12;
    const n = inputs.termYears*12;
    const P = loanAmt;
    const principalInterest = r === 0 ? (P/n) : (P * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
    const taxes = (inputs.taxesAnnual || 0)/12;
    const insurance = (inputs.insuranceAnnual || 0)/12;
    const hoa = inputs.hoaMonthly || 0;
    const total = principalInterest + taxes + insurance + hoa;
    return { principalInterest, taxes, insurance, hoa, total };
  }, [loanAmt, inputs.ratePct, inputs.termYears, inputs.taxesAnnual, inputs.insuranceAnnual, inputs.hoaMonthly]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card">
        <h3 className="text-xl font-semibold">Mortgage calculator</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="text-sm col-span-2">
            <span className="block mb-1 font-medium">Home price</span>
            <input type="number" className="w-full rounded-xl border px-4 py-3" value={inputs.price}
              onChange={e=>setInputs(v=>({...v, price: Number(e.target.value)}))}/>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">Down payment (%)</span>
            <input type="number" className="w-full rounded-xl border px-4 py-3" value={inputs.downPct}
              onChange={e=>setInputs(v=>({...v, downPct: Number(e.target.value)}))}/>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">Rate (APR %)</span>
            <input type="number" step="0.01" className="w-full rounded-xl border px-4 py-3" value={inputs.ratePct}
              onChange={e=>setInputs(v=>({...v, ratePct: Number(e.target.value)}))}/>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">Term (years)</span>
            <select className="w-full rounded-xl border px-4 py-3" value={inputs.termYears}
              onChange={e=>setInputs(v=>({...v, termYears: Number(e.target.value)}))}>
              {[30,20,15,10].map(y=>(<option key={y} value={y}>{y}</option>))}
            </select>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">Property taxes (annual)</span>
            <input type="number" className="w-full rounded-xl border px-4 py-3" value={inputs.taxesAnnual}
              onChange={e=>setInputs(v=>({...v, taxesAnnual: Number(e.target.value)}))}/>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">Homeowners insurance (annual)</span>
            <input type="number" className="w-full rounded-xl border px-4 py-3" value={inputs.insuranceAnnual}
              onChange={e=>setInputs(v=>({...v, insuranceAnnual: Number(e.target.value)}))}/>
          </label>
          <label className="text-sm">
            <span className="block mb-1 font-medium">HOA (monthly)</span>
            <input type="number" className="w-full rounded-xl border px-4 py-3" value={inputs.hoaMonthly}
              onChange={e=>setInputs(v=>({...v, hoaMonthly: Number(e.target.value)}))}/>
          </label>
        </div>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold">Your estimated payment</h3>
        <div className="mt-2 text-5xl font-black text-dark">{fmt(monthly.total)}</div>
        <div className="mt-6 space-y-3">
          <Row label="Principal & interest" value={monthly.principalInterest} />
          <Row label="Property taxes" value={monthly.taxes} />
          <Row label="Homeowners insurance" value={monthly.insurance} />
          <Row label="HOA dues" value={monthly.hoa} />
        </div>
        <div className="mt-6 p-4 bg-green-50 rounded-2xl text-sm text-dark">
          <div className="font-semibold mb-1">Assumptions</div>
          <ul className="list-disc ml-6 space-y-1">
            <li>No PMI calculation in this demo.</li>
            <li>Fixed-rate mortgage, monthly compounding.</li>
            <li>ZIP {initialZip || "(not provided)"} used only for display.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Row({label, value}:{label:string; value:number}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="text-gray-600">{label}</div>
      <div className="font-semibold">{value.toLocaleString(undefined, { style: "currency", currency: "USD" })}</div>
    </div>
  );
}
