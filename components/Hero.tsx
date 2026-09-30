"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, CalendarCheck, MapPin, ChevronDown } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D211B]">
      {/* Background Image: Real attached property valley view photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/property-valley-view.jpg"
          alt="Cherrapunjee mist valley view from Comfort Tourist Home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 filter brightness-[0.70]"
        />
        {/* Layered Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D211B] via-[#0D211B]/60 to-[#0D211B]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D211B]/80 border border-[#C89F52]/40 text-xs sm:text-sm font-medium text-stone-200 mb-6 backdrop-blur-sm shadow-md">
          <MapPin className="w-4 h-4 text-[#C89F52]" />
          <span>Eco Park, Cherrapunjee (Sohra), Meghalaya</span>
        </div>

        {/* Small Eyebrow Label */}
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#C89F52] mb-3">
          A PEACEFUL STAY IN CHERRAPUNJEE
        </span>

        {/* Main H1 Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
          COMFORT TOURIST HOME <br />
          <span className="text-[#C89F52]">CHERRAPUNJEE</span>
        </h1>

        {/* Supporting Line */}
        <p className="text-base sm:text-xl text-stone-200 mb-9 max-w-2xl font-normal leading-relaxed drop-shadow">
          Stay close to the natural beauty of Sohra and explore the best of Meghalaya from a comfortable, quiet homestay setting.
        </p>

        {/* 3 Working CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C89F52] hover:bg-[#b48d42] text-[#0D211B] font-bold text-sm sm:text-base shadow-xl transition-all duration-200 min-touch-target"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>BOOK YOUR STAY</span>
          </a>

          {/* Secondary WhatsApp CTA */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base shadow-xl transition-all duration-200 min-touch-target"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP US</span>
          </a>

          {/* Call CTA */}
          <a
            href={getCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200 min-touch-target"
          >
            <Phone className="w-4 h-4 text-[#C89F52]" />
            <span>CALL NOW ({PHONE_DISPLAY})</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-opacity duration-300 animate-bounce focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C89F52]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#C89F52]" />
      </a>
    </section>
  );
}
