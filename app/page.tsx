import Link from "next/link";

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-dark">
              Finance your home the smarter way.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Simple application. Competitive rates. Real human support. This is a clean-room replica created for an internship assignment.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/start" className="btn-primary">Get started</Link>
              <Link href="/mortgage-calculator" className="btn-outline">Try calculator</Link>
            </div>
            <p className="mt-6 text-xs text-gray-500">Not affiliated with Better.com. For educational purposes.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Quick rate check</h3>
            <form action="/start" className="mt-4 grid grid-cols-1 gap-4">
              <label className="text-sm">
                <span className="block mb-1 font-medium">Property ZIP</span>
                <input required name="zip" placeholder="421005" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 ring-primary" />
              </label>
              <label className="text-sm">
                <span className="block mb-1 font-medium">Home price</span>
                <input required name="price" type="number" placeholder="300000" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 ring-primary" />
              </label>
              <button className="btn-primary">Continue</button>
            </form>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {title: "Fast online process", desc: "Move from estimate to approval with a streamlined flow."},
            {title: "Transparent pricing", desc: "See a clear breakdown of your monthly payment."},
            {title: "Dedicated support", desc: "Get help from a human whenever you need it."},
          ].map((f,i)=>(
            <div key={i} className="card">
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
