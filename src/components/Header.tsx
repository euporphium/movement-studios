import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="z-20 flex items-center bg-neutral-dark text-neutral-light h-[50px] md:h-[76px] border-b border-neutral-mid">
      <nav className="hidden md:flex h-full items-center divide-x divide-neutral-mid border-r border-neutral-mid">
        <a
          href="/classes"
          className="flex h-full items-center text-link px-[1.875rem] hover:bg-brand-main"
        >
          Classes
        </a>
        <a
          href="/about"
          className="flex h-full items-center text-link px-[1.875rem] hover:bg-brand-main"
        >
          About
        </a>
        <a
          href="/"
          className="flex h-full items-center text-link px-[1.875rem] hover:opacity-60"
        >
          224 Nostrand Ave, Brooklyn, NY
        </a>
      </nav>
      <MobileMenu className="flex md:hidden" />
      <span className="text-p2 px-[1.875rem] ml-auto">Movement Studios.</span>
    </header>
  );
}
