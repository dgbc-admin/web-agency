import BrandLogo from "@/components/ui/BrandLogo";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="relative">
      <div className="app-container flex h-20 items-center justify-between">
        <BrandLogo />

        <DesktopNavigation />

        <MobileNavigation />
      </div>
    </nav>
  );
}
