export const metadata = { title: "About — 3J Solutions Pakistan" };

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container-balanced">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="subtle max-w-3xl">
            Established in 2017, 3J Solutions provides integrated construction, maintenance,
            facility management, and IT services across Pakistan. We focus on safety, quality,
            and sustainable practices while delivering measurable value.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-balanced grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-title mb-4">Our Mission</h2>
            <p className="subtle">
              To deliver comprehensive, reliable, and modern services that help organizations
              operate efficient, safe, and resilient facilities.
            </p>
          </div>
          <div>
            <h2 className="section-title mb-4">Our Vision</h2>
            <p className="subtle">
              To be Pakistan's most trusted partner for construction and facility services—
              technology-enabled, energy-efficient, and people-first.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-balanced">
          <h2 className="section-title text-center mb-10">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Honesty","Punctuality","Innovation","Ownership"].map(v => (
              <div key={v} className="card text-center">
                <h3 className="text-lg font-semibold mb-2">{v}</h3>
                <p className="subtle">We uphold {v.toLowerCase()} in every engagement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
