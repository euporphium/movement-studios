import FounderCard from "@/components/FounderCard";

export default function FoundersSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left column - Heading and quote */}
      <div className="flex flex-col justify-center gap-[160px] p-[30px] lg:gap-[288px]">
        <h2 className="typo-h3">Our Founders</h2>
        <div className="flex flex-col gap-4 max-w-[400px]">
          <p className="typo-p2">"Find your flow, and dance your truth."</p>
          <p className="typo-p3">— Sophia Bennett</p>
        </div>
      </div>

      {/* Right column - Founder images */}
      <div className="grid grid-rows-2">
        <FounderCard
          name="Sophia Bennett"
          title="Founder & Instructor"
          imageSrc="/home/sophia.png"
          imageAlt="Black and white portrait of a dance instructor posing in front of a dark background."
          bgColor="bg-brand-hot"
          imageClassName="h-[220px] lg:h-[307px]"
        />
        <FounderCard
          name="Alisa Morris"
          title="Founder & Program Manager"
          imageSrc="/home/alisa.png"
          imageAlt="Black and white portrait of a dance instructor against a light background."
          bgColor="bg-brand-soft"
          textColor="text-neutral-dark"
          imageClassName="h-[220px] lg:h-[307px]"
        />
      </div>
    </section>
  );
}
