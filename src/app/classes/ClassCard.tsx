import Image from "next/image";
import Link from "next/link";
import { cn } from "@/util/cn";

export interface ClassCardProps {
  name: string;
  description: string;
  code: string;
  schedule: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
}

export function ClassCard({
  name,
  description,
  code,
  schedule,
  image,
  className,
}: ClassCardProps) {
  return (
    <article className={cn("relative flex flex-col", className)}>
      <Image {...image} className="w-full object-cover" />
      <span className="absolute inset-0 typo-h1-mono text-neutral-light p-[30px]">
        {code}
      </span>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="typo-h4">{name}</h3>
        <p className="typo-p5">{description}</p>
      </div>
      <div className="flex items-stretch justify-between border-t border-neutral-mid typo-p5">
        <span className="text-brand-deep flex items-center pl-5 py-4">
          {schedule}
        </span>
        <Link
          href="/"
          className="border-l border-neutral-mid flex items-center pl-4 pr-5 py-4 hover:bg-brand-main hover:text-neutral-light"
        >
          Book now
        </Link>
      </div>
    </article>
  );
}
