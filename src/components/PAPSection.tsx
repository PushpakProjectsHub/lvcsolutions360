import React from "react";

export default function PAPSection() {
  const options = ["10%", "15%", "20%", "25%", "30%"];

  return (
    <section className="py-20 bg-black section-divider">
      <div className="section-max text-center">
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
          Pay After Placement
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
          Pay only when you start earning.
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          For selected candidates, we offer salary-based subscription models.
          You focus on getting placed; we align our success with yours.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {options.map((opt) => (
            <div
              key={opt}
              className="border border-gold/70 rounded-full px-6 py-3 text-sm text-white/90 bg-bg-card hover:bg-gold-soft/15 transition"
            >
              {opt} of salary
              <span className="block text-[11px] text-white/55">
                Only while employed
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <PAPCard title="Zero upfront pressure">
            Start the journey without heavy initial payment.
          </PAPCard>
          <PAPCard title="Pay from income">
            A small salary percentage after you start earning.
          </PAPCard>
          <PAPCard title="Paused if job ends">
            If your job ends, payments pause immediately.
          </PAPCard>
          <PAPCard title="Aligned incentives">
            We win only when you win. Our focus is on your placement.
          </PAPCard>
        </div>

        <p className="mt-8 text-xs text-white/55">
          * Exact percentage and terms are discussed individually during
          admissions & contract signing.
        </p>
      </div>
    </section>
  );
}

function PAPCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg-card border border-gold/40 rounded-xl p-5 text-sm text-white/75">
      <p className="font-heading text-sm text-gold mb-1.5">{title}</p>
      <p>{children}</p>
    </div>
  );
}
