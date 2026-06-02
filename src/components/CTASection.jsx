import Image from "next/image";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt="Background Grid"
          fill
          priority
          className="object-cover object-top opacity-90"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105">
            Create a free account
          </button>

          <button className="rounded-2xl border border-white/10 bg-[#111114]/80 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
