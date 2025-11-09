import Image from "next/image";

export interface FounderCardProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor?: string;
  imageClassName?: string;
}

export default function FounderCard({
  name,
  title,
  imageSrc,
  imageAlt,
  bgColor,
  textColor = "",
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
        <p className={`typo-h4 ${textColor}`}>{name}</p>
        <p className={`typo-p4 ${textColor}`}>{title}</p>
      </div>
    </article>
  );
}