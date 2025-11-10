import FounderCard from "@/components/FounderCard";

export default function AboutFoundersSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 border-t border-neutral-mid">
      <div className="bg-neutral-dark p-[30px] pb-16 lg:border-r border-neutral-mid">
        <h2 className="text-neutral-light typo-h3">Founders</h2>
      </div>
      <div className="grid md:grid-cols-2 md:col-span-2">
        <div className="aspect-square md:border-r border-neutral-mid">
          <FounderCard
            name="Sophia Bennett"
            title="Founder & Instructor"
            imageSrc="/about/sophia.png"
            imageAlt="Black and white portrait of a dance instructor posing in front of a dark background."
            imageSizes="(max-width: 800px) 100vw, (max-width: 1280px) 50vw, 33vw"
            bgColor="bg-brand-hot"
          />
        </div>
        <div className="aspect-square">
          <FounderCard
            name="Alisa Morris"
            title="Founder & Program Manager"
            imageSrc="/about/alisa.png"
            imageAlt="Black and white portrait of a dance instructor against a light background."
            imageSizes="(max-width: 800px) 100vw, (max-width: 1280px) 50vw, 33vw"
            bgColor="bg-brand-soft"
          />
        </div>
      </div>
    </section>
  );
}
