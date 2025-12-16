import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ---------- IMAGE IMPORTS (put these files in src/assets/images) ----------
import aboutHero from "../assets/images/about-hero.jpg";          // big hero image
import showroomWide from "../assets/images/showroom-wide.jpg";    // showroom photo
import craftsmanship from "../assets/images/craftsmanship.jpg";   // worker / close-up
import hardwareWall from "../assets/images/hardware-wall.jpg";    // handles wall
import whyBg from "../assets/images/why-bg.jpg";                  // same dark texture

// ---------- Small scroll-reveal helper ----------
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

// ------------------------- ABOUT PAGE -------------------------

export default function AboutPage() {
  return (
    <div className="bg-[#151515] text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Furniture Paradise"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeInSection>
            <p className="text-sm tracking-[0.35em] uppercase text-amber-400">
              About Us
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight">
              Crafting Comfort, Style &amp; Lasting Impressions
            </h1>
            <p className="mt-5 text-sm sm:text-base text-gray-200 max-w-2xl">
              Since 2005, Furniture Paradise &amp; Hardware has been helping
              homeowners, architects, and businesses create spaces that feel
              warm, functional and timeless — one carefully chosen piece at a
              time.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-4">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
              Founded in Indirapuram, Ghaziabad in 2005, Furniture Paradise &amp;
              Hardware began as a small hardware store with a simple vision:
              bring reliable, premium products closer to people who truly value
              quality.
              <br />
              <br />
              Over the years, we expanded into a curated range of furniture and
              hardware solutions — from elegant sofas and beds to precision
              crafted door handles, locks and fittings. Today, our showroom is a
              destination for homeowners, interior designers and contractors who
              expect long–term value, not just quick purchases.
              <br />
              <br />
              What hasn’t changed is our belief in honest guidance, transparent
              pricing, and products we’re proud to stand behind.
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={showroomWide}
                alt="Furniture Paradise showroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="bg-black py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Years of Experience", value: "19+" },
            { label: "Projects Delivered", value: "500+" },
            { label: "Product Categories", value: "50+" },
            { label: "Customer Rating", value: "4.8★" },
          ].map((item) => (
            <FadeInSection key={item.label}>
              <div className="border border-white/10 rounded-xl py-4 bg-white/5 hover:bg-white/10 transition">
                <div className="text-amber-400 text-2xl font-bold">
                  {item.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-gray-200">
                  {item.label}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-center mb-10">
              What We Do
            </h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Premium Furniture",
                  desc: "Living, bedroom and dining furniture that balances aesthetics with everyday durability.",
                  icon: "🛋️",
                },
                {
                  title: "Hardware & Fittings",
                  desc: "Door hardware, cabinet fittings, locks and accessories with reliable performance.",
                  icon: "🔩",
                },
                {
                  title: "Custom Solutions",
                  desc: "Assistance with sizes, finishes and combinations that work best for your space and budget.",
                  icon: "🎨",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-black/70 border border-white/10 rounded-2xl p-6 flex flex-col items-start gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform"
                >
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-200">{card.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ================= CRAFTSMANSHIP ================= */}
      <section className="bg-[#111111] py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeInSection>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={craftsmanship}
                alt="Craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-4">
              Design, Detail &amp; Craftsmanship
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Every product we bring to our floor goes through a simple filter:
              will this still feel right 5 years from now? We care about joinery,
              finishing, hardware quality and the small usability details that
              matter only after you&apos;ve lived with a product for a while.
            </p>
            <ul className="mt-5 text-sm text-gray-200 space-y-2 list-disc list-inside">
              <li>Curated suppliers known for consistency and reliability.</li>
              <li>Guidance on material choices, finishes and maintenance.</li>
              <li>Installation support for hardware and selected furniture.</li>
              <li>After–sales assistance for issues or adjustments.</li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        className="relative py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${whyBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-center mb-4">
              How We Work With You
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-200 max-w-3xl mx-auto mb-8">
              Whether it’s a single room or a full project, we follow a simple
              and transparent process to help you choose the right combination
              of furniture and hardware.
            </p>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Understand",
                  text: "We listen to your requirements, space, budget and timeline.",
                },
                {
                  step: "02",
                  title: "Curate",
                  text: "Our team shortlists options in furniture and hardware that fit.",
                },
                {
                  step: "03",
                  title: "Refine",
                  text: "We fine–tune finishes, sizes and combinations together.",
                },
                {
                  step: "04",
                  title: "Deliver",
                  text: "Coordinated delivery and installation with after–sales support.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-black/70 border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="text-amber-400 font-semibold text-sm">
                    Step {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ================= HARDWARE WALL / CTA ================= */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            src={hardwareWall}
            alt="Hardware display wall"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold">
              Visit Our Showroom
            </h2>
            <p className="mt-4 mb-8 text-sm sm:text-base text-gray-100">
              Explore the textures, finishes and hardware in person, compare
              options side–by–side, and get guided support from our team for
              your upcoming project.
            </p>
            <Link to={'/contact'} className="mt-8 px-10 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide hover:bg-amber-400 transition">
              PLAN A VISIT
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
