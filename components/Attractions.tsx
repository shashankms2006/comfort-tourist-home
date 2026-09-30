"use client";

import Image from "next/image";
import { Compass, MapPinned } from "lucide-react";

const HOME_STAY =
  "Comfort Tourist Home Cherrapunjee, Cherrapunjee, Meghalaya, India";

const attractions = [
  {
    name: "Eco Park",
    description:
      "A scenic viewpoint overlooking the green canyons of Sohra, with panoramic views across the surrounding landscape.",
    image: "/attractions/eco-park.jpg",
    badge: "Scenic Viewpoint",
    destination: "Eco Park, Cherrapunjee, Meghalaya, India",
    distance: "Verify from property",
  },
  {
    name: "Nohkalikai Falls",
    description:
      "A spectacular plunge waterfall near Sohra, known for its dramatic drop and striking blue-green pool.",
    image: "/attractions/nohkalikai-falls.jpg",
    badge: "Waterfall",
    destination: "Nohkalikai Falls, Cherrapunjee, Meghalaya, India",
    distance: "Verify from property",
  },
  {
    name: "Mawsmai Cave",
    description:
      "A natural limestone cave with narrow passages and striking rock formations, located near Sohra.",
    image: "/attractions/mawsmai-cave.jpg",
    badge: "Natural Wonder",
    destination: "Mawsmai Cave, Cherrapunjee, Meghalaya, India",
    distance: "Verify from property",
  },
  {
    name: "Seven Sisters Falls",
    description:
      "Nohsngithiang Falls, also known as Seven Sisters Falls, is a dramatic seven-segmented waterfall near Mawsmai.",
    image: "/attractions/seven-sisters-falls.jpg",
    badge: "Waterfall",
    destination:
      "Nohsngithiang Falls, Seven Sisters Falls, Cherrapunjee, Meghalaya, India",
    distance: "Verify from property",
  },
];

function getDirectionsUrl(destination: string) {
  const origin = encodeURIComponent(HOME_STAY);
  const destinationEncoded = encodeURIComponent(destination);

  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destinationEncoded}&travelmode=driving`;
}

export default function Attractions() {
  return (
    <section
      id="explore"
      className="border-b border-stone-200/80 bg-white py-20 text-[#1c2420]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
            Around Cherrapunjee
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#132e20] sm:text-4xl">
            Explore Near Your Stay
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            Discover some of Sohra&apos;s most memorable natural attractions
            while staying at Comfort Tourist Home Cherrapunjee.
          </p>
        </div>

        {/* ATTRACTION CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {attractions.map((attraction) => (
            <article
              key={attraction.name}
              className="group flex overflow-hidden rounded-2xl border border-stone-200/80 bg-[#faf8f5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex w-full flex-col">

                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                  <Image
                    src={attraction.image}
                    alt={`${attraction.name} near Cherrapunjee`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* BADGE */}
                  <div className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {attraction.badge}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">

                  <h3 className="mb-2 flex items-center gap-2 font-serif text-xl font-bold text-[#132e20]">
                    <Compass className="h-4 w-4 text-[#c5a059]" />
                    {attraction.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-stone-600">
                    {attraction.description}
                  </p>

                  {/* DISTANCE */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-stone-500">
                    <MapPinned className="h-4 w-4 text-[#c5a059]" />

                    <span>
                      {attraction.distance}
                    </span>
                  </div>

                  {/* ROUTE BUTTON */}
                  <div className="mt-auto pt-5">

                    <a
                      href={getDirectionsUrl(attraction.destination)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#132e20] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#214a34] focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:ring-offset-2"
                      aria-label={`Get driving directions from Comfort Tourist Home Cherrapunjee to ${attraction.name}`}
                    >
                      <MapPinned className="h-4 w-4" />
                      View Route
                    </a>

                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}