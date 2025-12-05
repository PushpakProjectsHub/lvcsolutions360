"use client";

import React, { useState } from "react";

const faqItems = [
  {
    q: "What exactly is the LVC 360° Career Program?",
    a: "It is a full-time career consulting and job marketing program for OPT, CPT, H4, and MS students. We handle resume, LinkedIn branding, daily job submissions, recruiter outreach, interview coaching, and dashboard tracking.",
  },
  {
    q: "Who is this program for?",
    a: "For serious OPT/CPT students, H4/H4-EAD candidates, fresh graduates, beginners in IT, and career switchers who want structured support instead of guessing alone.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No consultancy can legally guarantee a job. We guarantee consistent effort: job marketing, recruiter outreach, mock interviews, and clear guidance to maximize your chances.",
  },
  {
    q: "How long does it usually take to get placed?",
    a: "Every profile is different. Many candidates see interview momentum within 3–8 weeks depending on their tech stack, communication, and visa timelines.",
  },
  {
    q: "Do you offer EMI and Pay After Placement (PAP)?",
    a: "Yes. We offer EMI via payment gateways and selected salary-based PAP models (10–30%) which you pay only while employed.",
  },
  {
    q: "Will I get 1:1 support?",
    a: "Yes. You get a dedicated case manager, interview coach, and access to the job-marketing team, plus your own dashboard.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bg-deep section-divider">
      <div className="section-max">
        <div className="text-center mb-10">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Clear answers so you know exactly what you’re joining.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="bg-bg-card border border-white/10 rounded-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-5 py-4"
                >
                  <span className="text-sm md:text-base text-white text-left">
                    {item.q}
                  </span>
                  <span className="text-gold text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-white/70">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
