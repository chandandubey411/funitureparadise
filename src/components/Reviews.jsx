import React, { useEffect, useRef, useState } from "react";
import whyBg from "../assets/images/why-bg.jpg"; // same background texture

// ---------- Scroll Reveal Helper ----------
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

// ---------- MAIN REVIEWS PAGE ----------
export default function Reviews() {
  const reviews = [
    {
      name: "Harsh Chaudhary",
      rating: 5,
      title: "Huge variety and helpful team",
      text: "Wide range of options available as per our need, from elite to luxury with a large choice of designs. The staff patiently helped us select everything for our new flat.",
      source: "Google Review",
    },
    {
      name: "Gourav Kashyap",
      rating: 5,
      title: "Best hardware store in Indirapuram",
      text: "Best hardware store in Indirapuram, providing excellent products and services. The quality of handles and locks is far better than what we saw elsewhere.",
      source: "Google Review",
    },
    {
      name: "Shruti Verma",
      rating: 5,
      title: "Great furniture suggestions",
      text: "We bought sofa, dining and some bedroom furniture from here. They guided us with fabric choices and sizes according to our living room layout.",
      source: "Customer Feedback",
    },
    {
      name: "Amit Sharma",
      rating: 4.5,
      title: "Professional and reliable",
      text: "On-time delivery and proper installation of all hardware. Prices are transparent and they suggested value options without compromising quality.",
      source: "Google Review",
    },
  ];

  const renderStars = (count) => {
    const full = Math.floor(count);
    const half = count % 1 >= 0.5;
    return (
      <>
        {"★".repeat(full)}
        {half && "☆"}
      </>
    );
  };

  return (
    <section
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${whyBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Heading */}
        <FadeIn>
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400 text-center">
            Customer Notes
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold text-center">
            Words From Our Customers
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-3xl mx-auto text-center">
            Real experiences from homeowners, designers and contractors who have
            trusted Furniture Paradise &amp; Hardware for furniture and
            hardware solutions in and around Indirapuram.
          </p>
        </FadeIn>

        {/* CTA Row */}
        <FadeIn delay={150}>
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-xs sm:text-sm text-gray-300">
              We value every review and constantly work to improve based on your
              feedback.
            </p>
            <a
              href="https://www.google.com/search?sca_esv=dfadecdb5483248d&sxsrf=AE3TifPbQuAG8_4DAWP_VszBc1VBpOjMZA:1764568614815&kgmid=/g/1tfdx6_l&q=Furniture+Paradise+%26+Hardware&shndl=30&shem=damc,ptotple,shrtsdl&source=sh/x/loc/act/m1/2&kgs=1ac49a68d09a88fa&utm_source=damc,ptotple,shrtsdl,sh/x/loc/act/m1/2#lrd=0x390cfaaa047837df:0x6c585f87d88ea587,1,,,," // replace with actual Google review link
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition"
            >
              LEAVE US REVIEW
            </a>
          </div>
        </FadeIn>

        {/* Reviews Grid */}
        <FadeIn delay={250}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((rev, idx) => (
              <div
                key={rev.name + idx}
                className="bg-black/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-transform"
              >
                <div>
                  <div className="text-amber-400 text-lg">
                    {renderStars(rev.rating)}
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-semibold text-white">
                    {rev.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-100 leading-relaxed">
                    {rev.text}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-amber-400">{rev.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {rev.source}
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Rating: {rev.rating.toFixed(1)} / 5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom note */}
        <FadeIn delay={350}>
          <div className="mt-12 text-center text-xs sm:text-sm text-gray-400">
            Want to know more? Visit our showroom to see products in person and
            talk to our team about your upcoming project.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
