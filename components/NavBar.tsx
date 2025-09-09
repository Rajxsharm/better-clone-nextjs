"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLink = {
  href: `/${string}`; // ✅ typed route string
  label: string;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Better Clone
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href as string} // ✅ cast ensures TS accepts
              className={clsx(
                "text-sm font-medium hover:text-primary transition",
                pathname === l.href && "text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/start" className="btn-primary text-sm">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
