import Image from "next/image";
import Link from "next/link";

export interface FeaturedClassCardProps {
  name: string;
  description: string;
  code: string;
  schedule: string;
  mobileImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tabletImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  desktopImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function FeaturedClassCard({
  name,
  description,
  code,
  schedule,
  mobileImage,
  tabletImage,
  desktopImage,
}: FeaturedClassCardProps) {
  return (
    <article className="h-[480px] relative md:col-span-2 md:border-r md:border-neutral-mid">
      <Image
        {...mobileImage}
        className="w-full h-full object-cover md:hidden"
      />
      <Image
        {...tabletImage}
        className="w-full h-full object-cover hidden md:block lg:hidden"
      />
      <Image
        {...desktopImage}
        className="w-full h-full object-cover hidden lg:block"
      />
      <span className="absolute inset-0 typo-h1-mono text-neutral-light p-[30px]">
        {code}
      </span>

      <div className="absolute bottom-0 left-0 right-0 bg-neutral-light">
        <div className="p-5 flex flex-col gap-2.5">
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
      </div>
    </article>
  );
}
