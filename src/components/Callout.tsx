import LinkButton from "@/components/LinkButton";

export interface CalloutProps {
  showLink?: boolean;
}

export default function Callout({ showLink = false }: CalloutProps) {
  return (
    <article className="bg-brand-main py-[110px] lg:py-[149px]">
      <div className="flex flex-col gap-[30px] max-w-7xl mx-auto px-11 md:px-[60px]">
        <p className="typo-h3 text-neutral-light">
          Whether you're a beginner looking to explore expressive movement or an
          advanced dancer ready to refine your technique, we have classes for
          you!
        </p>
        {showLink && (
          <LinkButton
            href="/classes"
            className="self-start bg-brand-soft hover:bg-brand-hot hover:text-neutral-light"
          >
            Reserve your spot
          </LinkButton>
        )}
      </div>
    </article>
  );
}
