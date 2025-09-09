import Calculator from "../../components/Calculator";

export const dynamic = "force-dynamic";

export default function MortgageCalculatorPage({ searchParams }: { searchParams: { taxes?: string; zip?: string } }) {
  const taxes = Number(searchParams?.taxes ?? 0);
  const zip = searchParams?.zip ?? "";
  return (
    <section>
      <div className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark">Mortgage calculator</h1>
        <p className="mt-3 text-gray-700">Pre-filled from query params: taxes={taxes||0}, zip={zip||""}</p>
        <div className="mt-8">
          <Calculator initialTaxes={taxes} initialZip={zip} />
        </div>
      </div>
    </section>
  );
}
