import React from "react";
import { Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { PROPERTY_NAME, PROPERTY_ADDRESS, PHONE_DISPLAY, getCallUrl, getWhatsAppUrl, GOOGLE_MAPS_URL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#07130F] text-stone-300 py-14 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/60">
          {/* Brand & Address */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {PROPERTY_NAME}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Your comfortable homestay base in Cherrapunjee (Sohra), Meghalaya. Connect directly with the property host for room inquiries and reservations.
            </p>
            <div className="text-xs text-stone-400 space-y-0.5 pt-1">
              <p className="flex items-center gap-1.5 font-medium text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-[#C89F52]" />
                {PROPERTY_ADDRESS.line1}, {PROPERTY_ADDRESS.line2}
              </p>
              <p className="pl-5 text-stone-400">{PROPERTY_ADDRESS.city}, {PROPERTY_ADDRESS.state} {PROPERTY_ADDRESS.pincode}</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Property
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Guest Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">
                  Property Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-white transition-colors">
                  Nearby Attractions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Plan Your Stay
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Triggers */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2.5 pt-1">
              <a
                href={getCallUrl()}
                className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C89F52]" />
                <span>Call: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-[#25D366] hover:text-[#20bd5a] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#C89F52]" />
                <span>Google Maps Location</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Footer Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2026 Comfort Tourist Home Cherrapunjee. All rights reserved.</p>
          <p>Eco Park Cherrapunjee, Nongthymmai Village, Shella Road, Meghalaya 793108</p>
        </div>
      </div>
    </footer>
  );
}
