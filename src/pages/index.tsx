import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
