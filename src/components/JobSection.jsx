import { ArrowRight, Briefcase, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

const JobSection = () => {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-24 text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Content */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/40 bg-[#4f46e5]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8b7dff]">
            <span className="h-2 w-2 rounded-full bg-[#6d5cff]" />
            Smart Job Discovery
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            The roles you&apos;d never
            <br />
            find by searching
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-white/5 bg-linear-to-b from-[#111111] to-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d5cff]/30"
            >
              <h3 className="mb-4 text-3xl font-semibold tracking-tight">
                {job.title}
              </h3>

              <p className="mb-8 max-w-sm text-sm leading-7 text-gray-400">
                Showcase your commitment to diversity and inclusion by
                highlighting initiatives
              </p>

              {/* Tags */}
              <div className="mb-10 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-sm text-gray-200">
                  <MapPin size={14} className="text-[#d68cff]" />
                  {job.location}
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-sm text-gray-200">
                  <Briefcase size={14} className="text-[#d68cff]" />
                  {job.type}
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-sm text-gray-200">
                  <span className="h-2 w-2 rounded-full bg-[#d68cff]" />
                  {job.salary}
                </div>
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 group-hover:gap-3">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 flex justify-center">
          <button className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105">
            View all job open
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
