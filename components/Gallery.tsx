"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// All 20 verified gallery images — user-requested pink room first
const galleryImages = [
  { id: 1,  src: "/gallery/AHRPTWmXuziBTl-9GfDxI0eH8CS2x4KsS0rQzU-9Gse0PZlZVjd6PLn_Ak75nCQmZJaGIx8r-2mGqaJWXsRj_RzLdIgptUpPCxKi7Ac2Uk4joOmmllSWgs49_1QOg8vgAnB9aNBECigEdAw1280-h960-k-no.jpg",  alt: "Comfortable family room at Comfort Tourist Home" },
  { id: 2,  src: "/gallery/AHRPTWkynrSvVsno9RbPmil_d2v_beD2WvvFGJOCqifh_hzJODZDdNWWrbJa26Jhg85A-S9geDjZmNknhE7e4c8ESkjjvpDhzai_hbV3s_CaG2JSgCjFHin51MYJNqeQU-vmSLTtBNQH4Aw4000-h3000-k-no.jpg",  alt: "Mist-covered valley near Cherrapunjee" },
  { id: 3,  src: "/gallery/AHRPTWkUNdzLd6GEGcKx8_a95mQkLvS3kVompJ_gBw_-_lTZszIp9iAuV-_R94SPqO336pna2I5rqbFSLhqx7QSaPkf10ICF8y2iQ_Zr03_DGAn8y6Be0KUK6BHcJcE6vkcyavWnXqow4000-h2256-k-no.jpg",  alt: "Twin bed guest room with green curtains" },
  { id: 4,  src: "/gallery/AHRPTWkluW6u4hHnqC0WvwUGVYZF79TAnAujydiEnN5MV-s8kowgGDOQrpTaGIMftmRgfGoDnJnEK6qsivBcZNHiJdHW-MdGU52cku387lZlZOPfGEwD0P2kg37YqqaQNzVuaHpFLaYXw1280-h960-k-no.jpg",  alt: "Twin bed room with blue curtains" },
  { id: 5,  src: "/gallery/ANWiy9RqujKYL-QIy9bqkrC9bGWoU5JdADP7ZRVRCW8N6oEFqucjFlHI8wMCN7StGKrBqaj783DFaIOM72L9dgwXyA_26aJm5DDcqDVgF0OgroIsvs842ruodkfBwNfgSxivUlIFflgWvQw4000-h3000-k-no.jpg",  alt: "Scenic green landscape around Comfort Tourist Home" },
  { id: 6,  src: "/gallery/AHRPTWmp1eFQFmQOoouRqbwmDC0j7u0ohjm7IsL2yRL3K49wJKvGZlINGIvAuMI-mHxFdsAcfF4zU9qgb7gyTP1iNDFaWj1XwdIBj0GFI4F_cW3zhSCxKm1KA8J10wJGlA9j4tiOdWoHw4000-h2256-k-no.jpg",  alt: "Aerial view of surrounding hills near property" },
  { id: 7,  src: "/gallery/AHRPTWmqlODRGUYVab_wJ969G3hXRC29OJm9hUn55IZlH-W6qtVDYuaZBvSWCgDvbJPp2X_WZ988qddYP3JtB8pNoBUJlo4Bgcy84UsUFETVXu8ubfvgLXYp-Cjltkwoe5aSvEqLBCybw4080-h3060-k-no.jpg",  alt: "Natural highlands beauty of Meghalaya" },
  { id: 8,  src: "/gallery/AHRPTWn2hxeZ8NWmNoz1VSUcxG5HlNzRMpXixVY5Vp39z_oa2OcATSdw8DrMznJJnl8WOxXN7HMGMuhD0JC-d9iWOMEepw5-n6wUc3lzxRKXaH2XE0H9TZ0T8kbXrfM95gCh28DHm9chaAw4000-h3000-k-no.jpg",  alt: "Green hills and forest of Cherrapunjee" },
  { id: 9,  src: "/gallery/AHRPTWlz6iMzDZV8dpqKn-gtS9Bz7jKe2Nlbi0iCzJOrUW-5GuJ_W1J74fLyNwglQG950481w8d8EZrGWvwD-pfnCNC16VEreChYvucguJD3Jv76JHRjq28Y9fKS6I0qvzXnOzqQuzU5w4000-h3000-k-no.jpg",  alt: "Sunset sky over Meghalaya hills" },
  { id: 10, src: "/gallery/AHRPTWm1GqXyZVNo5fIifxyKr1XLFbwbULs2rkws3tXz8LkWTj5wXJqiFeAH6W6bt07EzV626B5Ccdv-otQQ2U_pJvv7BNScawBqdJZGv4OcOEPOXkWA95SkkoWC4Ys9OU9CGOeviWUNwQw4000-h3000-k-no.jpg",  alt: "Golden hour landscape near Comfort Tourist Home" },
  { id: 11, src: "/gallery/gic-pano-CIHM0ogKEICAgIDevYeiBA-20260928-100610.jpg",  alt: "Comfort Tourist Home exterior view" },
  { id: 12, src: "/gallery/gic-pano-CIHM0ogKEICAgICNnv7FRw-20260928-100324.jpg",  alt: "Property view from road" },
  { id: 13, src: "/gallery/ANWiy9S-1Lgi2awTNXopzy1Gac8LrACqDSG4ukexUuNHBArZjsXI5ch4k3eHKt2MULWRqNlXwWFdCc5qMyJNTuX7zeLEKTfkKjc_BbfYbuPkSgzaVZx9MM4sUsGme9cNI0-cKzBZjctGw4080-h3060-k-no.jpg",  alt: "Comfort Tourist Home daytime exterior" },
  { id: 14, src: "/gallery/ANWiy9SOSukZecH1bbJWhwuQInVxfJvQKZBrvcqMvVrV77p3lOwb_7SPa6tt5VGia-4L94TB-rgiBtw4AelEYkpw-h2BcxKN24Hp2SS6Ej-5CwHdGU_d2B5Z5s90MNe05MKBDTdz8Xgw4000-h2256-k-no.jpg",  alt: "Property illuminated at evening" },
  { id: 15, src: "/gallery/AHRPTWmU_YLCtvrKQkW1CvpWmtcETw82aIFpnDz80jN0Edvx_e8q1pUOIi4Ktzi7VmIhWu8DQkGB1AGCrbhYBMPbEuKuoaKXaFVkTRIRyxYtbsZmQ1wyeol-0bOYvcld3HyLXt13Bqpyw4032-h2268-k-no.jpg",  alt: "Lush greenery surrounding the homestay" },
  { id: 16, src: "/gallery/AHRPTWmXUGDhnqdUozGIAbGZEtW0SgsZllV5BpC3ByxJ0tU9OVFJX22VUZlu3jP5orlRb5_DeN0vHWwwFkyim4_57lBWPmWkNHxiZPkiOM2kqEP_eU53VHxvSdnHLT4oz5QX0cU5j9EFw3264-h2448-k-no.jpg",  alt: "Nature trail near the property" },
  { id: 17, src: "/gallery/ANWiy9QXqRYqeJyd4Y1Rwv0C6BlWqmiokraQ8H1LqRUnwfo5McrZDGko9DYWrS7m644nb5_94iZJOHaUN4B7F9rnYZ5iQ29KloHxEpM87PCur8sBehd30XmcLpZlcAGalUqncU2WWsiyw3544-h3109-k-no.jpg",  alt: "Panoramic surroundings of Cherrapunjee" },
  { id: 18, src: "/gallery/ANWiy9QwienPsvLklP18XsPRiD0HANPiTQFyQqUS1DvU74b39HMDW5AP2KN_aJG27wgTpWVKRDyxEW11jG5xh9BK51wYwElvO6K9_0EeUlxeAutb8kDjSDeNdd1qzYs5-EywvJbivhyEy4CiIH3pw1920-h1080-k-no.jpg",  alt: "Road through Meghalaya hills" },
  { id: 19, src: "/gallery/AHRPTWlANRfG_f3aQgH4zR9krWNBmJaY5Ge99_WD0DB0NkNweq-IVp0vAetXwEx85SeIhijCFryLD_a1BONE3coHVbH8eHwLxcFbv36SY-TETchb0bflj0e6rxCGbme4RlI1nrOHbAkRw1920-h1080-k-no.jpg",  alt: "Cloud-wrapped peaks of Sohra" },
  { id: 20, src: "/images/clean-bathroom-real.jpg",  alt: "Spotlessly clean attached bathroom at Comfort Tourist Home" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex !== null)
      setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    if (activeIndex !== null)
      setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -440, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 440, behavior: "smooth" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-20 overflow-hidden relative">
      {/* Dark forest background with nature overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/AHRPTWkynrSvVsno9RbPmil_d2v_beD2WvvFGJOCqifh_hzJODZDdNWWrbJa26Jhg85A-S9geDjZmNknhE7e4c8ESkjjvpDhzai_hbV3s_CaG2JSgCjFHin51MYJNqeQU-vmSLTtBNQH4Aw4000-h3000-k-no.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0D211B]/90" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] border border-[#C89F52]/40 px-4 py-1.5 rounded-full inline-block mb-3">
            PROPERTY GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
            Explore Comfort Tourist Home
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Real photographs of our rooms, surroundings, and the stunning landscapes of Cherrapunjee.
          </p>
        </div>
      </div>

      {/* Scroll Track with Arrow Buttons */}
      <div className="relative z-10 group/track">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-[#C89F52] hover:border-[#C89F52] transition-all duration-200 shadow-lg opacity-0 group-hover/track:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-[#C89F52] hover:border-[#C89F52] transition-all duration-200 shadow-lg opacity-0 group-hover/track:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scroll Strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative flex-shrink-0 snap-start cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_8px_30px_rgba(200,159,82,0.3)] transition-all duration-300"
              style={{ width: "300px", height: "220px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-[#C89F52]/50">
                  <svg className="w-5 h-5 text-[#C89F52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L9 15m-6 3h6m0 0v-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-[#0D211B] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-[#0D211B] to-transparent z-10" />
      </div>

      {/* Photo count indicator */}
      <div className="relative z-10 flex items-center justify-center gap-1 mt-6">
        {galleryImages.slice(0, 10).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
        <span className="text-stone-500 text-xs ml-2">+{galleryImages.length - 10} more</span>
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/97 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#C89F52] text-white flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#C89F52] text-white flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
            {/* Counter */}
            <div className="mt-4 text-stone-500 text-xs font-mono tracking-widest">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
