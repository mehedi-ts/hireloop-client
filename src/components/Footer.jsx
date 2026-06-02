import Image from "next/image";
import { Linkedin, PinIcon } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black px-4 pt-24 pb-10 text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-16 border-b border-white/5 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {/* LEFT */}
          <div className="max-w-sm">
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Hireloop"
              width={150}
              height={40}
              className="mb-8 object-contain"
            />

            <p className="text-[15px] leading-8 text-gray-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social */}
            <div className="mt-14 flex items-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111114] text-gray-400 transition-all hover:bg-[#1a1a1f] hover:text-white">
                <span className="text-lg font-semibold">f</span>
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111114] text-gray-400 transition-all hover:bg-[#1a1a1f] hover:text-white">
                <FaPinterestP className="text-[15px]" />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111114] text-gray-400 transition-all hover:bg-[#1a1a1f] hover:text-white">
                <LiaLinkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:ml-auto">
            <h3 className="mb-8 text-[15px] font-medium text-[#5B5BFF]">
              Product
            </h3>

            <ul className="space-y-5">
              {["Job discovery", "Worker AI", "Companies", "Salary data"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[15px] text-gray-500 transition hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[15px] font-medium text-[#5B5BFF]">
              Navigations
            </h3>

            <ul className="space-y-5">
              {["Help center", "Career library", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[15px] text-gray-500 transition hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[15px] font-medium text-[#5B5BFF]">
              Resources
            </h3>

            <ul className="space-y-5">
              {["Brand Guideline", "Newsroom"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-500 transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-600">
            Copyright 2024 — Programming Hero
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <a href="#" className="transition hover:text-white">
              Terms & Policy
            </a>

            <span>-</span>

            <a href="#" className="transition hover:text-white">
              Privacy Guideline
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
