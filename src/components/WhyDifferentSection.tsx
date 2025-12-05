import React from "react";
import PremiumCard from "./ui/PremiumCard";

export default function WhyDifferentSection() {
  const items = [
    {
      title: "Selective Admissions",
      desc: "We don’t take everyone. Admissions interview required. Only serious and committed candidates join each batch.",
    },
    {
      title: "Real-Time Dashboard",
      desc: "You see submissions, mocks, interviews, and status in one transparent dashboard. No hidden work, no fake claims.",
    },
    {
      title: "Dedicated Case Manager",
      desc: "One person from our side owns your journey end-to-end and coordinates with the job marketing & mock teams.",
    },
    {
      title: "Daily Job Marketing",
      desc: "Consistent, high-volume submissions with intelligent targeting instead of random applications.",
    },
    {
      title: "Unlimited Mocks",
      desc: "You practice until you sound confident — not limited to 2–3 mock sessions.",
    },
    {
      title: "Pay After Placement Options",
      desc: "Your success and our success are aligned. Structured salary-based subscription options.",
    },
  ];

  return (
    <section className="py-20 bg-black section-divider">
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Why LVC 360° is Different
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Not another consultancy. A managed career engine.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            We don’t just train you and disappear. We actively manage your
            job-search engine, track your progress, and stay accountable until
            you are placed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <PremiumCard key={item.title} title={item.title}>
              {item.desc}
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
