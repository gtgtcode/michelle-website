import { Button } from "@mui/material";
import localFont from "next/font/local";
import Link from "next/link";

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
      <h1 className="text-2xl">Need Link quote on your next project?</h1>
      <p className="mt-4 mb-8">Send us an email or call for further details.</p>
      <Link href="/contact">
        <Button variant="contained" color="error">
          Contact Us
        </Button>
      </Link>
    </section>
  );
}
