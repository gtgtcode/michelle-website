import { Button } from "@mui/material";
import localFont from "next/font/local";
import Link from "next/link";

const archivo = localFont({
  src: "../../public/fonts/ArchivoBlack-Regular.otf",
});

const electionTime = localFont({
  src: "../../public/fonts/ElectionTime.ttf",
});

export default function Hero() {
  return (
    <section className="overflow-hidden h-[500px] w-full relative">
      <video
        autoPlay
        loop
        muted
        className="mx-auto min-w-[100%] min-h-[100%] scale-[3] md:scale-100"
      >
        <source src="/clip.mp4" />
      </video>
      <div className="absolute w-[100%] h-[100%] bg-black top-0 opacity-70"></div>
      <div
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        }
      >
        <span
          className={`${electionTime.className} text-xl md:text-[30px] text-white`}
        >
          GSR{" "}
        </span>
        <span
          className={`${archivo.className} text-lg md:text-[30px] text-white`}
        >
          welcomes you!
        </span>
        <br />
        <br />
        <span
          className={`${archivo.className} text-md md:text-[20px] text-white`}
        >
          GSR is here for your needs. See what we can do for you.
        </span>
        <br />
        <br />
        <Link href="/services">
          <Button variant="contained" className="scale-[1.2]" color="error">
            Our Services
          </Button>
        </Link>
      </div>
    </section>
  );
}
