"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
];

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f8]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-950"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-slate-950 text-sm text-white">
            W
          </span>

          <span>
            WEB<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {language}

              <span
                className={`text-xs transition-transform duration-200 ${
                  languageOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 border border-slate-200 bg-white p-2 shadow-xl">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                      setLanguageOpen(false);
                    }}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.label}

                    <span className="text-xs text-slate-400">{item.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="#contact"
            className="group flex items-center gap-3 border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            Let&apos;s Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
