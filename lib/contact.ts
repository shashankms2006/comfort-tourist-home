export const PROPERTY_NAME = "Comfort Tourist Home Cherrapunjee";
export const PHONE_DISPLAY = "+91 9366874608";
export const PHONE_TEL = "+919366874608";
export const WHATSAPP_NUMBER = "919366874608";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/SFZDDvMKqhp7Qr4j7?g_st=aw";

export const PROPERTY_ADDRESS = {
  line1: "Eco Park Cherrapunjee",
  line2: "Nongthymmai Village, Shella Road",
  city: "Cherrapunjee (Sohra)",
  state: "Meghalaya",
  pincode: "793108",
  country: "India",
};

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'm interested in staying at Comfort Tourist Home Cherrapunjee. Could you please share the room availability and tariff?";

export interface BookingFormData {
  fullName: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number | string;
  message?: string;
}

export function getCallUrl(): string {
  return `tel:${PHONE_TEL}`;
}

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getDirectionsUrl(destination: string): string {
  const origin = "COMFORT TOURIST HOME CHERRAPUNJEE, Cherrapunjee, Meghalaya";
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

export function buildBookingEnquiryMessage(data: BookingFormData): string {
  let text = `Hi, I'm interested in staying at Comfort Tourist Home Cherrapunjee.\n\n`;
  text += `Booking Enquiry:\n\n`;
  text += `Name: ${data.fullName.trim()}\n`;
  text += `Phone: ${data.phone.trim()}\n`;
  text += `Check-in: ${data.checkIn}\n`;
  text += `Check-out: ${data.checkOut}\n`;
  text += `Guests: ${data.guests}\n`;

  if (data.message && data.message.trim()) {
    text += `\nMessage:\n${data.message.trim()}\n`;
  }

  text += `\nPlease share availability and tariff.`;
  return text;
}
