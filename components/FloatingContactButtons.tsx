"use client";

import React from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Mobile Fixed Bottom Contact Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0D211B]/95 backdrop-blur-md border-t border-emerald-900/80 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Action */}
          <a
            href={getCallUrl()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/90 text-white border border-emerald-800/60 active:scale-95 transition-transform min-touch-target"
            aria-label={`Call business at ${PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5 text-[#C89F52] mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">CALL</span>
          </a>

          {/* WhatsApp Action */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-white shadow-md active:scale-95 transition-transform min-touch-target"
            aria-label="Send WhatsApp message"
          >
            <MessageCircle className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WHATSAPP</span>
          </a>

          {/* Enquire Scroll Action */}
          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#C89F52] active:bg-[#b48d42] text-[#0D211B] shadow-md active:scale-95 transition-transform min-touch-target"
            aria-label="Scroll to enquiry form"
          >
            <CalendarCheck className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">ENQUIRE</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-2xl transition-all hover:scale-105 min-touch-target border border-white/20"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
