import React from "react";
import { MapPin, Mountain, PhoneOutgoing, MessageSquareCheck } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: MapPin,
      title: "Cherrapunjee Location",
      description: "Conveniently situated in Sohra, giving you quick access to top sights, local markets, and viewpoints.",
    },
    {
      icon: Mountain,
      title: "Explore Meghalaya",
      description: "An ideal base for day trips to Nohkalikai Falls, Mawsmai Cave, Eco Park, and living root bridges.",
    },
    {
      icon: PhoneOutgoing,
      title: "Direct Booking",
      description: "Connect straight with the property owner with no middleman or hidden booking commissions.",
    },
    {
      icon: MessageSquareCheck,
      title: "Personalized Enquiries",
      description: "Get accurate room availability, group accommodation details, and tariff info via WhatsApp or Call.",
    },
  ];

  return (
    <section id="highlights" className="section-nature-bg py-16 bg-[#F7F4EC] text-[#1c2420] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f] bg-emerald-50 px-3 py-1 rounded-full">
            Why Choose Comfort Tourist Home
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#132e20] mt-3">
            Key Highlights
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Providing clear, reliable homestay services in Sohra for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 hover:border-[#2d5a3f] hover:shadow-lg transition-all duration-300 flex flex-col items-start justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#132e20] text-[#c5a059] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#132e20] mb-2 group-hover:text-[#2d5a3f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
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
