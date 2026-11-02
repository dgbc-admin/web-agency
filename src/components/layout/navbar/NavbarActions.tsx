import ThemeToggle from "@/components/ui/ThemeToggle";

import SearchButton from "./SearchButton";
import LocaleSelector from "./LocaleSelector";

interface NavbarActionsProps {
  showThemeToggle?: boolean;
}

export default function NavbarActions({
  showThemeToggle = false,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <SearchButton />

      {showThemeToggle && <ThemeToggle />}

      <LocaleSelector />
    </div>
  );
}
