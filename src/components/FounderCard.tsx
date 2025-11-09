import Image from "next/image";

export interface FounderCardProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  imageClassName?: string;
}

export default function FounderCard({
  name,
  title,
  imageSrc,
  imageAlt,
  bgColor,
  imageClassName = "",
}: FounderCardProps) {
  return (
    <article>
      <div className="relative aspect-[640/307]">
        <Image
          className={`w-full object-cover ${imageClassName}`}
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className={`flex flex-col gap-2 p-5 ${bgColor}`}>
        <p className="typo-h4">{name}</p>
        <p className="typo-p4">{title}</p>
      </div>
    </article>
  );
}
