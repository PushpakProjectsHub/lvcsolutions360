import React from "react";

type PremiumCardProps = {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  highlight?: string;
};

export default function PremiumCard({
  title,
  children,
  eyebrow,
  highlight,
}: PremiumCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl transition shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:shadow-gold-soft">
      {/* top gradient edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold/70 to-gold/0" />
      <div className="p-5 md:p-6 space-y-3">
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
            {eyebrow}
          </p>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-base md:text-lg text-white">
            {title}
          </h3>
          {highlight && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-gold/40 text-gold/90 bg-gold-soft/10">
              {highlight}
            </span>
          )}
        </div>
        <div className="text-sm text-white/75 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
