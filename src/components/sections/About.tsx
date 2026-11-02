import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import { Users } from "lucide-react";

const stats = [
  { value: "100%", label: "Digital" },
  { value: "360°", label: "Solutions" },
  { value: "4+", label: "Core Services" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f7f7f8] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <SectionLabel title="About Us" icon={Users} />

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="max-w-xl text-5xl leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
              We build digital
              <br />
              experiences that
              <br />
              <strong>move businesses.</strong>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We are a digital agency focused on designing and building modern
              solutions for businesses that want to grow online.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-slate-500">
              From high-performance websites and e-commerce to SEO, hosting and
              ongoing maintenance, we combine technology, design and strategy to
              create simple solutions for real business needs.
            </p>

            <Link
              href="#contact"
              className="group mt-10 flex w-fit items-center gap-3 border-b border-slate-950 pb-1 text-sm font-semibold text-slate-950"
            >
              More about us
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid border-t border-slate-300 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-slate-300 py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0"
            >
              <p className="text-4xl font-semibold tracking-tight text-slate-950">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
