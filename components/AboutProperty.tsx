import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, ShowerHead, CheckCircle2 } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl } from "@/lib/contact";

// Real gallery photos
const PHOTO_ROOM_TEAL = "/gallery/AHRPTWkluW6u4hHnqC0WvwUGVYZF79TAnAujydiEnN5MV-s8kowgGDOQrpTaGIMftmRgfGoDnJnEK6qsivBcZNHiJdHW-MdGU52cku387lZlZOPfGEwD0P2kg37YqqaQNzVuaHpFLaYXw1280-h960-k-no.jpg";
const PHOTO_ROOM_PINK = "/gallery/AHRPTWmXuziBTl-9GfDxI0eH8CS2x4KsS0rQzU-9Gse0PZlZVjd6PLn_Ak75nCQmZJaGIx8r-2mGqaJWXsRj_RzLdIgptUpPCxKi7Ac2Uk4joOmmllSWgs49_1QOg8vgAnB9aNBECigEdAw1280-h960-k-no.jpg";
const PHOTO_BATHROOM = "/images/clean-bathroom-real.jpg";
const PHOTO_SUNSET = "/gallery/AHRPTWlz6iMzDZV8dpqKn-gtS9Bz7jKe2Nlbi0iCzJOrUW-5GuJ_W1J74fLyNwglQG950481w8d8EZrGWvwD-pfnCNC16VEreChYvucguJD3Jv76JHRjq28Y9fKS6I0qvzXnOzqQuzU5w4000-h3000-k-no.jpg";

export default function AboutProperty() {
  return (
    <section className="relative py-20 text-[#18201D] border-b border-stone-200/80 overflow-hidden">
      {/* Nature background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/ANWiy9RqujKYL-QIy9bqkrC9bGWoU5JdADP7ZRVRCW8N6oEFqucjFlHI8wMCN7StGKrBqaj783DFaIOM72L9dgwXyA_26aJm5DDcqDVgF0OgroIsvs842ruodkfBwNfgSxivUlIFflgWvQw4000-h3000-k-no.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#F7F4EC]/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52]">
              ABOUT COMFORT TOURIST HOME
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D211B] leading-tight">
              Hospitality Rooted in Sohra&apos;s Natural Splendor
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Nestled along Shella Road near Eco Park in Nongthymmai Village, Comfort Tourist Home is designed to provide guests with a peaceful, restful atmosphere amidst the misty hills of Cherrapunjee.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C89F52] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-[#0D211B]">Room Accommodation:</strong> Furnished double-bed guest rooms with solid wooden bed frames, fresh linen, and cozy blankets for chilly Meghalaya evenings.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShowerHead className="w-5 h-5 text-[#C89F52] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-[#0D211B]">Spotlessly Clean Bathrooms:</strong> Modern, well-maintained attached bathrooms praised by guests — always clean and hygienic for a comfortable stay.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C89F52] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-[#0D211B]">Convenient Location:</strong> Minutes from Eco Park and well-connected to major Sohra waterfalls, caves, and viewpoints.
                </p>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hi, I would like to know more about staying at Comfort Tourist Home Cherrapunjee.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-colors min-touch-target"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={getCallUrl()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-stone-300 hover:border-[#0D211B] text-[#0D211B] font-semibold text-sm transition-colors min-touch-target bg-white/70 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#C89F52]" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3-Photo Overlapping Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Photo 1: Teal room — main large card */}
              <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] border-4 border-white">
                <Image
                  src={PHOTO_ROOM_TEAL}
                  alt="Guest room interior at Comfort Tourist Home"
                  fill
                  sizes="(max-width: 1024px) 60vw, 35vw"
                  className="object-cover"
                />
              </div>

              {/* Photo 2 & 3: Clean bathroom room + Sunset stacked */}
              <div className="col-span-5 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-4 border-white">
                  <Image
                    src={PHOTO_BATHROOM}
                    alt="Clean attached bathroom at Comfort Tourist Home"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-semibold uppercase tracking-wider text-center drop-shadow">
                    Clean Bathrooms
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-4 border-white">
                  <Image
                    src={PHOTO_SUNSET}
                    alt="Sunset sky over Comfort Tourist Home"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-semibold uppercase tracking-wider text-center drop-shadow">
                    Sunset Vistas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
