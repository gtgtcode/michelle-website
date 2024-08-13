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
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap">
          {/* Text Content Column */}
          <div className="w-full mb-12">
            <h2 className="text-xl font-bold mb-6 text-center">
              Why Choose GSR?
            </h2>
            <p className="mb-8 text-lg">
              At GSR General Services of RVA, LLC, our success is built on our
              dedicated team of professionals. We pride ourselves on delivering
              exceptional janitorial services with a focus on innovation and
              adaptability. Our goal is to create cleaner, healthier
              environments that exceed your expectations.
            </p>
            <div className="space-y-8">
              {/* Icon Box 1: Green Cleaning */}
              <div className="flex  items-center space-x-4">
                <div className="flex-shrink-0 text-green-500 text-4xl">
                  <i className="fas fa-leaf h-[36px] w-[37px]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Green Cleaning</h3>
                  <p className="text-gray-700">
                    We are committed to environmental sustainability with our
                    green cleaning practices, ensuring a healthier planet and
                    workplace.
                  </p>
                </div>
              </div>

              {/* Icon Box 2: Certified */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 text-blue-500 text-4xl">
                  <i className="fas fa-certificate h-[36px] w-[37px]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">We are Certified</h3>
                  <p className="text-gray-700">
                    Our team is up-to-date with the latest cleaning techniques,
                    technologies, and products to provide top-notch service.
                  </p>
                </div>
              </div>

              {/* Icon Box 3: Great Results */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 text-yellow-500 text-4xl">
                  <i className="fas fa-star h-[36px] w-[37px]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Great Results</h3>
                  <p className="text-gray-700">
                    We deliver superior cleaning services that guarantee
                    satisfaction and outstanding results for every client.
                  </p>
                </div>
              </div>

              {/* Icon Box 4: Qualified Staff */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 text-red-500 text-4xl">
                  <i className="fas fa-users h-[36px] w-[37px]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Qualified Staff</h3>
                  <p className="text-gray-700">
                    GSR is built on our skilled team members, each trained to
                    provide exceptional service and ensure a job well done.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Column for Additional Content */}
          <div className="w-full md:w-1/3 px-4">
            {/* Placeholder for additional content or space */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
