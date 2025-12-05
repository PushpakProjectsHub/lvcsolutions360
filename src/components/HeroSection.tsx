"use client";

import React from "react";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden pb-10">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gold-royal/25 blur-3xl" />
      </div>

      {/* Top nav */}
      <nav className="section-max pt-6 pb-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-royal flex items-center justify-center text-xs font-heading">
            LVC
          </div>
          <div>
            <p className="font-heading text-sm">LVC 360° Career Program™</p>
            <p className="text-[11px] text-white/50">
              By LVC Solutions LLC · USA
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-white/65">
          <a href="#why" className="hover:text-gold transition">
            Why 360°
          </a>
          <a href="#pain" className="hover:text-gold transition">
            Problems We Solve
          </a>
          <a href="#engine" className="hover:text-gold transition">
            360° Engine
          </a>
          <a href="#pricing" className="hover:text-gold transition">
            Pricing
          </a>
          <a href="#admissions" className="hover:text-gold transition">
            Admissions
          </a>
          <button className="px-4 py-2 rounded-lg border border-gold text-gold text-xs font-medium hover:bg-gold-soft/20 transition">
            Book Call
          </button>
        </div>
      </nav>

      {/* Hero main */}
      <section className="relative section-max flex flex-col lg:flex-row items-center gap-12 pt-4 pb-14">
        {/* Left */}
        <div className="flex-1 space-y-6">
          {/* Cohort badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-[0.2em] text-gold">
              New Cohort • Oct 2025
            </span>
            <span className="hidden sm:inline text-white/50">
              Applications open for OPT · CPT · H4 · MS
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[52px] font-semibold leading-tight">
            Stop guessing.
            <span className="block text-gold">
              Let your career be managed.
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-xl">
            The LVC 360° Career Program™ is your full-time career team. We
            handle{" "}
            <span className="text-white">job marketing, recruiter outreach</span>
            ,{" "}
            <span className="text-white">
              resume & LinkedIn branding, and interview practice
            </span>{" "}
            — so you can focus on performing in the actual interviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-royal text-black font-semibold shadow-gold-soft hover:shadow-xl hover:shadow-gold-soft transition text-sm md:text-base">
              Apply Now (Admissions Interview Required)
            </button>
            <button className="px-8 py-3 rounded-xl border border-gold/70 text-gold font-medium hover:bg-gold-soft/10 transition text-sm md:text-base">
              Talk to Admissions Team
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-[11px] text-white/55 pt-3">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-royal border border-black" />
              <div className="w-7 h-7 rounded-full bg-white/15 border border-black" />
              <div className="w-7 h-7 rounded-full bg-white/10 border border-black" />
            </div>
            <p>
              <span className="text-white/80 font-medium">
                1,000+ job seekers
              </span>{" "}
              guided across USA · OPT · CPT · H4 · MS
            </p>
          </div>
        </div>

        {/* Right: Dashboard glass card */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-10 bg-gradient-to-br from-gold/25 via-gold-royal/20 to-transparent blur-3xl opacity-80" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl shadow-black/70">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Candidate Dashboard
                </p>
                <span className="text-[11px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  Live Preview
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  label="Submissions this week"
                  value="42"
                  chip="+18%"
                  tone="pos"
                />
                <StatCard
                  label="Interviews scheduled"
                  value="4"
                  chip="3 pending"
                  tone="neutral"
                />
                <StatCard
                  label="Mock interviews done"
                  value="7"
                  chip="This week"
                  tone="neutral"
                />
                <StatCard
                  label="Placement progress"
                  value="68%"
                  chip="In pipeline"
                  tone="pos"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-gold/40 bg-black/40 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-white/50">Status</p>
                  <p className="text-xs text-white/80">
                    Active job marketing & mocks running
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-gold cursor-pointer">
                  View Full Dashboard
                  <span>↗</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

type Tone = "pos" | "neutral";

function StatCard({
  label,
  value,
  chip,
  tone,
}: {
  label: string;
  value: string;
  chip: string;
  tone: Tone;
}) {
  const chipClass =
    tone === "pos"
      ? "text-emerald-300 bg-emerald-400/10"
      : "text-white/60 bg-white/5";

  return (
    <div className="rounded-2xl border border-white/8 bg-black/40 p-3 flex flex-col gap-1">
      <p className="text-[11px] text-white/55">{label}</p>
      <p className="text-xl font-heading text-white">{value}</p>
      <span
        className={`inline-flex w-fit items-center px-2 py-0.5 rounded-full text-[10px] ${chipClass}`}
      >
        {chip}
      </span>
    </div>
  );
}
