import Link from "next/link";

interface BrandLogoProps {
  onClick?: () => void;
}

export default function BrandLogo({ onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Web Agency - Home"
      onClick={onClick}
      className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-text-primary"
    >
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center bg-surface-dark text-sm text-white"
      >
        W
      </span>

      <span>
        WEB<span className="text-brand">.</span>
      </span>
    </Link>
  );
}
