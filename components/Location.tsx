import React from "react";
import Image from "next/image";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";
import { PROPERTY_NAME, PROPERTY_ADDRESS, GOOGLE_MAPS_URL } from "@/lib/contact";

export default function Location() {
  return (
    <section id="location" className="relative py-20 text-[#18201D] border-b border-stone-200/80 overflow-hidden">
      {/* Nature background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/AHRPTWmp1eFQFmQOoouRqbwmDC0j7u0ohjm7IsL2yRL3K49wJKvGZlINGIvAuMI-mHxFdsAcfF4zU9qgb7gyTP1iNDFaWj1XwdIBj0GFI4F_cW3zhSCxKm1KA8J10wJGlA9j4tiOdWoHw4000-h2256-k-no.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F7F4EC]/88" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D211B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89F52]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Address Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block">
                LOCATION & ADDRESS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Find Us in Cherrapunjee
              </h2>

              <div className="space-y-1 text-stone-200 text-base sm:text-lg">
                <p className="font-bold text-white text-xl font-serif">{PROPERTY_NAME}</p>
                <p>{PROPERTY_ADDRESS.line1}</p>
                <p>{PROPERTY_ADDRESS.line2}</p>
                <p>{PROPERTY_ADDRESS.city}, {PROPERTY_ADDRESS.state} {PROPERTY_ADDRESS.pincode}, {PROPERTY_ADDRESS.country}</p>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
                Conveniently situated along Shella Road near Eco Park in Nongthymmai Village. Open our verified Google Maps listing to navigate directly to the property.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C89F52] hover:bg-[#b48d42] text-[#0D211B] font-bold text-sm sm:text-base shadow-lg transition-all min-touch-target"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>OPEN IN GOOGLE MAPS</span>
                </a>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-emerald-500/40 hover:bg-emerald-950/60 text-white font-semibold text-sm sm:text-base transition-all min-touch-target"
                >
                  <Navigation className="w-5 h-5 text-emerald-400" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Traveler Info Box */}
            <div className="lg:col-span-5">
              <div className="bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-6 space-y-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-[#C89F52]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Traveler Convenience</h4>
                    <p className="text-xs text-emerald-300">Shella Road Access</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-300 border-t border-emerald-900 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C89F52]" />
                    <span>Located right near Eco Park, Cherrapunjee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C89F52]" />
                    <span>Direct road access via Shella Road from Shillong</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C89F52]" />
                    <span>On-site parking area for guests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
