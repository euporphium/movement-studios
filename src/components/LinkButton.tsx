import Link from "next/link";
import { cn } from "@/util/cn";

export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(" typo-btn py-[18px] px-[26px]", className)}
    >
      {children}
    </Link>
  );
}
