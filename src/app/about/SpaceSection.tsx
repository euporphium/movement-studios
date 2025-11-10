import Image from "next/image";

export default function SpaceSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative lg:col-span-2 min-h-[375px] md:min-h-[400px] lg:min-h-[480px]">
        <Image
          className="object-cover md:hidden"
          src="/about/space-mobile.png"
          alt="Minimal, empty dance studio"
          fill
          sizes="100vw"
        />
        <Image
          className="object-cover hidden md:block lg:hidden"
          src="/about/space-tablet.png"
          alt="Minimal, empty dance studio"
          fill
          sizes="50vw"
        />
        <Image
          className="object-cover hidden lg:block"
          src="/about/space.png"
          alt="Minimal, empty dance studio"
          fill
          sizes="67vw"
        />
      </div>
      <div className="flex bg-neutral-dark text-neutral-light border-t border-neutral-mid">
        <div className="px-5 py-[30px] flex flex-col gap-5 my-auto">
          <h2 className="typo-h5">Our Space</h2>
          <p>
            Whether you're a beginner looking to explore expressive movement or
            an advanced dancer ready to refine your technique, we have classes
            for you! Join our weekly sessions,{" "}
            <span className="text-brand-hot">
              drop in for open-level classes
            </span>
            , or take part in our upcoming choreography series. Don't miss our
            special Masterclass with Maxime Longue this Saturday! Limited spots
            available
          </p>
        </div>
      </div>
    </section>
  );
}
