import { Button } from "antd";
import localFont from "next/font/local";

const archivo = localFont({
  src: "../../public/fonts/ArchivoBlack-Regular.otf",
});

export default function GetQuote() {
  return (
    <section
      className={
        "bg-red-700 text-white py-12 px-2 text-center " + archivo.className
      }
    >
      <h1 className="text-2xl">Need a quote on your next project?</h1>
      <p className="mt-4 mb-8">Send us an email or call for further details.</p>
      <a href="/contact">
        <Button type="primary">Contact Us</Button>
      </a>
    </section>
  );
}
