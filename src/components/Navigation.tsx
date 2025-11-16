"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/util/cn";

const NAV_LINKS = [
  { href: "/classes", label: "Classes" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Runs when pathname changes while layout persists
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex items-center bg-neutral-dark text-neutral-light h-[50px] md:h-[76px] border-b border-neutral-mid">
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-full items-center divide-x divide-neutral-mid border-r border-neutral-mid">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex h-full items-center typo-link px-[1.875rem] hover:bg-brand-main"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/"
          className="flex h-full items-center typo-link px-[1.875rem] hover:opacity-60"
        >
          224 Nostrand Ave, Brooklyn, NY
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="h-full flex md:hidden">
        <button
          type="button"
          className="px-2.5 border-r border-neutral-mid"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <Image src="/hamburger.svg" height={30} width={30} alt="" />
        </button>
        <div
          className={cn(
            navOpen ? "right-0" : "right-full",
            "w-full flex flex-col absolute top-[50px] divide-y divide-neutral-mid border-b border-neutral-mid transition-[right] duration-200",
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-[1.875rem] typo-p1 bg-brand-soft text-neutral-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="p-[1.875rem] typo-p1 bg-brand-hot text-neutral-light"
          >
            Book with us
          </Link>
        </div>
      </div>

      {/* Logo/Brand */}
      <Link href="/" className="typo-p2 px-[1.875rem] ml-auto">
        Movement Studios.
      </Link>
    </nav>
  );
}
