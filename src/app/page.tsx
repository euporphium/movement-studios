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
    </main>
  );
}
