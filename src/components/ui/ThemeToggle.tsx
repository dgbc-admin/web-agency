"use client";

import { Sun } from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`
        relative
        flex size-10
        items-center justify-center
        rounded-full
        border-2
        bg-gradient-to-br
        from-[#444245]
        to-[#171717]
        transition-all
        duration-200
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-brand

        ${
          isDark
            ? `
              translate-y-px
              border-[#181818]
              shadow-[inset_3px_3px_5px_#080808,inset_-2px_-2px_4px_#3a3a3a]
            `
            : `
              border-[#252525]
              shadow-[inset_2px_2px_0_#7d7c7e,inset_-2px_-2px_0_#1c1c1c,3px_3px_8px_#141414]
            `
        }
      `}
    >
      <span className="relative flex items-center justify-center">
        <Sun
          aria-hidden="true"
          size={20}
          strokeWidth={1.7}
          className={`
            transition-all duration-200
            ${isDark ? "scale-90 text-slate-500" : "scale-100 text-slate-200"}
          `}
        />
        <span
          aria-hidden="true"
          className={`
    pointer-events-none
    absolute
    h-px
    w-6
    -rotate-45
    rounded-full
    bg-slate-500
    transition-all
    duration-200
    ${isDark ? "scale-x-100 opacity-70" : "scale-x-0 opacity-0"}
  `}
        />
      </span>
    </button>
  );
}
