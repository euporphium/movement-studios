import Image from "next/image";

export interface FounderCardProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  imageSizes: string;
}

export default function FounderCard({
  name,
  title,
  imageSrc,
  imageAlt,
  bgColor,
  imageSizes,
}: FounderCardProps) {
  return (
    <article className="h-full flex flex-col">
      <div className="relative flex-1">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={imageSizes}
        />
      </div>
      <div className={`flex flex-col gap-2 p-5 ${bgColor}`}>
        <p className="typo-h4">{name}</p>
        <p className="typo-p4">{title}</p>
      </div>
    </article>
  );
}
