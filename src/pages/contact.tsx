import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Construct mailto link with populated data
    const mailtoLink = `mailto:gsrgeneralservice@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Open default mail app
    window.location.href = mailtoLink;

    // Clear form fields after submission (optional)
    setSubject("");
    setMessage("");
  };

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
            <a href="tel:+18046647817" className="hover:text-blue-900">
              <i className="fa-solid fa-phone scale-[1.5] inline"></i>
              <p className="inline px-2 font-bold">(804) 664-7817</p>
            </a>
            {" | "}
            <a href="tel:+18045167859" className="hover:text-blue-900">
              <p className="inline pl-2 font-bold">(804) 516-7859 </p>
            </a>
          </div>
          <div className="inline md:pl-4">
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

        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border border-gray-300 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
