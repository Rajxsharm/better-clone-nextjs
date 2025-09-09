export const metadata = { title: "About Us | Better Clone" };

export default function AboutPage() {
  return (
    <section>
      <div className="container py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark">About us</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          We’re reimagining the mortgage experience with a focus on speed, clarity, and accessibility.
          This page loosely mirrors the structure of Better.com’s About Us to demonstrate layout and responsiveness without copying protected assets.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {kpi: "800k+", label: "customers served"},
            {kpi: "$100B+", label: "loans funded"},
            {kpi: "50-state", label: "availability (demo)"},
          ].map((x, i)=>(
            <div key={i} className="card text-center">
              <div className="text-3xl font-extrabold text-primary">{x.kpi}</div>
              <div className="text-sm text-gray-600 mt-1">{x.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="card">
            <h3 className="text-xl font-semibold">Our mission</h3>
            <p className="text-gray-700 mt-2">
              Make homeownership simpler, faster, and more accessible by building intuitive digital tools and removing unnecessary friction.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">How we work</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>Human-centered design</li>
              <li>Compliance-first approach</li>
              <li>Iterative improvements and A/B testing</li>
              <li>Full responsiveness and accessibility as table stakes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
