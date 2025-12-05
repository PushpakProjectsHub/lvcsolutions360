import React from "react";

export default function BeforeAfterSection() {
  const rows = [
    ["0 recruiter calls", "Daily recruiter responses"],
    ["No structure", "Clear 360° roadmap"],
    ["Weak resume & LinkedIn", "Premium branded profile"],
    ["Scared in interviews", "Confident, well-practiced responses"],
    ["3+ months no interviews", "2–5 interviews/week (varies)"],
    ["No pipeline", "Active vendor & recruiter pipeline"],
  ];

  return (
    <section className="py-20 bg-bg-deep section-divider">
      <div className="section-max">
        <div className="text-center mb-8">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Transformation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Before LVC vs After LVC.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The difference is not just “more interviews”. It’s structure,
            support, and confidence at every step of your journey.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
            <div className="bg-black/70 border-b md:border-b-0 md:border-r border-white/10 p-4 font-heading text-center text-white/80">
              BEFORE LVC 360°
            </div>
            <div className="bg-black/70 p-4 font-heading text-center text-gold">
              AFTER LVC 360°
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 text-sm">
            <div>
              {rows.map(([before], idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 text-white/60 border-b last:border-b-0 border-white/5"
                >
                  • {before}
                </div>
              ))}
            </div>
            <div>
              {rows.map(([, after], idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 text-white/85 border-b last:border-b-0 border-white/5"
                >
                  ✓ {after}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
