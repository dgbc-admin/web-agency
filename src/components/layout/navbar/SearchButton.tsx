import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      type="button"
      aria-label="Search"
      className="flex h-10 w-10 items-center justify-center transition hover:bg-slate-100"
    >
      <Search size={18} strokeWidth={1.8} />
    </button>
  );
}
