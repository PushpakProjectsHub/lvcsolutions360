import React from "react";
import PremiumCard from "./ui/PremiumCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav M. — Software Developer",
      text: "“I was stuck for 4 months with no interviews. After joining LVC 360°, my resume and LinkedIn were rebuilt and the marketing engine started. I got multiple interviews in 5 weeks.”",
      meta: "Package: $105,000 · Texas",
    },
    {
      name: "Sanjana R. — QA Engineer (OPT)",
      text: "“The mock interviews changed everything. I stopped fearing HR and behavioral rounds. The team kept pushing my profile every day until I got placed.”",
      meta: "Package: $96,000 · California",
    },
    {
      name: "Krishna S. — Business Analyst (H4)",
      text: "“As an H4 spouse I felt stuck. LVC 360° gave me structure, confidence, and a real team. I’m now working as a BA and finally back in my career.”",
      meta: "Package: $88,000 · Virginia",
    },
  ];

  return (
    <section className="py-20 bg-bg-deep section-divider">
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Success Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Our candidates are getting placed. You can be next.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            These stories are of people who were exactly where you are now:
            confused, stressed, and tired of trying alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <PremiumCard key={t.name} title={t.name}>
              <p className="text-white/80 text-sm mb-3">{t.text}</p>
              <p className="text-[11px] text-gold">{t.meta}</p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
