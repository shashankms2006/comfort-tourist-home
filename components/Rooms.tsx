import React from "react";
import Image from "next/image";
import { Check, BedDouble, ShowerHead } from "lucide-react";

// Real gallery photo filenames
const ROOM_GREEN = "/gallery/AHRPTWkUNdzLd6GEGcKx8_a95mQkLvS3kVompJ_gBw_-_lTZszIp9iAuV-_R94SPqO336pna2I5rqbFSLhqx7QSaPkf10ICF8y2iQ_Zr03_DGAn8y6Be0KUK6BHcJcE6vkcyavWnXqow4000-h2256-k-no.jpg";
const ROOM_PINK = "/gallery/AHRPTWmXuziBTl-9GfDxI0eH8CS2x4KsS0rQzU-9Gse0PZlZVjd6PLn_Ak75nCQmZJaGIx8r-2mGqaJWXsRj_RzLdIgptUpPCxKi7Ac2Uk4joOmmllSWgs49_1QOg8vgAnB9aNBECigEdAw1280-h960-k-no.jpg";
const BATHROOM_PHOTO = "/images/clean-bathroom-real.jpg";

export default function Rooms() {
  return (
    <section id="rooms" className="relative py-20 text-[#18201D] border-b border-stone-200/80 overflow-hidden">
      {/* Nature background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/AHRPTWkynrSvVsno9RbPmil_d2v_beD2WvvFGJOCqifh_hzJODZDdNWWrbJa26Jhg85A-S9geDjZmNknhE7e4c8ESkjjvpDhzai_hbV3s_CaG2JSgCjFHin51MYJNqeQU-vmSLTtBNQH4Aw4000-h3000-k-no.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#F7F4EC]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
            ACCOMMODATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D211B] mt-3">
            Comfortable Stay
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Clean, well-appointed guest room setups in Cherrapunjee. Contact us directly for current room availability and tariffs.
          </p>
        </div>

        {/* Room Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Room Card 1 — Double Bed Suite */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between group">
            <div>
              <div className="relative h-64 w-full bg-stone-200 overflow-hidden">
                <Image
                  src={ROOM_GREEN}
                  alt="Double bed guest room at Comfort Tourist Home Cherrapunjee"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0D211B]/80 backdrop-blur-sm text-[#C89F52] text-xs font-semibold px-3 py-1 rounded-full border border-[#C89F52]/30 flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4" />
                  <span>Double Bed Guest Room</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#0D211B] mb-2">
                  Double Bed Suite
                </h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Clean, well-maintained double bed arrangement suitable for families, couples, and small group travelers visiting Sohra.
                </p>
                <ul className="space-y-2 text-xs text-stone-700">
                  {["Spacious wooden double beds", "Clean bedsheets & warm blankets", "Fresh bath towels provided"].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C89F52] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Room Card 2 — Family Room with Clean Bathrooms highlight */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between group">
            <div>
              <div className="relative h-64 w-full bg-stone-200 overflow-hidden">
                <Image
                  src={BATHROOM_PHOTO}
                  alt="Spotlessly clean attached bathroom at Comfort Tourist Home"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0D211B]/80 backdrop-blur-sm text-[#C89F52] text-xs font-semibold px-3 py-1 rounded-full border border-[#C89F52]/30 flex items-center gap-1.5">
                  <ShowerHead className="w-4 h-4" />
                  <span>Clean Bathrooms</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#0D211B] mb-2">
                  Family Accommodation
                </h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Multiple bed configurations for larger families or tour groups. Each room features attached, spotlessly clean bathrooms.
                </p>
                <ul className="space-y-2 text-xs text-stone-700">
                  {["Attached clean bathroom facility", "Hot water available"].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C89F52] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
