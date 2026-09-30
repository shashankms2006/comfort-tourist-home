import React from "react";
import Image from "next/image";
import { Compass, Navigation } from "lucide-react";
import { getDirectionsUrl } from "@/lib/contact";

// Using real local gallery photos for each attraction card
interface AttractionItem {
  name: string;
  description: string;
  image: string;
  destination: string;
  distance?: string;
}

export default function NearbyAttractions() {
  const attractions: AttractionItem[] = [
    {
      name: "Eco Park",
      description: "Located right beside our property in Nongthymmai Village along Shella Road. Features orchids and panoramic canyon views.",
      image: "/attractions/eco-park.jpg",
      destination: "Eco Park, Cherrapunjee, Meghalaya",
      distance: "Adjacent to property",
    },
    {
      name: "Mawsmai Cave",
      description: "A famous natural limestone cave system in Sohra featuring ancient stalactites and exciting narrow rock passages.",
      image: "/attractions/mawsmai-cave.jpg",
      destination: "Mawsmai Cave, Cherrapunjee, Meghalaya",
      distance: "Route via Google Maps",
    },
    {
      name: "Nohkalikai Falls",
      description: "One of India's highest plunge waterfalls, cascading into a deep turquoise pool surrounded by lush green cliffs.",
      image: "/attractions/nohkalikai-falls.jpg",
      destination: "Nohkalikai Falls, Cherrapunjee, Meghalaya",
      distance: "Route via Google Maps",
    },
    {
      name: "Seven Sisters Falls",
      description: "Seven-segmented waterfall cascading down limestone cliffs, showcasing Sohra's legendary monsoon beauty.",
      image: "/attractions/seven-sisters-falls.jpg",
      destination: "Seven Sisters Falls, Cherrapunjee, Meghalaya",
      distance: "Route via Google Maps",
    },
  ];

  return (
    <section id="attractions" className="section-nature-bg py-16 bg-[#F7F4EC] text-[#18201D] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
            EXPLORE SOHRA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D211B] mt-2">
            Nearby Attractions
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Discover popular sights around Cherrapunjee with direct driving routes from our homestay.
          </p>
        </div>

        {/* Compact Supporting Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 bg-stone-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="font-serif font-bold text-base text-[#0D211B] mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C89F52]" />
                  {item.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <span className="text-stone-500 font-medium truncate max-w-[120px]">
                  {item.distance || "Route via Google Maps"}
                </span>

                <a
                  href={getDirectionsUrl(item.destination)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D211B] hover:bg-[#132f27] text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Navigation className="w-3 h-3 text-[#C89F52]" />
                  <span>View Route</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
