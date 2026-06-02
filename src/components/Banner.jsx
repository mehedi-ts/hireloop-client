import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/globe.png"
          alt="Banner Background"
          fill
          priority
          className="
            object-cover
            md:object-cover
            object-[center_78%]
            md:object-center
            scale-[1.7]
            sm:scale-[1.25]
            md:scale-100
          "
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* MOBILE GRADIENT FADE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[340px]
          bg-gradient-to-t
          from-black
          via-black/90
          to-transparent
          z-[2]
          md:hidden
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4">
        {/* HERO CONTENT */}
        <div className="pt-16 sm:pt-20 md:pt-24">
          {/* BADGE */}
          <div className="flex justify-center">
            <div
              className="
                relative
                flex
                items-center
                gap-2
                sm:gap-3
                h-[38px]
                sm:h-[42px]
                px-4
                sm:px-6
                rounded-full
                border
                border-white/10
                bg-[#121212]/90
                backdrop-blur-xl
              "
            >
              {/* Side Lines */}
              <div className="hidden sm:block absolute -left-20 top-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent to-white/10 -translate-y-1/2" />

              <div className="hidden sm:block absolute -right-20 top-1/2 w-16 h-[1px] bg-gradient-to-l from-transparent to-white/10 -translate-y-1/2" />

              <span className="text-[12px] sm:text-[14px]">💼</span>

              <span className="text-[12px] sm:text-[14px] font-semibold tracking-wide">
                50,000+
              </span>

              <span className="text-[10px] sm:text-[13px] text-white/45 tracking-[1px] uppercase">
                New Jobs This Month
              </span>
            </div>
          </div>

          {/* HEADING */}
          <div className="mt-8 md:mt-10 text-center">
            <h1
              className="
                text-[38px]
                sm:text-[54px]
                md:text-[72px]
                leading-[1]
                font-bold
                tracking-[-1px]
                md:tracking-[-2px]
                max-w-[900px]
                mx-auto
              "
            >
              Find Your Dream
              <br className="block sm:hidden" /> Job Today
            </h1>

            <p
              className="
                max-w-[720px]
                mx-auto
                mt-5
                text-[14px]
                sm:text-[15px]
                md:text-[18px]
                leading-[1.8]
                text-white/55
                px-2
              "
            >
              HireLoop connects top talent with world-class companies. Browse
              thousands of curated opportunities and land your next role —
              faster.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <div
              className="
                w-full
                max-w-[840px]
                rounded-[26px]
                border
                border-white/10
                bg-[#0E0E0E]/80
                backdrop-blur-xl
                p-3
                md:p-0
                overflow-hidden
              "
            >
              <div className="flex flex-col md:flex-row">
                {/* SEARCH INPUT */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    md:px-5
                    h-[60px]
                    md:h-[72px]
                    flex-1
                  "
                >
                  <svg
                    className="w-5 h-5 text-white/40 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Job title, skill or company"
                    className="
                      bg-transparent
                      outline-none
                      w-full
                      text-[14px]
                      md:text-[15px]
                      placeholder:text-white/30
                    "
                  />
                </div>

                {/* MOBILE DIVIDER */}
                <div className="md:hidden w-full h-[1px] bg-white/5" />

                {/* DESKTOP DIVIDER */}
                <div className="hidden md:block w-[1px] h-8 bg-white/10 self-center" />

                {/* LOCATION */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    md:px-5
                    h-[60px]
                    md:h-[72px]
                    flex-1
                  "
                >
                  <svg
                    className="w-5 h-5 text-white/40 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Location or Remote"
                    className="
                      bg-transparent
                      outline-none
                      w-full
                      text-[14px]
                      md:text-[15px]
                      placeholder:text-white/30
                    "
                  />
                </div>

                {/* SEARCH BUTTON */}
                <div className="p-2 md:p-0">
                  <button
                    className="
                      w-full
                      md:w-[76px]
                      h-[52px]
                      md:h-[72px]
                      rounded-2xl
                      md:rounded-none
                      bg-[#5B4DFF]
                      hover:bg-[#6C63FF]
                      transition
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 px-4">
            <span className="text-white/40 text-[13px]">Trending Position</span>

            {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map(
              (tag, index) => (
                <button
                  key={index}
                  className="
                  h-[32px]
                  px-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-sm
                  text-[12px]
                  text-white/70
                "
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </div>

        {/* STATS */}
        <div
          className="
            relative
            z-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-5
            pt-[260px]
            sm:pt-[360px]
            md:pt-[520px]
            pb-16
            md:pb-20
          "
        >
          {[
            {
              value: "50K",
              label: "Active Jobs",
            },
            {
              value: "12K",
              label: "Companies",
            },
            {
              value: "2M",
              label: "Job Seekers",
            },
            {
              value: "97%",
              label: "Satisfaction Rate",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[24px]
                border
                border-white/5
                bg-[#0D0D0D]/70
                backdrop-blur-xl
                p-6
                md:p-8
                min-h-[170px]
                md:min-h-[190px]
              "
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                ✦
              </div>

              <h3
                className="
                  mt-8
                  text-[42px]
                  md:text-[54px]
                  leading-none
                  font-semibold
                  tracking-[-2px]
                "
              >
                {item.value}
              </h3>

              <p className="mt-4 text-[14px] md:text-[15px] text-white/50">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
