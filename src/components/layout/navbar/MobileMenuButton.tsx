import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="icon-button md:hidden"
    >
      {isOpen ? (
        <X aria-hidden="true" size={24} strokeWidth={1.7} />
      ) : (
        <Menu aria-hidden="true" size={24} strokeWidth={1.7} />
      )}
    </button>
  );
}
