import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimationProvidersWrapper from "@/components/ui/AnimationProvidersWrapper";
import IntersectionAnimator from "@/components/ui/IntersectionAnimator";
import NavbarScrollHandler from "@/components/layout/NavbarScrollHandler";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SERVER_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://austerra.com.au")
  ),
  title: "AUSTERRA CONSULTING",
  description:
    "Grounded in Science. Built for the Field. Australian environmental, occupational hygiene, and geotechnical engineering consulting.",
  openGraph: {
    siteName: "AUSTERRA CONSULTING",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <NavbarScrollHandler />
        <AnimationProvidersWrapper />
        <IntersectionAnimator />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
