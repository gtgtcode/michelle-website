import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceTemplate from "@/components/service-template";

export default function Services() {
  return (
    <main>
      <Navbar />
      <h1 className="font-bold text-2xl text-center mt-12">Our Services</h1>
      <ServiceTemplate
        align="right"
        header="Janitorial Services"
        src="/janitorial.jpg"
        alt="Janitorial Image"
        content={
          "GSR provides both residential and commercial janitorial services in the Greater Richmond area. From waxing floors to shampooing carpets, we can do it all. We will ensure that your building is as clean as it can be."
        }
      />
      <ServiceTemplate
        align="left"
        header="Painting"
        src="/painting.jpeg"
        alt="Painting Image"
        content={
          "At GSR, we specialize in transforming spaces with our exceptional residential and commercial painting services in the Greater Richmond area. Whether you’re looking to refresh your home with vibrant colors or create an inviting atmosphere for your business, our skilled team is dedicated to delivering impeccable results. Let us bring your vision to life with a professional touch!"
        }
      />
      <ServiceTemplate
        align="right"
        header="Drywall Installation"
        src="/drywall.jpg"
        alt="Drywall Image"
        content={
          "GSR offers top-notch drywall installation services for both residential and commercial projects in the Greater Richmond area. Our experienced team ensures precise fitting and finishing, creating a smooth canvas for your interior design. Trust us to enhance your space with quality craftsmanship that stands the test of time!"
        }
      />

      <Footer />
    </main>
  );
}
