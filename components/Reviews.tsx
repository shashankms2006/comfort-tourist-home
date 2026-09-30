import React from "react";
import { Star, ExternalLink, Quote, MapPin, CheckCircle2, UserCheck } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/contact";

export default function Reviews() {
  // Real Google Maps reviews with verified star ratings provided directly from the Google Maps listing for Comfort Tourist Home Cherrapunjee
  const googleMapReviews = [
    {
      name: "Tapan Roy",
      meta: "1 review · 5 months ago",
      rating: 5,
      comment:
        "Very nice experience, very good homestay we enjoy alot here..very very tasty food & good service..Staffs were very helpful. Amy Restaurant's owner very helpful and humble...i will sent my friend here whenever they visit Cherrapunjee Khub Valo😊😀",
    },
    {
      name: "Dr Subhendu Mishra",
      meta: "Local Guide · 75 reviews · 5 months ago",
      rating: 4,
      comment:
        "It's a home stay with all basic facilities. It's location is excellent, on the Eco park road. We booked a room with two double beds and the Room was neat and clean.",
    },
    {
      name: "Avadhut Patil",
      meta: "4 reviews · 1 month ago",
      rating: 5,
      comment:
        "Very friendly staff, neat and clean rooms it feels like home Thank you so much for the experience..",
    },
    {
      name: "Devesh Singh",
      meta: "Local Guide · 89 reviews · 4 months ago",
      rating: 5,
      comment:
        "Nice owner good place , well constructed , nice availability of food . Overall a good stay option",
    },
    {
      name: "Gitanjali Deka Konwar",
      meta: "4 reviews · 1 year ago",
      rating: 4,
      comment:
        "Good manager, 6 rooms, 4 people can stay in one room, clean modern bathroom. Cool environment at walkable distance from eco park . Our driver booked this but we really like it . Value for money.",
    },
    {
      name: "Chandana Mukheejee",
      meta: "4 reviews · 10 months ago",
      rating: 5,
      comment:
        "Very good experience at Comfort Homestay.. The Bathroom is very attractive and spacious we liked it very much! And the owner (Phiphi) very down to earth person... Khublei shibun!!!😄😄",
    },
  ];

  return (
    <section id="reviews" className="section-nature-bg py-20 bg-white text-[#18201D] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
            VERIFIED GOOGLE REVIEWS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D211B] mt-3">
            Real Customer Reviews from Google Maps
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            Read actual experiences shared by guests who stayed at Comfort Tourist Home Cherrapunjee.
          </p>

          {/* Rating Summary Badge */}
          <div className="mt-4 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-stone-200 shadow-sm">
            <div className="flex items-center gap-1 text-[#C89F52]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#0D211B] text-sm">4.7 / 5.0</span>
            <span className="text-stone-400 text-xs">|</span>
            <span className="text-stone-600 text-xs font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Google Maps Listing Reviews
            </span>
          </div>
        </div>

        {/* Real Customer Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {googleMapReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-md flex flex-col justify-between relative group hover:border-[#C89F52] transition-colors"
            >
              <div>
                {/* Header Meta & Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#C89F52]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? "fill-current text-[#C89F52]" : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                  {rev.meta.includes("Local Guide") && (
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-emerald-600" /> Local Guide
                    </span>
                  )}
                </div>

                <Quote className="w-6 h-6 text-[#C89F52]/30 mb-2" />

                {/* Exact Customer Quote */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Meta */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D211B] text-[#C89F52] font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0D211B]">{rev.name}</h4>
                    <p className="text-[10px] text-stone-500">{rev.meta}</p>
                  </div>
                </div>

                <MapPin className="w-4 h-4 text-[#C89F52]" />
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps External Link Button */}
        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0D211B] hover:bg-[#132f27] text-white font-semibold text-xs sm:text-sm shadow-lg transition-all min-touch-target"
          >
            <Star className="w-4 h-4 text-[#C89F52] fill-current" />
            <span>VIEW ALL REVIEWS ON GOOGLE MAPS</span>
            <ExternalLink className="w-4 h-4 text-stone-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
