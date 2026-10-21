import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Hero />
      <Offer />
      <Services />
      <Steps />
      <Shop />
      <Contact />
    </main>
  );
}
