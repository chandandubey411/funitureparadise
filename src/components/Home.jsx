import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ------------ IMAGE IMPORTS (put files in src/assets/images) ------------ */
import heroChair from "../assets/images/hero-chair.jpg";
import welcomeChair from "../assets/images/welcome-chair.jpg";
import cozyMain from "../assets/images/cozy-main.jpg";
import cozyKitchen from "../assets/images/cozy-kitchen.jpg";
import cozyPendants from "../assets/images/cozy-pendants.jpg";
import cozyBedroom from "../assets/images/cozy-bedroom.jpg";
import prodDoor from "../assets/images/prod-door.jpg";
import prodCabinet from "../assets/images/prod-cabinet.jpg";
import prodFittings from "../assets/images/prod-fittings.jpg";
import prodLocks from "../assets/images/prod-locks.jpg";
import ultraChair from "../assets/images/ultra-chair.jpg";
import ultraSofa from "../assets/images/ultra-sofa.jpg";
import ultraBed from "../assets/images/ultra-bed.jpg";
import ultraDining from "../assets/images/ultra-dining.jpg";
import transformBg from "../assets/images/transform-bg.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import contactBg from "../assets/images/contact-bg.jpg";
import whyBg from "../assets/images/why-bg.jpg";
import whatsappIcon from "../assets/images/whatsapp.png";

/* -------- Small helper for scroll-reveal animation -------- */
function FadeInSection({ children, delay = 0 }) {
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
      className={`transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------------------- MAIN HOMEPAGE ---------------------- */

export default function HomePage() {
  return (
    <div className="bg-[#151515] text-white">
      {/* ===================== HERO SECTION ===================== */}
      <section
        id="home"
        className="relative min-h-screen lg:min-h-[110vh] flex items-center"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroChair}
            alt="Hero"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
          {/* Left text */}
          <FadeInSection>
            <h1 className="text-[38px] sm:text-[46px] lg:text-[54px] font-semibold leading-tight">
              <span className="block">Furniture</span>
              <span className="block">Paradise</span>
              <span className="block text-amber-400">&amp; Hardware</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-200 max-w-xl">
              Discover premium hardware and furniture collections at Furniture
              Paradise &amp; Hardware. From stylish sofas to durable door
              fittings, we bring quality craftsmanship and timeless design to
              your home and commercial spaces.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-7 py-3 text-sm sm:text-base rounded-full bg-amber-500 text-black font-semibold tracking-wide shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-[2px] transition-transform duration-200"
              >
                ABOUT US
              </Link>

              <Link
                to="/products"
                className="px-7 py-3 text-sm sm:text-base rounded-full border border-amber-500 text-amber-400 font-semibold tracking-wide hover:bg-amber-500 hover:text-black hover:-translate-y-[2px] transition-all duration-200"
              >
                VIEW PRODUCTS
              </Link>
            </div>
          </FadeInSection>

          {/* Right overlay card */}
          <FadeInSection delay={150}>
            <div className="flex justify-end">
              <div className="backdrop-blur-md bg-black/60 border border-white/10 rounded-3xl p-6 md:p-7 w-full max-w-md space-y-4 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-semibold text-amber-400">
                  Why Choose Us?
                </h3>
                <ul className="text-sm text-gray-200 space-y-2">
                  <li>• Premium solid wood furniture</li>
                  <li>• High-grade hardware: locks, handles, hinges</li>
                  <li>• Custom finishes &amp; on-site installation</li>
                </ul>

                <div className="grid grid-cols-3 gap-3 text-center text-xs sm:text-sm mt-4">
                  <div className="rounded-xl bg-white/5 py-3">
                    <div className="text-amber-400 font-bold text-base sm:text-lg">
                      19+
                    </div>
                    <div className="text-gray-300 mt-1">Years</div>
                  </div>
                  <div className="rounded-xl bg-white/5 py-3">
                    <div className="text-amber-400 font-bold text-base sm:text-lg">
                      500+
                    </div>
                    <div className="text-gray-300 mt-1">Projects</div>
                  </div>
                  <div className="rounded-xl bg-white/5 py-3">
                    <div className="text-amber-400 font-bold text-base sm:text-lg">
                      4.8★
                    </div>
                    <div className="text-gray-300 mt-1">Ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* WhatsApp Floating */}
        <a
          href="https://wa.me/919899019661"
          target="_blank"
          rel="noreferrer"
          className="fixed right-4 bottom-4 z-40"
        >
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full  flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="h-16 w-16 object-contain"
            />
          </div>
        </a>
      </section>

      {/* ===================== WELCOME SECTION ===================== */}
      <section
        id="#about"
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.25em] uppercase text-amber-400">
              Welcome to
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold">
              Furniture Paradise &amp; Hardware
            </h2>
            <p className="mt-6 text-sm sm:text-base text-gray-100 leading-relaxed">
              Founded in 2005, Furniture Paradise &amp; Hardware has grown to
              become a trusted name in premium hardware and furniture solutions.
              Based in Indirapuram, Ghaziabad, our journey has been defined by a
              passion for quality, innovation, and exceptional service.
              <br />
              <br />
              We specialize in delivering high-end products, including stylish
              door handles, durable locks, and sophisticated furniture. Whether
              you are revamping interiors or creating new spaces, our team is
              here to inspire and assist with unparalleled expertise and
              attention to detail.
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="flex justify-center lg:justify-end">
              <img
                src={welcomeChair}
                alt="Welcome furniture"
                className="max-w-md w-full object-contain drop-shadow-2xl"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== ART OF COZINESS ===================== */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold">
                Art Of Coziness
              </h2>
              <Link to={'/gallery'} className="self-start md:self-auto px-8 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
                EXPLORE NOW
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5">
              {/* Left big image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cozyMain}
                  alt="Living room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right mosaic */}
              <div className="grid grid-rows-2 gap-5">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={cozyKitchen}
                    alt="Kitchen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={cozyPendants}
                      alt="Pendants"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={cozyBedroom}
                      alt="Bedroom"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== OUR PRODUCTS ===================== */}
      <section
        id="#products"
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-center text-3xl sm:text-4xl lg:text-[40px] font-semibold mb-10">
              Our Products
            </h2>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: prodDoor, label: "Door Hardware" },
                { img: prodCabinet, label: "Cabinet Hardware" },
                { img: prodFittings, label: "Furniture Fittings" },
                { img: prodLocks, label: "Locks and Security Systems" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="overflow-hidden rounded-xl bg-black/70">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="mt-4 text-lg sm:text-xl">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== ULTRA-MODERN FURNITURE ===================== */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-center text-sm tracking-[0.35em] uppercase text-amber-400 mb-2">
              FASHION-FORWARD
            </p>
            <h2 className="text-center text-3xl sm:text-4xl lg:text-[40px] font-semibold mb-10">
              Ultra-Modern Furniture&apos;s
            </h2>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: ultraChair, label: "Chairs" },
                { img: ultraSofa, label: "Sofa" },
                { img: ultraBed, label: "Bed" },
                { img: ultraDining, label: "Dinning Table" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-black/70 rounded-xl overflow-hidden flex flex-col items-center pt-8 pb-6 px-4 hover:-translate-y-1 hover:shadow-xl transition-transform"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="max-h-44 w-auto object-contain"
                  />
                  <p className="mt-6 text-xl">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== TRANSFORM YOUR SPACE BANNER ===================== */}
      <section className="relative py-20 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={transformBg}
            alt="Transform"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold">
              Transform Your Space with
              <br />
              Style and Comfort
            </h2>
            <p className="mt-4 mb-8 text-sm sm:text-base text-gray-100">
              Premium Home &amp; Office Furniture | Quality Craftsmanship |
              Reliable Products
            </p>
            <Link to={'/gallery'} className="mt-8 px-10 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
              EXPLORE COLLECTION
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== OUR GALLERY ===================== */}
      <section
        id="#gallery"
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-center text-3xl sm:text-4xl lg:text-[40px] font-semibold mb-10">
              Our Gallery
            </h2>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link to={'/gallery'} className="px-10 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
                MORE PHOTO
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section
        id="#reviews"
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm tracking-[0.25em] uppercase text-amber-400">
                  CUSTOMER NOTES
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold">
                  Words From Our Customers
                </h2>
              </div>
              <button className="self-start md:self-auto px-8 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
                LEAVE US REVIEW
              </button>
            </div>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black rounded-xl p-6 sm:p-8">
                <div className="text-amber-400 text-xl">★★★★★</div>
                <p className="mt-4 text-sm sm:text-base text-gray-100">
                  Wide range of options available as per our need, from elite to
                  luxury wide range of choice available.
                </p>
                <p className="mt-6 text-sm font-semibold text-amber-400">
                  Harsh Chaudhary
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 sm:p-8">
                <div className="text-amber-400 text-xl">★★★★★</div>
                <p className="mt-4 text-sm sm:text-base text-gray-100">
                  Best hardware store in Indirapuram, providing excellent
                  products and services.
                </p>
                <p className="mt-6 text-sm font-semibold text-amber-400">
                  Gourav Kashyap
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section id="#contact" className="relative py-20 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={contactBg}
            alt="Contact"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold">
              Get in Touch with Us
            </h2>
            <p className="mt-4 mb-8 text-sm sm:text-base text-gray-100">
              We would love to hear from you! Whether you have a question about
              our products, need assistance with your order, or want to give us
              feedback, our team is here to help.
            </p>
            <Link to={'/contact'} className="mt-8 px-10 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
              CONTACT US
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
