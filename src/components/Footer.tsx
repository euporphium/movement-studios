export default function Footer() {
  return (
    <footer>
      <div className="bg-brand-soft pb-12 md:pb-60">
        <section className="grid md:grid-cols-3 gap-10 p-[1.875rem]">
          <h2 className="typo-h1">Mov. Stu.</h2>
          <ul className="flex flex-col gap-9 typo-p4 px-[1.875rem]">
            <li className="flex flex-col gap-2">
              <div>Email:</div>
              <a href="mailto:hello@figma.com" className="underline">
                hello@figma.com
              </a>
            </li>
            <li className="flex flex-col gap-2">
              <div>Instagram:</div>
              <a href="/" className="underline">
                @figma
              </a>
            </li>
            <li className="flex flex-col gap-2">
              <div>Facebook:</div>
              <a href="/" className="underline">
                figma
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-9 typo-p4 px-[1.875rem]">
            <div>Address:</div>
            <div className="flex flex-col gap-2">
              <div>224 Candyland Lane, Brooklyn, NY</div>
              <div>(646) 555-4567</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Movement Studios©</div>
              <div>2025 All Rights Reserved</div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <ul className="grid grid-cols-3">
          <li className="bg-brand-main text-neutral-light p-[1.875rem] pb-[8.375rem]">
            <a href="/" className="typo-h4">
              Our Socials
            </a>
          </li>
          <li className="bg-neutral-dark text-neutral-light p-[1.875rem] pb-[8.375rem]">
            <a href="/" className="typo-h4">
              Email us
            </a>
          </li>
          <li className="typo-h4 bg-brand-hot text-neutral-dark p-[1.875rem] pb-[8.375rem]">
            <a href="/" className="typo-h4">
              Book with us
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
