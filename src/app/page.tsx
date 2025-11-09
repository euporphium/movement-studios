import FoundersSection from "@/app/FoundersSection";
import SplitSection from "@/app/SplitSection";
import CalloutSection from "@/components/CalloutSection";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import { MARQUEE_MESSAGES } from "@/constants/marquee";

export default function Home() {
  return (
    <main>
      <Header
        heading="Find your flow."
        src="/home/header.png"
        alt="Black and white photo of teens rehearsing a dance routine on a stage."
        h1ClassName="typo-h1"
        cta={{
          text: "Reserve your spot",
          href: "/classes",
        }}
      />
      <Marquee messages={MARQUEE_MESSAGES} />
      <SplitSection
        heroTitle="Vision"
        imageSrc="/home/vision.png"
        imageAlt="Black and white photo of a woman performing modern dance on a dark background."
        contentTitle="Who we are"
        bodyText="At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you’ll find a home here."
        buttonLabel="About us"
        buttonHref="/about"
      />
      <SplitSection
        heroTitle="Classes"
        imageSrc="/home/classes.png"
        imageAlt="Photo of a silhouette of two dancers posing in front of a red curtain."
        contentTitle="Our Classes"
        bodyText="Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer."
        buttonLabel="Reserve your spot"
        buttonHref="/classes"
      />
      <FoundersSection />
      <CalloutSection showLink />
    </main>
  );
}
