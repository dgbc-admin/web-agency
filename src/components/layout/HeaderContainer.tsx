import type { ReactNode } from "react";

interface HeaderContainerProps {
  children: ReactNode;
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      {children}
    </header>
  );
}
