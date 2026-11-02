"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";
import MegaMenu from "./MegaMenu";

export default function DesktopNavigation() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen((current) => !current);
  };

  const closeServices = () => {
    setServicesOpen(false);
  };

  return (
    <>
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <button
            type="button"
            onClick={toggleServices}
            aria-expanded={servicesOpen}
            aria-controls="services-menu"
            className="nav-link flex items-center gap-2"
          >
            Services
            <ChevronDown
              aria-hidden="true"
              size={14}
              strokeWidth={1.8}
              className={`transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </li>

        <NavigationLinks onNavigate={closeServices} />
      </ul>

      <div className="hidden md:block">
        <NavbarActions />
      </div>

      <MegaMenu
        id="services-menu"
        isOpen={servicesOpen}
        onNavigate={closeServices}
      />
    </>
  );
}
