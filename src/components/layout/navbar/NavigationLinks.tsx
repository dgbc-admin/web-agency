import Link from "next/link";

import { mainNavigation } from "@/data/navigation";

interface NavigationLinksProps {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}

export default function NavigationLinks({
  onNavigate,
  variant = "desktop",
}: NavigationLinksProps) {
  const isMobile = variant === "mobile";

  return (
    <>
      {mainNavigation.map((item) => (
        <li
          key={item.href}
          className={isMobile ? "border-b border-border-default" : undefined}
        >
          <Link
            href={item.href}
            onClick={onNavigate}
            className={
              isMobile
                ? "block py-5 text-lg font-medium text-text-primary"
                : "nav-link"
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
