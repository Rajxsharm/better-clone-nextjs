"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator" },
  { href: "/start", label: "Start" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-black text-primary">better<span className="text-gray-900">.clone</span></Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx("text-sm font-medium hover:text-primary transition", pathname === l.href && "text-primary")}>{l.label}</Link>
          ))}
          <Link href="/start" className="btn-primary text-sm">Get started</Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center rounded-xl border px-3 py-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/start" className="btn-primary text-sm w-full text-center" onClick={() => setOpen(false)}>Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
