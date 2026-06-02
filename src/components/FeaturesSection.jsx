import {
  Bookmark,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  FileText,
  MousePointerClick,
  Search,
  TrendingUp,
  Hexagon,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Find your ideal job with advanced filters.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Salary Insights",
    desc: "Get real salary data to negotiate confidently.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Top Companies",
    desc: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    desc: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Apply",
    desc: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    desc: "Create professional resumes with modern templates.",
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your skills and experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Resources",
    desc: "Boost your career with quick interview tips.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#0f0f12] px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl bg-[#0f0f12] px-6 py-20 md:px-12">
        {/* Top Content */}
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
            <span className="h-2 w-2 rounded-full bg-[#6c63ff]" />
            Features Job
            <span className="h-2 w-2 rounded-full bg-[#6c63ff]" />
          </div>

          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-y-14 md:grid-cols-2 md:gap-x-10 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex items-start gap-5">
                {/* Icon Box */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black shadow-[0_0_30px_rgba(168,85,247,0.08)]">
                  <Icon className="h-6 w-6 text-[#e9a6ff]" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
