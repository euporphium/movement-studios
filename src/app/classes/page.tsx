import BookingSection from "@/app/classes/BookingSection";
import PromiseSection from "@/app/classes/PromiseSection";
import Header from "@/components/Header";

export default function Classes() {
  return (
    <main>
      <Header
        heading="Classes"
        src="/classes/header.png"
        alt="Black and white photo of a group of men performing modern dance on a stage."
        h1ClassName="typo-h1-mono"
      />
      <BookingSection />
      <PromiseSection />
    </main>
  );
}
