import React from "react";

export default function FounderSection() {
  return (
    <section className="py-20 bg-black section-divider">
      <div className="section-max grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Placeholder avatar block; replace with real image later */}
        <div className="md:col-span-1 flex justify-center">
          <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-gold to-gold-royal flex items-center justify-center text-center text-sm font-heading text-black shadow-gold-soft">
            Venkatrao{" "}
            <br />
            Gunji
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-3">
            Founder’s Note
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
            “I built LVC 360° because students shouldn’t struggle alone.”
          </h2>
          <p className="text-white/75 text-sm md:text-base mb-3">
            Thousands of OPT, CPT, H4, and MS students are talented but stuck:
            they apply everywhere, talk to random consultancies, and still
            don’t get consistent interviews.
          </p>
          <p className="text-white/75 text-sm md:text-base mb-3">
            LVC 360° Career Program™ is my answer to that problem — a
            professional, transparent, full-time career engine that sits next to
            you and works for you every single day.
          </p>
          <p className="text-white/75 text-sm md:text-base mb-4">
            My mission is simple:{" "}
            <span className="text-gold">
              remove the guesswork from your job search
            </span>{" "}
            and give you a real system that pushes you towards interviews and
            offers.
          </p>
          <p className="text-sm text-white/60">
            — <span className="font-heading text-white">Venkatrao Gunji</span>,{" "}
            Founder & CEO, LVC Solutions LLC
          </p>
        </div>
      </div>
    </section>
  );
}
