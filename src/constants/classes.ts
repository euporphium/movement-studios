import type { ClassCardProps } from "@/app/classes/ClassCard";

export const CLASS_DATA: ReadonlyArray<ClassCardProps> = [
  {
    code: "C1",
    name: "Hip Hop Foundations",
    description:
      "This class introduces hip hop dance, including isolations, popping, locking, and basic footwork.",
    schedule: "Tuesdays 7:00 PM - 9:00PM",
  },
  {
    code: "C2",
    name: "Hip Hop Freestyle",
    description:
      "This class helps you develop your own unique movement vocabulary and respond to music in the moment.",
    schedule: "Tuesdays 7:00 PM - 9:00PM",
  },
  {
    code: "C4",
    name: "Jazz Technique",
    description:
      "This class focuses on classic jazz styles while building strength, flexibility, and musicality.",
    schedule: "Wednesdays 7:00 PM - 9:00PM",
  },
  {
    code: "D5",
    name: "Jazz Funk",
    description:
      "This class is perfect for those who love to dance with power and attitude.",
    schedule: "Thursdays 7:00 PM - 9:00PM",
  },
  {
    code: "B2",
    name: "Contact Improvisation",
    description:
      "This class focuses on movement through touch and weight sharing.",
    schedule: "Fridays 7:00 PM - 9:00PM",
    className: "md:col-span-2 md:border-r md:border-neutral-mid",
  },
];
