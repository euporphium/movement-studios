import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { cn } from "@/util/cn";

export interface HeaderProps {
  heading: string;
  src: string;
  alt: string;
  h1ClassName: string;
  cta?: {
    text: string;
    href: string;
  };
}

export default function Header({
  heading,
  src,
  alt,
  h1ClassName,
  cta,
}: HeaderProps) {
  const headingPosition = cta
    ? "bottom-[142px] md:bottom-auto md:top-[116px]"
    : "top-[116px]";

  return (
    <header className="relative h-[640px] lg:h-auto lg:aspect-1280/650">
      <h1
        className={cn(
          "absolute text-neutral-light z-10 left-[30px] max-w-[350px] md:max-w-[550px] lg:max-w-[600px]",
          headingPosition,
          h1ClassName,
        )}
      >
        {heading}
      </h1>
      {cta && (
        <LinkButton
          href={cta.href}
          className="absolute bottom-16 left-[30px] bg-brand-soft hover:bg-brand-hot hover:text-neutral-light"
        >
          {cta.text}
        </LinkButton>
      )}
      <Image
        className="object-cover object-[50%_50%] absolute inset-0 w-full h-full -z-10"
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        preload
      />
    </header>
  );
}
