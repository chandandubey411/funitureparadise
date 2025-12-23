import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import whyBg from "../assets/images/why-bg.jpg"; // texture/wood bg you already use

export default function Footer() {
  return (
    <footer
      className="relative mt-[1px] text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${whyBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* main footer content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand + about */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Furniture Paradise & Hardware"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <p className="font-extrabold tracking-widest text-sm sm:text-base">
                  FURNITURE PARADISE
                </p>
                <p className="text-xs text-amber-400 tracking-wide">
                  &amp; HARDWARE
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm">
              Premium furniture and hardware solutions for homes and commercial
              spaces in and around Indirapuram, Ghaziabad. Quality products,
              guided selection and reliable after–sales support.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-4 text-amber-400">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-200">
              <Link to="/" className="hover:text-amber-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-amber-300">
                About
              </Link>
              <Link to="/products" className="hover:text-amber-300">
                Products
              </Link>
              <Link to="/gallery" className="hover:text-amber-300">
                Gallery
              </Link>
              <Link to="/reviews" className="hover:text-amber-300">
                Reviews
              </Link>
              <Link to="/contact" className="hover:text-amber-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3 text-xs sm:text-sm text-gray-200">
            <h3 className="text-sm sm:text-base font-semibold mb-1 text-amber-400">
              Contact &amp; Timings
            </h3>
            <p>
              Furniture Paradise &amp; Hardware
              <br />
              Indirapuram, Ghaziabad
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919899019661"
                className="hover:text-amber-300 font-medium"
              >
                +919899019661
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:aafurnitureparadise@gmail.com"
                className="hover:text-amber-300 font-medium"
              >
                aafurnitureparadise@gmail.com
              </a>
            </p>
            <p>
              Timings: Mon , 10:00 AM – 8:00 PM
              <br />
              Tuesday: Close
              <br />
              Wed - Sun , 10:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] sm:text-xs text-gray-400">
            © {new Date().getFullYear()} Furniture Paradise &amp; Hardware. All
            rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500">
            Designed &amp; Developed by{" adfusion"}
          </p>
        </div>
      </div>
    </footer>
  );
}
