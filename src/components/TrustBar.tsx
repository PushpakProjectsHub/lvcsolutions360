import React from "react";

export default function TrustBar() {
  const companies = [
    "Amazon",
    "Tesla",
    "Deloitte",
    "Infosys",
    "KPMG",
    "Walmart",
    "Meta",
  ];

  return (
    <section className="section-divider bg-black/60">
      <div className="section-max py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-white/50">
          Our candidates interview with companies like:
        </p>
        <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.15em] text-white/40">
          {companies.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
