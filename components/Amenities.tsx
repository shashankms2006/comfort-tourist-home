import React from "react";
import { ShowerHead, BedDouble, Droplets, Mountain, Car, PhoneCall } from "lucide-react";

export default function Amenities() {
  const verifiedAmenities = [
    {
      icon: ShowerHead,
      name: "Clean Bathrooms",
      description: "Modern & Spotlessly Clean Attached Bathrooms",
    },
    {
      icon: BedDouble,
      name: "Double Wooden Beds",
      description: "Furnished Rooms with Warm Blankets & Linens",
    },
    {
      icon: Droplets,
      name: "Hot Water Facility",
      description: "Hot Water Available for Guests",
    },
    {
      icon: Mountain,
      name: "Valley & Hill Views",
      description: "Overlooking Cherrapunjee's Mist-Clad Mountains",
    },
    {
      icon: Car,
      name: "On-site Parking Space",
      description: "Convenient Vehicle Parking along Shella Road",
    },
    {
      icon: PhoneCall,
      name: "Direct Host Contact",
      description: "Personalized Support for Local Travel & Enquiries",
    },
  ];

  return (
    <section id="amenities" className="section-nature-bg py-20 bg-[#F7F4EC] text-[#18201D] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
            PROPERTY FACILITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D211B] mt-3">
            Property Amenities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Verified facilities available for your stay at Comfort Tourist Home Cherrapunjee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {verifiedAmenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F7F4EC] border border-stone-200 shadow-sm hover:border-[#C89F52] transition-colors flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D211B] text-[#C89F52] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#0D211B] mb-1">
                    {item.name}
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
