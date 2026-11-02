import { Phone } from "lucide-react";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24  lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <SectionLabel title="Contact" icon={Phone} />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-6 text-sm text-slate-400">
              Have a project in mind?
            </p>

            <h2 className="max-w-4xl text-6xl leading-[0.95] text-slate-950 tracking-tight md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              something <strong>different.</strong>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-sm leading-7 text-slate-400">
              Tell us about your idea, your business and what you want to
              achieve. We&apos;ll help you find the right digital solution.
            </p>

            <Link
              href="mailto:hello@example.com"
              className="mt-10 flex w-fit items-center gap-4 border-b border-white pb-2 text-lg font-medium transition hover:text-blue-400"
            >
              Start a project
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:justify-between">
          <p>Digital Agency · Spain</p>
          <p>Web Development · SEO · Hosting · E-commerce</p>
        </div>
      </div>
    </section>
  );
}
