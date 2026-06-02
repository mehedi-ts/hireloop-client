"use client";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#111111] px-4 pt-5">
      <div className="mx-auto max-w-[1400px]">
        {/* Navbar */}
        <div className="relative flex items-center justify-between h-[74px] px-6 md:px-8 rounded-[20px] border border-white/5 bg-[#171717]/95 overflow-hidden">
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,80,236,0.08),transparent_55%)]" />

          {/* LEFT LOGO */}
          <div className="relative z-10 flex items-center">
            <h1 className="text-[34px] font-black tracking-[-1.8px] leading-none">
              <span className="text-[#0A84FF]">hire</span>
              <span className="text-[#FF7A00]">loop</span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            {/* Nav Links */}
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="text-[13px] font-medium text-white/65 hover:text-white transition"
              >
                Browse Jobs
              </a>

              <a
                href="#"
                className="text-[13px] font-medium text-white/65 hover:text-white transition"
              >
                Company
              </a>

              <a
                href="#"
                className="text-[13px] font-medium text-white/65 hover:text-white transition"
              >
                Pricing
              </a>
            </nav>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10" />

            {/* Sign In */}
            <button className="text-[13px] font-medium text-[#7B61FF] hover:text-[#9b8cff] transition">
              Sign In
            </button>

            {/* CTA */}
            <button className="h-[42px] px-6 rounded-[12px] bg-gradient-to-b from-[#7B61FF] to-[#5B3FFF] text-white text-[13px] font-semibold shadow-[0_10px_25px_rgba(91,63,255,0.30)] hover:scale-[1.02] transition">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-[20px] border border-white/5 bg-[#171717]/95 p-5">
            <div className="flex flex-col gap-5">
              <a href="#" className="text-sm text-white/70 hover:text-white">
                Browse Jobs
              </a>

              <a href="#" className="text-sm text-white/70 hover:text-white">
                Company
              </a>

              <a href="#" className="text-sm text-white/70 hover:text-white">
                Pricing
              </a>

              <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
                <button className="h-11 rounded-xl border border-white/10 bg-white/5 text-[#7B61FF] text-sm font-medium">
                  Sign In
                </button>

                <button className="h-11 rounded-xl bg-gradient-to-b from-[#7B61FF] to-[#5B3FFF] text-white text-sm font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
