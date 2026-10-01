import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Offer from "@/components/Offer";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Hero />
      <Services />
      <Contact />
      <Offer />
    </main>
  );
}
