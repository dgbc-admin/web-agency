import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/navigation";

interface MegaMenuProps {
  id: string;
  isOpen: boolean;
  onNavigate?: () => void;
}

export default function MegaMenu({ id, isOpen, onNavigate }: MegaMenuProps) {
  if (!isOpen) return null;

  const primaryServices = services.slice(0, 2);
  const digitalServices = services.slice(2);

  return (
    <section
      id={id}
      aria-label="Services"
      className="absolute left-0 top-full z-40 hidden w-full border-t border-border-default bg-surface shadow-xl md:block"
    >
      <div className="app-container grid gap-12 py-10 lg:grid-cols-[1fr_1fr_0.8fr]">
        <section aria-labelledby="primary-services-heading">
          <h2
            id="primary-services-heading"
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary"
          >
            Services
          </h2>

          <ul>
            {primaryServices.map((service) => (
              <li
                key={service.title}
                className="border-b border-border-default"
              >
                <Link
                  href={service.href}
                  onClick={onNavigate}
                  className="group block py-4"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-medium text-text-primary transition-colors group-hover:text-brand">
                      {service.title}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-text-secondary">
                    {service.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="digital-services-heading">
          <h2
            id="digital-services-heading"
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary"
          >
            Digital Solutions
          </h2>

          <ul>
            {digitalServices.map((service) => (
              <li
                key={service.title}
                className="border-b border-border-default"
              >
                <Link
                  href={service.href}
                  onClick={onNavigate}
                  className="group block py-4"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-medium text-text-primary transition-colors group-hover:text-brand">
                      {service.title}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-text-secondary">
                    {service.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <aside className="flex flex-col justify-between bg-surface-dark p-7 text-white">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Have an idea?
            </p>

            <h2 className="mt-5 text-2xl font-medium leading-tight">
              Let&apos;s build something different.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Tell us about your next digital project and discover how we can
              help bring it to life.
            </p>
          </div>

          <Link
            href="#contact"
            onClick={onNavigate}
            className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors hover:text-brand"
          >
            Start a project
            <ArrowUpRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </aside>
      </div>
    </section>
  );
}
