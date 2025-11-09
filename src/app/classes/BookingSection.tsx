import { ClassCard } from "@/app/classes/ClassCard";
import { FeaturedClassCard } from "@/app/classes/FeaturedClassCard";
import { CLASS_DATA, FEATURED_CLASS_DATA } from "@/constants/classes";

export default function BookingSection() {
  return (
    <section className="grid lg:grid-cols-3">
      <div className="bg-neutral-dark p-[30px] h-[204px] md:h-[217px] lg:h-auto">
        <h2 className="text-neutral-light typo-h3 max-w-[366px]">
          Booking Experience for Classes
        </h2>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-neutral-mid">
        {CLASS_DATA.map((classData) => (
          <ClassCard key={classData.code} {...classData} />
        ))}
        <FeaturedClassCard {...FEATURED_CLASS_DATA} />
      </div>
    </section>
  );
}
