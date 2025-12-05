import React from "react";

export default function MetricsSection() {
  const metrics = [
    {
      label: "Job seekers guided",
      value: "1,100+",
    },
    {
      label: "Mock interviews run",
      value: "180+",
    },
    {
      label: "Vendor & recruiter links",
      value: "60+",
    },
    {
      label: "Student satisfaction",
      value: "92%",
    },
  ];

  return (
    <section className="py-16 bg-black section-divider">
      <div className="section-max">
        <div className="text-center mb-8">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Track Record
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
            Real work. Real numbers.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We focus on consistent execution: daily job marketing, real mock
            sessions, and transparent tracking of your journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/5 py-6"
            >
              <p className="text-2xl font-heading text-gold">{m.value}</p>
              <p className="text-xs text-white/60 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
