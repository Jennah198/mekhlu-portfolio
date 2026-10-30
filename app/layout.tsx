import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MoltenMetal from "@/components/MoltenMetal";
import CursorGrid from "@/components/CursorGrid";
import Cursor from "@/components/Cursor";
import { accentScript } from "@/components/AccentSwatch";
import CommandPalette from "@/components/CommandPalette";
import { education, site, socials } from "@/lib/data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [site.name, "Data Science", "Machine Learning", "Python", "Pandas", "Scikit-learn", "RAG", "Streamlit", "Ethiopia"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: site.firstName,
    lastName: site.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#101615" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Data Science Student",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
  sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
  knowsAbout: ["Data Science", "Machine Learning", "Python", "Pandas", "NumPy", "Scikit-learn", "NLP", "Retrieval-Augmented Generation", "Streamlit", "Django", "Flask"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-dvh antialiased">
        {/* Opt in to scroll-reveal hiding only when JS runs; content stays visible otherwise. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.dataset.reveal=''" }} />
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <MoltenMetal />
          <CursorGrid />
          {children}
          <CommandPalette />
          <Cursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
