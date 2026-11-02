import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-center gap-3 px-6 py-2 text-center text-xs sm:text-sm lg:px-10">
        <span className="text-slate-300">
          Ready to bring your next digital idea to life?
        </span>

        <Link
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-medium text-white"
        >
          Start a project
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
