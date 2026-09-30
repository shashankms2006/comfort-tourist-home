import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";

// Real gallery photos
const PHOTO_VALLEY = "/gallery/AHRPTWkynrSvVsno9RbPmil_d2v_beD2WvvFGJOCqifh_hzJODZDdNWWrbJa26Jhg85A-S9geDjZmNknhE7e4c8ESkjjvpDhzai_hbV3s_CaG2JSgCjFHin51MYJNqeQU-vmSLTtBNQH4Aw4000-h3000-k-no.jpg";
const PHOTO_GREEN_ROOM = "/gallery/AHRPTWkUNdzLd6GEGcKx8_a95mQkLvS3kVompJ_gBw_-_lTZszIp9iAuV-_R94SPqO336pna2I5rqbFSLhqx7QSaPkf10ICF8y2iQ_Zr03_DGAn8y6Be0KUK6BHcJcE6vkcyavWnXqow4000-h2256-k-no.jpg";

export default function PropertyIntroduction() {
  return (
    <section id="about" className="relative py-20 text-[#18201D] border-b border-stone-200/80 overflow-hidden">
      {/* Nature background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={PHOTO_VALLEY}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#F7F4EC]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
              WELCOME TO COMFORT TOURIST HOME
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D211B] leading-tight">
              A Comfortable Base for Your Cherrapunjee Stay
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              Situated near Eco Park along Shella Road in Cherrapunjee (Sohra), Comfort Tourist Home offers guest accommodation designed for relaxation after a day exploring Meghalaya&apos;s waterfalls, caves, and scenic valley trails.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              We focus on practical, welcoming homestay hospitality — providing clean, spacious double-bed guest rooms, warm bedding, spotlessly maintained bathrooms, and direct host assistance for a smooth stay in Sohra.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#C89F52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0D211B]">Prime Eco Park Location</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Adjacent to Eco Park plateau and main Sohra travel routes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#C89F52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0D211B]">Direct Owner Booking</h4>
                  <p className="text-xs text-stone-600 mt-0.5">No agency markups. Communicate directly with the property.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Composition Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] border-4 border-white">
              <Image
                src={PHOTO_VALLEY}
                alt="Mist valley view near Comfort Tourist Home Cherrapunjee"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow">
                Mist Valley Views
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] border-4 border-white mt-8">
              <Image
                src={PHOTO_GREEN_ROOM}
                alt="Guest room double beds at Comfort Tourist Home Cherrapunjee"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow">
                Spacious Guest Rooms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
