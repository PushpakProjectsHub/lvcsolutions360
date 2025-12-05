import React from "react";

export default function AdmissionsSection() {
  const steps = [
    {
      title: "Online Application",
      text: "Share your basic details, background, and career goals.",
    },
    {
      title: "Pre-screening",
      text: "We quickly assess your profile readiness and alignment.",
    },
    {
      title: "Admissions Interview",
      text: "20-minute call to assess seriousness, communication, and fit.",
    },
    {
      title: "Offer & Plan Selection",
      text: "If selected, choose between Upfront / EMI / PAP options.",
    },
    {
      title: "Onboarding & Dashboard",
      text: "Your resume, LinkedIn & job marketing engine goes LIVE.",
    },
  ];

  return (
    <section
      id="admissions"
      className="py-20 bg-bg-deep section-divider scroll-mt-20"
    >
      <div className="section-max grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Admissions Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            A selective program. Not everyone is accepted.
          </h2>
          <p className="text-white/70 mb-4">
            We intentionally keep the batch size small and only accept serious
            candidates.
          </p>
          <ul className="text-sm text-white/75 space-y-1.5 mb-6">
            <li>✔ Only around 40% of applicants are accepted.</li>
            <li>✔ 25 seats per batch with multiple batches per month.</li>
            <li>✔ Admissions interview is mandatory.</li>
          </ul>
        </div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-bg-card border border-white/10 rounded-xl p-4"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                Step {idx + 1}
              </p>
              <p className="font-heading text-base text-gold mt-1">
                {step.title}
              </p>
              <p className="text-sm text-white/70 mt-1">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
