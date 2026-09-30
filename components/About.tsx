import React from "react";
import { ShieldCheck, Compass, Heart, PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#faf8f5] text-[#1c2420] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-xs font-semibold text-[#132e20] uppercase tracking-wider">
              <span>About Our Property</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132e20] leading-tight">
              Welcome to Comfort Tourist Home
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Located in the iconic town of Cherrapunjee (Sohra), Meghalaya, Comfort Tourist Home provides a peaceful and conveniently located base for travelers, families, and nature enthusiasts exploring the Abode of Clouds.
            </p>

            <p className="text-base text-stone-600 leading-relaxed">
              Whether you are planning to witness the roaring Nohkalikai Falls, marvel at ancient limestone caves, or embark on trek routes across the green hills of Meghalaya, our goal is to offer you a welcoming atmosphere and straightforward direct hospitality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm">
                <Compass className="w-6 h-6 text-[#2d5a3f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#132e20]">Central Sohra Location</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Easy access to famous scenic points and local eateries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#2d5a3f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#132e20]">Direct Assistance</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Contact the property directly for clear availability & tariffs.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#132e20] hover:bg-[#2d5a3f] text-white font-semibold text-sm transition-colors min-touch-target"
              >
                <Heart className="w-4 h-4 text-[#c5a059]" />
                <span>Send Direct Enquiry</span>
              </a>

              <a
                href={getCallUrl()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-300 hover:border-[#2d5a3f] text-[#132e20] font-semibold text-sm transition-colors min-touch-target"
              >
                <PhoneCall className="w-4 h-4 text-[#2d5a3f]" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"
                alt="Meghalaya mist and green hills near Cherrapunjee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest">Sohra, Meghalaya</p>
                <p className="text-sm font-medium text-stone-200">Experience authentic Meghalayan weather & serene hill views.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
