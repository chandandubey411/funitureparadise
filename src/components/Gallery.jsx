import React, { useEffect, useRef, useState } from "react";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import showroomWide from "../assets/images/showroom-wide.jpg";
import hardwareWall from "../assets/images/hardware-wall.jpg";
import cozyMain from "../assets/images/cozy-main.jpg";
import cozyKitchen from "../assets/images/cozy-kitchen.jpg";
import whyBg from "../assets/images/why-bg.jpg";

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

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    { src: gallery1, title: "Store Front", category: "store" },
    { src: showroomWide, title: "Showroom Interior", category: "interior" },
    { src: gallery2, title: "Hardware Display", category: "hardware" },
    { src: gallery3, title: "Furniture Corner", category: "interior" },
    { src: gallery4, title: "Handle Collection Wall", category: "hardware" },
    { src: hardwareWall, title: "Premium Handles Wall", category: "hardware" },
    { src: cozyMain, title: "Living Room Setup", category: "furniture" },
    { src: cozyKitchen, title: "Kitchen Space", category: "furniture" },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "store", label: "Store" },
    { id: "interior", label: "Interiors" },
    { id: "hardware", label: "Hardware" },
    { id: "furniture", label: "Furniture" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    /* 🔴 OUTER SECTION – background here so it also sits behind navbar */
    <section
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${whyBg})` }}
    >
      {/* dark overlay over bg */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Heading */}
        <FadeIn>
          <h1 className="text-center text-3xl sm:text-4xl lg:text-[40px] font-semibold">
            Our Gallery
          </h1>
          <p className="mt-4 text-center text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
            A glimpse into our showroom, product displays and completed interior
            setups. Explore how Furniture Paradise &amp; Hardware brings style
            and practicality together.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base border transition-all ${
                  activeFilter === filter.id
                    ? "bg-amber-500 border-amber-500 text-black font-semibold shadow-lg shadow-amber-500/30"
                    : "bg-black/40 border-white/20 text-gray-200 hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <FadeIn delay={250}>
          <div className="mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, index) => (
              <div
                key={`${img.title}-${index}`}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-black/60 border border-white/10"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {img.title}
                    </p>
                    <p className="text-xs text-gray-300 capitalize">
                      {img.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {filteredImages.length === 0 && (
              <p className="col-span-full text-center text-gray-300">
                No images in this category yet.
              </p>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ml-auto mb-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/70 border border-white/40 text-white hover:bg-black"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className="overflow-hidden rounded-xl bg-black border border-white/20">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 capitalize mt-1">
                  {lightboxImage.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
