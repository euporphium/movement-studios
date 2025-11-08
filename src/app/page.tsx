import Header from "@/components/Header";

export default function Home() {
  return (
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
  );
}
