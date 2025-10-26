"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/util/cn";

export default function MobileMenu({ className }: { className?: string }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={cn("h-full", className)}>
      <button
        type="button"
        className="px-2.5 border-r border-neutral-mid"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Image src="/hamburger.svg" height={30} width={30} alt="Hamburger" />
      </button>
      <nav
        className={cn(
          navOpen ? "right-0" : "right-full",
          "w-full flex flex-col absolute top-[50px] divide-y divide-neutral-mid border-b border-neutral-mid transition-[right] duration-200",
        )}
      >
        <a
          href="/classes"
          className="p-[1.875rem] text-p1 bg-brand-soft text-neutral-dark"
        >
          Classes
        </a>
        <a
          href="/about"
          className="p-[1.875rem] text-p1 bg-brand-soft text-neutral-dark"
        >
          About us
        </a>
        <a
          href="/"
          className="p-[1.875rem] text-p1 bg-brand-hot text-neutral-light"
        >
          Book with us
        </a>
      </nav>
    </div>
  );
}
