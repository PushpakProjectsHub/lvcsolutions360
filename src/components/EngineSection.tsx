import React from "react";
import PremiumCard from "./ui/PremiumCard";

export default function EngineSection() {
  const engines = [
    {
      title: "Branding Engine",
      desc: "Resume, LinkedIn, job title, positioning, and keywords designed to attract recruiters and vendors.",
    },
    {
      title: "Submissions Engine",
      desc: "Daily targeted job applications on platforms like LinkedIn, Dice, Indeed, ZipRecruiter, and private vendor lists.",
    },
    {
      title: "Recruiter Engine",
      desc: "Outreach to recruiters and vendors to pitch your profile and accelerate callbacks.",
    },
    {
      title: "Interview Engine",
      desc: "Systematic preparation for HR, behavioral, and basic technical rounds.",
    },
    {
      title: "Coaching Engine",
      desc: "Unlimited mocks, feedback, and communication training until you achieve confidence.",
    },
    {
      title: "Placement Engine",
      desc: "Guidance from first interview to final offer and beyond.",
    },
  ];

  return (
    <section
      id="engine"
      className="py-20 bg-bg-deep section-divider scroll-mt-20"
    >
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            The 360° Career Engine
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Six engines working together for your career.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Instead of doing everything alone, you plug into a system designed
            to create momentum in your job search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engines.map((e) => (
            <PremiumCard key={e.title} title={e.title}>
              {e.desc}
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
