import React from "react";

export default function PricingSection() {
  const tiers = [
    {
      name: "GOLD",
      highlight: "Best for starters",
      price: "$2,000",
      note: "Promo: $1,500 via influencer code",
      features: [
        "Premium resume & LinkedIn rewrite",
        "Done-for-you job marketing",
        "Basic interview support",
        "Dashboard access",
        "Admissions interview required",
      ],
    },
    {
      name: "PLATINUM",
      highlight: "Most popular",
      price: "$3,000",
      note: "",
      features: [
        "Everything in Gold",
        "Full interview support",
        "Priority submissions",
        "Priority recruiter outreach",
        "Dedicated mock coach",
        "Weekly strategy calls",
      ],
    },
    {
      name: "DIAMOND",
      highlight: "Aggressive support",
      price: "$6,500",
      note: "",
      features: [
        "Everything in Platinum",
        "Daily mock interviews",
        "Direct access to case manager",
        "Advanced communication training",
        "Offer negotiation support",
        "Extended placement assistance",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-bg-deep section-divider scroll-mt-20"
    >
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Program Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Choose your support level.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Different tiers for different levels of urgency, support, and
            investment — all built on the same 360° engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-bg-card border border-gold/60 rounded-2xl p-7 flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {tier.name} TIER
              </p>
              {tier.highlight && (
                <p className="text-xs text-white/60 mt-1">{tier.highlight}</p>
              )}
              <p className="text-3xl font-heading text-gold mt-4">
                {tier.price}
              </p>
              {tier.note && (
                <p className="text-xs text-white/65 mt-1">{tier.note}</p>
              )}
              <ul className="mt-5 text-sm text-white/75 space-y-1.5">
                {tier.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-xl bg-gold text-black font-semibold hover:shadow-gold-soft transition">
                Apply for {tier.name}
              </button>
            </div>
          ))}
        </div>

        {/* Royal Black */}
        <div className="mt-12 bg-gradient-to-r from-gold/15 via-gold-soft/15 to-gold/15 border border-gold rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Royal Black Tier
            </p>
            <p className="text-3xl font-heading text-gold mt-3">
              $12,000{" "}
              <span className="text-lg text-white/70">(One-time fee)</span>
            </p>
            <ul className="mt-4 text-sm text-white/85 space-y-1.5">
              <li>✔ Lifetime job support</li>
              <li>✔ Dedicated case manager</li>
              <li>✔ Top priority submissions</li>
              <li>✔ Intensive interview training</li>
              <li>✔ Lifetime dashboard access</li>
              <li>✔ No Pay After Placement required</li>
            </ul>
          </div>
          <button className="px-8 py-3 rounded-xl bg-gold text-black font-semibold shadow-gold-soft hover:shadow-xl hover:shadow-gold-soft transition">
            Apply for Royal Black
          </button>
        </div>
      </div>
    </section>
  );
}
