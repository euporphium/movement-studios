import Image from "next/image";
import Callout from "@/components/Callout";

export default function PromiseSection() {
  return (
    <section className="grid lg:grid-cols-3 border-t border-neutral-mid">
      <div className="bg-neutral-dark p-[30px] pb-16">
        <h2 className="text-neutral-light typo-h3">Our Promise</h2>
      </div>
      <div className="lg:col-span-2">
        <Callout />
        <div className="relative aspect-[16/9]">
          <Image
            className="object-cover"
            src="/classes/promise.png"
            alt="Photo of a female dancer in a modern dance pose with a spotlight on her."
            fill
            sizes="(max-width: 800px) 100vw, 66vw"
          />
        </div>
      </div>
    </section>
  );
}
