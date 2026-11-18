import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SJ Infotech Solutions LLC — Corporate Venture Studio & Digital Flagship",
  description:
    "New York corporate venture studio and technology enterprise engineering intelligent systems, autonomous product architectures, and independent commercial ventures.",
  keywords: [
    "Venture Studio",
    "Product Incubator",
    "Intelligent Systems",
    "AI Architecture",
    "Web3 Micro-Communities",
    "Ynadan",
    "New York Venture Studio",
    "SJ Infotech Solutions",
  ],
  authors: [{ name: "SJ Infotech Solutions LLC", url: "https://sjinfotechus.com" }],
  creator: "SJ Infotech Solutions LLC",
  publisher: "SJ Infotech Solutions LLC",
  metadataBase: new URL("https://sjinfotechus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SJ Infotech Solutions LLC — Corporate Venture Studio",
    description:
      "Engineering intelligent systems and sovereign architectures into independent, commercially sustainable ventures. Flagship pipeline: Ynadan.",
    url: "https://sjinfotechus.com",
    siteName: "SJ Infotech Solutions LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/sj-logo-3d.png",
        width: 1200,
        height: 630,
        alt: "SJ Infotech Solutions LLC — 3D Monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Infotech Solutions LLC — Corporate Venture Studio",
    description:
      "Engineering intelligent systems into independent, sustainable commercial ventures. New York, USA.",
    images: ["/assets/sj-logo-3d.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SJ Infotech Solutions LLC",
    url: "https://sjinfotechus.com",
    logo: "https://sjinfotechus.com/assets/sj-logo-3d.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    description:
      "Corporate venture studio and product enterprise engineering intelligent systems into independent ventures.",
  };

  return (
    <html lang="en" className={`${michroma.variable} ${poppins.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#000000] text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-400 selection:text-black">
        {/* React Bits Interactive Fluid Cursor Simulation (Harmonized Cyan & Violet Brand Palette) */}
        <SplashCursor
          rainbow={false}
          colors={["#00E5FF", "#2563EB", "#7C3AED"]}
          size={1.1}
          force={0.25}
          swirl={2.8}
          trail={1.2}
          clickSplash={true}
          intensity={0.45}
          momentum={0.6}
          glow={0.02}
          intro={false}
        />

        {/* WCAG 2.2 Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-400 text-black font-semibold rounded-md shadow-lg outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
