"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/mortgage-calculator", label: "Calculator" },
  { href: "/start", label: "Get Started" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-xl font-bold">Better Clone</h1>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href as string} // ✅ cast fixes TS error
              className={clsx(
                "text-sm font-medium hover:text-primary transition",
                pathname === l.href && "text-primary"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/start"
          className="btn-primary text-sm px-4 py-2 rounded-md bg-primary text-white"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
