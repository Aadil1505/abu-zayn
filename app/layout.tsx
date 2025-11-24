import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/navbar";
import FooterSection from "@/components/global/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://abuzaynnyc.com'), // CHANGE TO YOUR DOMAIN
  title: {
    default: "Abu Zayn - Authentic Egyptian Cuisine in Rockville Centre, NY",
    template: "%s | Abu Zayn Restaurant"
  },
  description: "Experience authentic Egyptian cuisine in Rockville Centre, Long Island. Serving traditional halal dishes including koshary, shawarma, falafel, and more. Order online for pickup at 280 Merrick Rd.",
  keywords: [
    "Egyptian restaurant",
    "Egyptian food",
    "halal restaurant",
    "halal edgyptian food near me",
    "Mediterranean food",
    "Middle Eastern cuisine",
    "Rockville Centre restaurants",
    "Long Island Egyptian food",
    "koshary",
    "shawarma",
    "falafel",
    "authentic Egyptian",
    "halal food near me",
    "Egyptian restaurant Long Island",
    "Middle Eastern restaurant NY",
    "280 Merrick Rd restaurant"
  ],
  authors: [{ name: "Abu Zayn Restaurant" }],
  creator: "Abu Zayn Restaurant",
  publisher: "Abu Zayn Restaurant",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abuzaynnyc.com", // CHANGE TO YOUR DOMAIN
    siteName: "Abu Zayn Restaurant",
    title: "Abu Zayn - Authentic Egyptian Cuisine in Rockville Centre, NY",
    description: "Experience authentic Egyptian cuisine in Rockville Centre. Traditional halal dishes made with love. Visit us at 280 Merrick Rd or order online for pickup.",
    images: [
      {
        url: "food-gif.gif", // CREATE THIS IMAGE (1200x630px)
        width: 1200,
        height: 630,
        alt: "Abu Zayn Restaurant - Authentic Egyptian Cuisine",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Zayn - Authentic Egyptian Cuisine",
    description: "Traditional Egyptian halal cuisine in Rockville Centre, Long Island. Order online for pickup!",
    images: ["food-gif.gif"], // CREATE THIS IMAGE
    creator: "@abuzaynnyc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://abuzaynnyc.com", // CHANGE TO YOUR DOMAIN
  },
  category: "Restaurant",
  verification: {
    google: "iyL_-MRLtSQzJaIDDE7WFtC06HLVGwROSNW7wTbQ6To", // ADD YOUR VERIFICATION CODE
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "Rockville Centre",
    "geo.position": "40.6560;-73.6473",
    "ICBM": "40.6560, -73.6473",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
