import React from "react";
import { MapPin, BedDouble, ShowerHead, PhoneCall } from "lucide-react";

export default function PropertyHighlights() {
  const highlights = [
    {
      icon: MapPin,
      title: "Eco Park Proximity",
      description: "Located near Eco Park in Nongthymmai Village along Shella Road.",
    },
    {
      icon: BedDouble,
      title: "Spacious Double Bed Rooms",
      description: "Comfortable wooden double beds with warm blankets and fresh towels.",
    },
    {
      icon: ShowerHead,
      title: "Clean Bathrooms",
      description: "Spotlessly maintained attached modern bathrooms with hot water facility.",
    },
    {
      icon: PhoneCall,
      title: "Direct Host Support",
      description: "Direct contact with property host for instant room and travel enquiries.",
    },
  ];

  return (
    <section className="section-nature-bg py-12 bg-[#F7F4EC] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-[#F7F4EC] border border-stone-200/90 hover:border-[#C89F52] hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D211B] text-[#C89F52] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#0D211B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
