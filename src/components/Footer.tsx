import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-white/10">
      <div className="section-max flex flex-col md:flex-row justify-between gap-4 items-center text-sm text-white/60">
        <div>
          <p className="font-heading text-white text-base">
            LVC Solutions LLC
          </p>
          <p className="text-white/50 text-xs">
            LVC 360° Career Program™ · All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          <a href="#" className="hover:text-gold transition">
            About
          </a>
          <a href="#" className="hover:text-gold transition">
            LVC Academy
          </a>
          <a href="#" className="hover:text-gold transition">
            LVC Fair Job Portal
          </a>
          <a href="#" className="hover:text-gold transition">
            Terms
          </a>
          <a href="#" className="hover:text-gold transition">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
