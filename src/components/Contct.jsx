import React, { useState } from "react";
import contactBg from "../assets/images/contact-bg.jpg"; // background image
import whyBg from "../assets/images/why-bg.jpg"; // texture (for fallback small screens)

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "f2a0be14-6182-4a9a-b077-312454a5ead9");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg || whyBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Heading + intro */}
        <div className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-10 items-start">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-amber-400">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight">
              Get in Touch with Us
            </h1>
            <p className="text-sm sm:text-base text-gray-200 max-w-xl">
              Have a question about our products, need assistance with an order,
              or planning a new interior project? Share your details and our
              team will connect with you shortly.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-200">
              <div>
                <span className="font-semibold text-amber-400">
                  Showroom Address:
                </span>
                <br />
                18, Niti Khand 3, Manoj Vihar, Indirapuram, Ghaziabad, Uttar Pradesh 201014
              </div>
              <div>
                <span className="font-semibold text-amber-400">Phone:</span>{" "}
                <a href="tel:+919899019661" className="hover:text-amber-300">
                  +919899019661
                </a>
              </div>
              <div>
                <span className="font-semibold text-amber-400">Email:</span>{" "}
                <a
                  href="mailto:aafurnitureparadise@gmail.com"
                  className="hover:text-amber-300"
                >
                  aafurnitureparadise@gmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-amber-400">
                  Timings:
                </span>{" "}
                Mon , 10:00 AM – 8:00 PM <br /> 
                <span className="px-8"></span>Tue , Close <br />
                <span className="px-8"></span>Wed - Sun , 10:00 AM – 8:00 PM
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-black/85 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Send us a Message
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              Fill in the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Full Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your contact number"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g. Furniture for 3BHK, Hardware for office..."
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                  placeholder="Tell us a bit about what you’re looking for..."
                />
              </div>

              {/* Hidden fields (optional custom meta) */}
              <input
                type="hidden"
                name="from_page"
                value="Furniture Paradise Contact Page"
              />

              {/* Status message */}
              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  ✅ Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  ⚠️ Something went wrong. Please try again or contact us
                  directly by phone.
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-amber-500 text-black font-semibold text-sm sm:text-base tracking-wide hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
