import type { LucideIcon } from "lucide-react";

interface SectionLabelProps {
  title: string;
  icon: LucideIcon;
}

export default function SectionLabel({ title, icon: Icon }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        {title}
      </h2>

      <div className="h-px w-20 bg-blue-600" />
    </div>
  );
}
