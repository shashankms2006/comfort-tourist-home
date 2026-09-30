"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, getCallUrl, getWhatsAppUrl, buildBookingEnquiryMessage, BookingFormData } from "@/lib/contact";

export default function BookingForm() {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    checkIn: todayStr,
    checkOut: todayStr,
    guests: 2,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "checkIn" || name === "checkOut") {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        delete next.dateRange;
        return next;
      });
    } else if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)";
    }

    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    } else if (formData.checkIn < todayStr) {
      newErrors.checkIn = "Check-in date cannot be in the past";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (formData.checkIn && formData.checkOut < formData.checkIn) {
      newErrors.dateRange = "Check-out date must be after check-in date";
    }

    const guestNum = Number(formData.guests);
    if (isNaN(guestNum) || guestNum < 1) {
      newErrors.guests = "At least 1 guest is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const messageText = buildBookingEnquiryMessage(formData);
    const waUrl = getWhatsAppUrl(messageText);

    setGeneratedWhatsAppUrl(waUrl);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <section id="contact" className="section-nature-bg py-20 bg-[#F7F4EC] text-[#18201D] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89F52] bg-[#0D211B] px-3.5 py-1.5 rounded-full inline-block">
            DIRECT BOOKING ENQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D211B] mt-3">
            Plan Your Stay
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Check availability, room options and tariff directly with the property host.
          </p>
        </div>

        {/* 3 Quick Contact Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <a
            href={getCallUrl()}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0D211B] hover:bg-[#132f27] text-white font-semibold text-sm shadow-md transition-colors min-touch-target border border-emerald-900"
          >
            <Phone className="w-5 h-5 text-[#C89F52]" />
            <span>CALL NOW ({PHONE_DISPLAY})</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-colors min-touch-target"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP US DIRECTLY</span>
          </a>
        </div>

        {/* Optional Enquiry Form */}
        <div className="bg-[#F7F4EC] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          <h3 className="font-serif text-xl font-bold text-[#0D211B] mb-2 text-center">
            Send Stay Enquiry
          </h3>
          <p className="text-xs text-stone-600 text-center mb-6">
            Fill in your trip details to generate a formatted message sent directly to our WhatsApp.
          </p>

          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xl font-bold text-[#0D211B]">Enquiry Prepared</h4>
                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                  Your trip details are ready. WhatsApp is opening so you can send your enquiry directly to the property.
                </p>
              </div>

              {generatedWhatsAppUrl && (
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-md transition-colors min-touch-target"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open WhatsApp Directly</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setGeneratedWhatsAppUrl("");
                    }}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 hover:border-[#0D211B] text-[#0D211B] font-medium text-xs transition-colors min-touch-target bg-white"
                  >
                    Edit Information
                  </button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {errors.dateRange && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errors.dateRange}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.fullName ? "border-red-500 bg-red-50/50" : "border-stone-300 focus:border-[#0D211B]"
                    } focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9876543210"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? "border-red-500 bg-red-50/50" : "border-stone-300 focus:border-[#0D211B]"
                    } focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="checkIn" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    min={todayStr}
                    value={formData.checkIn}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.checkIn ? "border-red-500 bg-red-50/50" : "border-stone-300 focus:border-[#0D211B]"
                    } focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white`}
                  />
                  {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    min={formData.checkIn || todayStr}
                    value={formData.checkOut}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.checkOut ? "border-red-500 bg-red-50/50" : "border-stone-300 focus:border-[#0D211B]"
                    } focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white`}
                  />
                  {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#0D211B] focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="Group (10+)">Group (10+ Guests)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#0D211B] mb-1.5">
                    Message / Special Request (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Inquiring about family double room rates and bonfire arrangement"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#0D211B] focus:ring-2 focus:ring-[#0D211B]/20 outline-none transition-all text-xs sm:text-sm bg-white"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-emerald-400 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 min-touch-target"
                >
                  {submitting ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND ENQUIRY ON WHATSAPP</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
