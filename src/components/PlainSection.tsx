import React from "react";
import PremiumCard from "./ui/PremiumCard";

export default function PainSection() {
  const pains = [
    "100+ applications, 0 recruiter responses.",
    "Random job search with no structure or roadmap.",
    "Weak resume & LinkedIn that don’t get attention.",
    "Fear and low confidence in interviews.",
    "No vendor pipeline or recruiter network.",
    "Wasted months on guessing and hoping.",
  ];

  const fixes = [
    "Daily structured job marketing by LVC team.",
    "Clear 360° roadmap from application to offer.",
    "Premium resume & LinkedIn branding done for you.",
    "Unlimited mock interviews & communication coaching.",
    "Vendor & recruiter outreach engine working behind you.",
    "Dashboard that shows exactly what is happening.",
  ];

  return (
    <section
      id="pain"
      className="py-20 bg-black section-divider scroll-mt-20"
    >
      <div className="section-max grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            The Real Problem
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            The job search problem no one talks about.
          </h2>
          <p className="text-white/70 mb-6">
            Most OPT, CPT, H4, and MS students are stuck in a lonely job search:
            no system, no support, no feedback, no visibility. Just applying and
            hoping.
          </p>

          <PremiumCard title="Before LVC 360°" eyebrow="Pain · Confusion">
            <ul className="list-disc list-inside space-y-1">
              {pains.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </PremiumCard>
        </div>

        <div>
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            How We Fix It
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            LVC 360° replaces random struggle with a professional engine.
          </h2>
          <PremiumCard title="After LVC 360°" eyebrow="Clarity · Support" highlight="360° Managed">
            <ul className="list-disc list-inside space-y-1">
              {fixes.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
}
