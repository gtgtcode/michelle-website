import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <img src="/richmond.png" alt="Richmond" className="mx-auto" />
      <section className="container mx-auto text-center">
        <h1 className="my-12 font-bold text-2xl text-center">
          We want to hear from you.
        </h1>
        <section className="mb-12">
          <div className="inline">
            <a href="tel:+1804664-7817" className="hover:text-blue-900">
              <i className="fa-solid fa-phone scale-[1.5] inline"></i>
              <p className="inline pl-2 font-bold">(804) 664-7817</p>
            </a>
          </div>
          <i className="fa-solid fa-grip-lines-vertical mx-4 scale-[1.5] inline"></i>
          <div className="inline">
            <a
              href="mailto:gsrgeneralservice@gmail.com"
              className="hover:text-blue-900"
            >
              <i className="fa-solid fa-envelope scale-[1.5] inline"></i>
              <p className="inline pl-2 font-bold">
                gsrgeneralservice@gmail.com
              </p>
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </section>
      </section>
      <Footer />
    </main>
  );
}
