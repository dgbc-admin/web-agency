"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { services } from "@/data/navigation";

import MobileMenuButton from "./MobileMenuButton";
import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((current) => !current);
  };

  const closeNavigation = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu} />

      {isOpen && (
        <div
          id="mobile-navigation"
          className="
            absolute
            left-0
            top-full
            z-50
            w-full
            border-t
            border-border-default
            bg-surface
            md:hidden
          "
        >
          <div className="app-container py-6">
            <ul>
              <li className="border-b border-border-default">
                <button
                  type="button"
                  onClick={toggleServices}
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-menu"
                  className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-text-primary"
                >
                  Services
                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.8}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <ul id="mobile-services-menu" className="pb-4">
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link
                          href={service.href}
                          onClick={closeNavigation}
                          className="flex items-center justify-between py-3 pl-4 text-sm font-medium text-text-secondary transition-colors hover:text-brand"
                        >
                          {service.title}

                          <span aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <NavigationLinks variant="mobile" onNavigate={closeNavigation} />
            </ul>

            <div className="mt-6">
              <NavbarActions />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
