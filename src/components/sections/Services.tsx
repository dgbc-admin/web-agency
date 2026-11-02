import { Settings } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, modern and scalable websites designed around your business goals.",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Online stores focused on usability, performance and converting visitors into customers.",
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Technical and content optimization to improve your visibility in search engines.",
  },
  {
    number: "04",
    title: "Hosting & Maintenance",
    description:
      "Hosting, monitoring, updates and technical support to keep your website running.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <SectionLabel title="Our Services" icon={Settings} />

        {/* Intro */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2">
          <h2 className="max-w-xl text-5xl leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
            Digital solutions
            <br />
            built to <strong>grow.</strong>
          </h2>

          <p className="max-w-lg text-lg leading-8 text-slate-600 lg:ml-auto">
            From your first website to a complete digital platform, we build
            solutions designed around real business needs.
          </p>
        </div>

        {/* Services */}
        <div className="border-t border-slate-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-5 border-b border-slate-200 py-8 transition md:grid-cols-[100px_1fr_1fr] md:items-center"
            >
              <span className="text-sm text-slate-400">{service.number}</span>

              <h3 className="text-2xl font-medium tracking-tight text-slate-950 transition group-hover:text-blue-600">
                {service.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
