"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const locales = [
  { code: "EN", country: "United Kingdom" },
  { code: "ES", country: "Spain" },
  { code: "DE", country: "Germany" },
  { code: "IT", country: "Italy" },
];

export default function LocaleSelector() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState("EN");

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex h-10 items-center gap-2 px-3 text-sm font-medium"
      >
        {locale}

        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 border border-slate-200 bg-white p-2 shadow-xl">
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-3 text-sm hover:bg-slate-100"
            >
              {item.country}

              <span className="text-slate-400">{item.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
