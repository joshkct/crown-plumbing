import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "lenis/dist/lenis.css";
import { ClosingCta } from "@/components/closing-cta";
import { GlobalMotion } from "@/components/global-motion";
import { MobileContactDock } from "@/components/mobile-contact-dock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crownplumbing.co.za"),
  title: {
    default: "Crown Plumbing | Professional Plumbing Services in Cape Town",
    template: "%s | Crown Plumbing",
  },
  description:
    "Professional plumbing repairs, maintenance, installations, and 24/7 emergency support across Cape Town.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Crown Plumbing",
    images: [{ url: "/images/hero-img.webp", width: 1200, height: 787 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <SmoothScroll />
        <GlobalMotion />
        <SiteHeader />
        <main>{children}</main>
        <ClosingCta />
        <SiteFooter />
        <MobileContactDock />
      </body>
    </html>
  );
}
