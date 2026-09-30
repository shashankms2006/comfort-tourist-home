import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#0D211B] text-white relative overflow-hidden">
      {/* Real nature photo tinted dark */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/AHRPTWn2hxeZ8NWmNoz1VSUcxG5HlNzRMpXixVY5Vp39z_oa2OcATSdw8DrMznJJnl8WOxXN7HMGMuhD0JC-d9iWOMEepw5-n6wUc3lzxRKXaH2XE0H9TZ0T8kbXrfM95gCh28DHm9chaAw4000-h3000-k-no.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0D211B]/85" />
      </div>
      {/* Decorative ambient */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C89F52]/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block mb-4">
          COMFORT TOURIST HOME CHERRAPUNJEE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Ready to Stay in Cherrapunjee?
        </h2>

        <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Contact Comfort Tourist Home directly to check current room availability, discuss family double suites, and plan your journey in Sohra.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base shadow-xl transition-all min-touch-target"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP US</span>
          </a>

          <a
            href={getCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C89F52] hover:bg-[#b48d42] text-[#0D211B] font-bold text-sm sm:text-base shadow-xl transition-all min-touch-target"
          >
            <Phone className="w-4 h-4 text-[#0D211B]" />
            <span>CALL NOW ({PHONE_DISPLAY})</span>
          </a>

          <a
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all min-touch-target"
          >
            <MapPin className="w-4 h-4 text-[#C89F52]" />
            <span>VIEW LOCATION</span>
          </a>
        </div>
      </div>
    </section>
  );
}
