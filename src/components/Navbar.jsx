import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png"; // adjust path if needed

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // helper: check if nav item is active
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Furniture Paradise"
            className="h-12 w-12 object-contain"
          />
          <div className="text-white font-extrabold text-2xl tracking-wider leading-none">
            FURNITURE PARADISE
            <span className="block text-sm text-yellow-500 tracking-wide">
              &amp; HARDWARE
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-white font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group ${
                isActive(item.path) ? "text-yellow-400" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right actions: call button (desktop) + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919899019661"
            className="hidden md:inline-block px-6 py-2 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all"
          >
            CALL US
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {mobileOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div className="relative bg-black/95 backdrop-blur-sm py-6">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="logo"
                  className="h-10 w-10 object-contain"
                />
                <div className="text-white font-semibold">
                  FURNITURE PARADISE
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-lg font-medium py-2 ${
                    isActive(item.path) ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:+919899019661"
                className="mt-4 inline-block px-4 py-2 rounded-full bg-yellow-600 text-black font-semibold text-center"
                onClick={() => setMobileOpen(false)}
              >
                CALL US
              </a>
            </nav>

            <div className="mt-8 text-sm text-slate-300">
              Opening hours: Mon – Sat • 10:00 AM – 8:00 PM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
