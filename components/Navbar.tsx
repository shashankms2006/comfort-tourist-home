"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Attractions", href: "#attractions" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D211B]/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-emerald-900/40"
          : "bg-gradient-to-b from-[#0D211B]/80 via-[#0D211B]/40 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex flex-col group focus:outline-none rounded-md p-1"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#C89F52] transition-colors">
              COMFORT TOURIST HOME
            </span>
            <span className="text-[10px] sm:text-xs text-[#C89F52] font-semibold tracking-widest uppercase flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#C89F52]" /> Cherrapunjee
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-200 hover:text-[#C89F52] transition-colors py-2 px-1 focus:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C89F52]/60 text-xs font-semibold text-[#C89F52] bg-[#0D211B]/60 hover:bg-[#C89F52] hover:text-[#0D211B] transition-all min-touch-target"
            >
              <span>Book / Enquire</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all min-touch-target"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg text-white hover:bg-white/10 focus:outline-none min-touch-target flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[62px] bg-[#0D211B] border-b border-emerald-900 shadow-2xl px-4 pt-3 pb-6 transition-all duration-300 z-50">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-stone-100 hover:bg-emerald-950/70 hover:text-[#C89F52] min-touch-target flex items-center"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-emerald-900/80 flex flex-col gap-2.5">
              <a
                href={getCallUrl()}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-white font-semibold text-sm min-touch-target border border-emerald-800/60"
              >
                <Phone className="w-4 h-4 text-[#C89F52]" />
                <span>Call Now: {PHONE_DISPLAY}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm min-touch-target"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
