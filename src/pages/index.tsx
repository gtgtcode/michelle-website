import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Skillset from "@/components/skillset";
import GetQuote from "@/components/get-quote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skillset />
      <GetQuote />
      <Footer />
    </main>
  );
}
