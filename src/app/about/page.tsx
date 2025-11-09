import Callout from "@/components/Callout";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import { MARQUEE_MESSAGES } from "@/constants/marquee";
import AboutFoundersSection from "./AboutFoundersSection";

export default function About() {
  return (
    <main>
      <Header
        heading="About Us"
        src="/about/header.png"
        alt="Photo of a group of modern dancers posing on a stage."
        h1ClassName="typo-h1-mono"
      />
      <Marquee messages={MARQUEE_MESSAGES} />
      <AboutFoundersSection />
      <Callout showLink />
    </main>
  );
}
