import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyIntroduction from "@/components/PropertyIntroduction";
import PropertyHighlights from "@/components/PropertyHighlights";
import AboutProperty from "@/components/AboutProperty";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import NearbyAttractions from "@/components/NearbyAttractions";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import BookingForm from "@/components/BookingForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function Home() {
  return (
    <div className="relative min-h-screen pb-20 lg:pb-0">
      {/* Navbar Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero />
        <PropertyIntroduction />
        <PropertyHighlights />
        <AboutProperty />
        <Rooms />
        <Gallery />
        <Amenities />
        <NearbyAttractions />
        <Reviews />
        <Location />
        <BookingForm />
        <FinalCTA />
      </main>

      {/* Footer & Floating Contacts */}
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
