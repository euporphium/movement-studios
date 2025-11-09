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
      <Image
        className={`w-full object-cover ${imageClassName}`}
        src={imageSrc}
        alt={imageAlt}
        width={640}
        height={307}
      />
      <div className={`flex flex-col gap-2 p-5 ${bgColor}`}>
        <p className="typo-h4">{name}</p>
        <p className="typo-p4">{title}</p>
      </div>
    </article>
  );
}
