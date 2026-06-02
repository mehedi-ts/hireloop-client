import { ArrowRight, Crown, BarChart3, Zap, Plus } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    icon: Crown,
    active: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: "$17",
    icon: BarChart3,
    active: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: "$99",
    icon: Zap,
    active: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
            <span className="h-2 w-2 rounded-full bg-[#5B5BFF]" />
            Pricing
            <span className="h-2 w-2 rounded-full bg-[#5B5BFF]" />
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-7xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* TOGGLE */}
        <div className="mb-16 flex justify-center">
          <div className="flex items-center rounded-full bg-[#1b1b1f] p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black">
              Monthly
            </button>

            <button className="flex items-center gap-2 px-5 py-2 text-sm text-gray-300">
              Yearly
              <span className="rounded-full bg-[#D946EF] px-2 py-0.5 text-xs font-medium text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[28px] border p-8 transition-all duration-300 ${
                  plan.active
                    ? "border-white/10 bg-[#111114] shadow-[0_0_80px_rgba(255,255,255,0.05)]"
                    : "border-white/10 bg-black"
                }`}
              >
                {/* Glow */}
                {plan.active && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
                )}

                <div className="relative z-10">
                  {/* HEADER */}
                  <div className="mb-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#121216]">
                        <Icon className="h-5 w-5 text-[#E9A6FF]" />
                      </div>

                      <h3 className="text-3xl font-medium tracking-[-0.03em]">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="flex items-start">
                        <span className="text-5xl font-semibold tracking-tighter">
                          {plan.price}
                        </span>

                        <span className="mt-3 ml-1 text-sm text-gray-400">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="mb-7 text-lg font-medium text-white">
                    Start building your insights hub:
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-5">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 text-gray-400"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-[#1A1A1F]">
                          <Plus className="h-3.5 w-3.5 text-white" />
                        </div>

                        <span className="text-[15px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`mt-12 flex w-full items-center justify-between rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 ${
                      plan.active
                        ? "bg-white text-black hover:opacity-90"
                        : "bg-[#1A1A1F] text-white hover:bg-[#232329]"
                    }`}
                  >
                    Choose This Plan
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
