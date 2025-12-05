import React from "react";

export default function First30DaysSection() {
  const weeks = [
    {
      title: "Week 1 — Branding",
      text: "Resume rewrite, LinkedIn makeover, role positioning, and keyword strategy.",
    },
    {
      title: "Week 2 — Marketing Engine ON",
      text: "Daily job submissions, recruiter outreach, and vendor activation start running.",
    },
    {
      title: "Week 3 — Interview Practice",
      text: "Behavioral + basic technical mocks, communication training, and feedback loops.",
    },
    {
      title: "Week 4 — Interview Pipeline",
      text: "2–5 interview opportunities depending on your profile, stack, and response.",
    },
  ];

  return (
    <section className="py-20 bg-black section-divider">
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Roadmap
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            What your first 30 days look like.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            No confusion. You know exactly what will happen in the first month
            after joining the LVC 360° Career Program.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {weeks.map((w, index) => (
            <div
              key={w.title}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-[11px] text-white/50 mb-1">
                Week {index + 1}
              </p>
              <p className="font-heading text-base text-gold mb-2">
                {w.title}
              </p>
              <p className="text-sm text-white/75">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
