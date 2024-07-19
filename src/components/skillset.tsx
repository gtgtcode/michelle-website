import { Button } from "antd";
import localFont from "next/font/local";

const archivo = localFont({
  src: "../../public/fonts/ArchivoBlack-Regular.otf",
});

export default function Skillset() {
  return (
    <div>
      <div className="text-center text-2xl font-bold mt-12">
        Our Diverse Skillset
      </div>
      <section className="md:grid grid-cols-3 text-center mt-6 mb-12 container mx-auto">
        <div className="p-4 border border-2 rounded-[3xl] mx-2">
          <i className="fa-solid fa-spray-can-sparkles scale-[1.5]"></i>
          <br />
          <br />
          <h1 className="text-xl font-bold">Janitorial Services</h1>
          <p className="text-gray-600 mt-2 mb-6">
            GSR is dedicated and committed to providing you or your business
            with a clean environment.
          </p>
          <a href="/services">
            <Button type="primary" className="scale-[1.2]" danger>
              Learn More
            </Button>
          </a>
        </div>
        <div className="p-4 border border-2 rounded-[3xl] mx-2 mt-4 md:mt-0">
          <i className="fa-solid fa-paint-roller scale-[1.5]"></i>
          <br />
          <br />
          <h1 className="text-xl font-bold">Painting</h1>
          <p className="text-gray-600 mt-2 mb-6">
            A fresh new paint job can impress. GSR provides professional
            painting services.
          </p>
          <a href="/services">
            <Button type="primary" className="scale-[1.2]" danger>
              Learn More
            </Button>
          </a>
        </div>
        <div className="p-4 border border-2 rounded-[3xl] mx-2 mt-4 md:mt-0">
          <i className="fa-solid fa-hammer scale-[1.5]"></i>
          <br />
          <br />
          <h1 className="text-xl font-bold">Drywall Installation</h1>
          <p className="text-gray-600 mt-2 mb-6">
            GSR can provide professional drywall installation services for your
            home or business.
          </p>
          <a href="/services">
            <Button type="primary" className="scale-[1.2]" danger>
              Learn More
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
