import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comfort Tourist Home Cherrapunjee | Stay in Meghalaya",
  description:
    "Discover Comfort Tourist Home Cherrapunjee and plan your stay in beautiful Cherrapunjee (Sohra), Meghalaya. Convenient location to explore Nohkalikai Falls, Mawsmai Cave, and Eco Park.",
  keywords: [
    "Comfort Tourist Home",
    "Cherrapunjee stay",
    "Sohra accommodation",
    "Meghalaya homestay",
    "Cherrapunjee hotel enquiry",
    "Sohra tourist lodge",
  ],
  authors: [{ name: "Comfort Tourist Home Cherrapunjee" }],
  openGraph: {
    title: "Comfort Tourist Home Cherrapunjee | Stay in Meghalaya",
    description:
      "Discover Comfort Tourist Home Cherrapunjee and plan your stay in beautiful Cherrapunjee (Sohra), Meghalaya.",
    locale: "en_IN",
    type: "website",
    siteName: "Comfort Tourist Home Cherrapunjee",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Tourist Home Cherrapunjee | Stay in Meghalaya",
    description:
      "Plan your stay in Cherrapunjee, Meghalaya with Comfort Tourist Home. Contact directly for availability and enquiries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#faf8f5] text-[#1c2420] antialiased selection:bg-[#2d5a3f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
