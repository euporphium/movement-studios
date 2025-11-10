import { INSTRUCTOR_DATA } from "@/constants/instructors";
import { cn } from "@/util/cn";

export interface InstructorCardProps {
  name: string;
  style: string;
  description: string;
}

function InstructorCard({ name, style, description }: InstructorCardProps) {
  return (
    <article
      className={cn(
        "p-5 typo-p4 flex flex-col gap-[125px] bg-neutral-dark border-neutral-mid",
        // Mobile: border-b on all except last
        "border-b last:border-b-0",
        // md+: border-r on odd items (first column), border-b on all except last 2
        "md:border-b md:odd:border-r",
        "md:[&:nth-last-child(-n+2)]:border-b-0",
      )}
    >
      <div>
        <h3 className="text-neutral-light">{name}</h3>
        <p className="text-brand-hot">{style}</p>
      </div>
      <p className="text-neutral-light mt-auto opacity-70">{description}</p>
    </article>
  );
}

export default function InstructorsSection() {
  return (
    <section className="grid lg:grid-cols-3 border-t border-neutral-mid">
      <div className="bg-neutral-dark p-[30px] pb-16 border-b lg:border-b-0 lg:border-r border-neutral-mid">
        <h2 className="text-neutral-light typo-h3">Instructors</h2>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
        {INSTRUCTOR_DATA.map((instructor) => (
          <InstructorCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </section>
  );
}
