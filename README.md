# Comfort Tourist Home Cherrapunjee

A premium, mobile-first single-page website built for **Comfort Tourist Home Cherrapunjee** located in Sohra, Meghalaya, India.

## Key Features

- **Direct Business Contact Integration**: Centralized phone configuration (`+91 9366874608`) and direct WhatsApp triggers (`919366874608`).
- **Plan Your Stay Enquiry Form**: Interactive form with real-time phone and check-in/check-out date validation that compiles a formatted inquiry for WhatsApp.
- **Meghalaya Visual Identity**: Custom design system built with deep forest greens (`#132e20`), earthy greens, warm ivory background (`#faf8f5`), dark charcoal text, and subtle warm gold accents.
- **Responsive Gallery with Lightbox**: Expandable image modal with keyboard and touch navigation support.
- **Floating Contact Controls**: Mobile fixed bottom bar (Call, WhatsApp, Enquire) with 44px+ touch targets, plus desktop floating widget.
- **Verified Business Information**: Accurate details on Cherrapunjee attractions (Eco Park, Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls) and verified Google Maps link.

---

## Local Development & Setup

Make sure you have Node.js 18+ installed on your system.

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Start the production build locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Vercel Deployment

This project is built using Next.js App Router and requires zero backend configuration or environment variables.

### Deploying via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Deploying via GitHub & Vercel Dashboard
1. Push this project repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Keep default settings (`Framework Preset: Next.js`).
4. Click **Deploy**.

---

## Centralized Configuration

All contact information is stored in a single source of truth at [`lib/contact.ts`](lib/contact.ts):

- **Phone Display**: `+91 9366874608`
- **Phone Dialer Link**: `tel:+919366874608`
- **WhatsApp Number**: `919366874608`
- **Google Maps Listing**: `https://maps.app.goo.gl/SFZDDvMKqhp7Qr4j7?g_st=aw`

---

## Adding Custom Property Photos

To replace the curated placeholder photography with your own property photos:

1. Place your `.jpg` or `.png` files inside the `public/images/` folder.
2. Update image paths in [`components/Gallery.tsx`](components/Gallery.tsx) or [`components/Hero.tsx`](components/Hero.tsx).
