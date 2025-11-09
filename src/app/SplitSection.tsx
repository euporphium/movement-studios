import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export interface SplitSectionProps {
  heroTitle: string;
  imageSrc: string;
  imageAlt: string;
  contentTitle: string;
  bodyText: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function SplitSection({
  heroTitle,
  imageSrc,
  imageAlt,
  contentTitle,
  bodyText,
  buttonLabel,
  buttonHref,
}: SplitSectionProps) {
  return (
    <section className="grid md:grid-cols-2 border-b border-neutral-mid">
      <div className="relative aspect-square">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
        <h2 className="typo-h1 text-neutral-light absolute p-[30px]">
          {heroTitle}
        </h2>
      </div>

      <div className="aspect-square flex flex-col justify-center gap-9 px-11 md:px-12 lg:px-28">
        <h3 className="typo-h5">{contentTitle}</h3>
        <p className="typo-p3">{bodyText}</p>
        <LinkButton
          href={buttonHref}
          className="self-start text-neutral-light bg-brand-deep hover:bg-brand-main"
        >
          {buttonLabel}
        </LinkButton>
      </div>
    </section>
  );
}
