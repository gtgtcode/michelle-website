import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceTemplate from "@/components/service-template";
import { Button } from "antd";
import localFont from "next/font/local";

const archivo = localFont({
  src: "../../public/fonts/ArchivoBlack-Regular.otf",
});

export default function About() {
  return (
    <main>
      <Navbar />
      <section
        className={
          "bg-red-700 text-white py-12 px-2 text-center " + archivo.className
        }
      >
        <i className="fa-solid fa-clock scale-[2]"></i>
        <br />
        <br />
        <h1 className="text-2xl">Available when you need us.</h1>
        <p className="mt-4 mb-8">
          GSR is available 24/7. In the case of emergencies, GSR is prepared
          with a highly-experienced team.
        </p>
        <a href="/contact">
          <Button type="primary">Contact Us</Button>
        </a>
      </section>
      <div className="my-12">
        <h1 className="font-bold text-2xl text-center mb-12">About Us</h1>
        <ServiceTemplate
          align="left"
          header="GSR General Services of RVA, LLC."
          src="/eagle.jpg"
          alt="Eagle Image"
          content={
            "At GSR, we have over fifteen years of experience in our field! GSR specializes in janitorial services in health centres, residential, offices, restaurants, and more. Based in Richmond, VA, we proudly serve clients across Virginia. Whether you need daily cleaning, specialized sanitization, or comprehensive maintenance solutions, GSR is dedicated to delivering top-quality service tailored to your needs. Contact us today to see how we can work for you!"
          }
        />
      </div>

      <Footer />
    </main>
  );
}
