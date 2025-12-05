import React from "react";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-black section-divider">
      <div className="section-max text-center">
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
          Final Step
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-3">
          Your career transformation starts here.
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          Limited to 25 candidates per batch. Admissions interview required. If
          you’re serious about getting interviews faster, this is your next
          step.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-9">
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-royal text-black font-semibold shadow-gold-soft hover:shadow-xl hover:shadow-gold-soft transition text-sm md:text-base">
            Apply Now — LVC 360° Career Program
          </button>
          <button className="px-10 py-4 rounded-xl border border-gold text-gold font-semibold hover:bg-gold-soft/10 transition text-sm md:text-base">
            Book 1:1 Admissions Call
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 text-xs text-white/55">
          <p>⭐ Selective admissions · Not everyone is accepted</p>
          <p>⭐ EMI & Pay After Placement options available</p>
          <p>⭐ Full transparency with live dashboard</p>
        </div>
      </div>
    </section>
  );
}
