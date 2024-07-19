import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { Button } from "antd";
import Footer from "@/components/footer";
import Skillset from "@/components/skillset";
import GetQuote from "@/components/get-quote";

const inter = Inter({ subsets: ["latin"] });

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
