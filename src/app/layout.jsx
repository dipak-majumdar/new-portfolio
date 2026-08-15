import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";

const PRODUCTION_HOST = "dipakmajumdar.com";
const BASE_URL = `https://www.${PRODUCTION_HOST}`;

// ─── Shared metadata (all pages) ─────────────────────────────────────────────
const sharedMetadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Dipak Majumdar – Full Stack Developer",
    template: "%s | Dipak Majumdar",
  },

  description:
    "Portfolio of Dipak Majumdar, a Full Stack Developer from Kolkata, India specialising in FastAPI, Laravel, React, and scalable backend systems.",

  keywords: [
    "Dipak Majumdar",
    "Full Stack Developer",
    "Python Developer",
    "FastAPI",
    "Laravel",
    "React",
    "Django",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Kolkata",
    "India",
    "Software Developer Portfolio",
    "Backend Developer",
  ],

  authors: [{ name: "Dipak Majumdar", url: BASE_URL }],
  creator: "Dipak Majumdar",

  alternates: { canonical: BASE_URL },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Dipak Majumdar – Portfolio",
    title: "Dipak Majumdar – Full Stack Developer",
    description:
      "Explore the portfolio of Dipak Majumdar – Full Stack Developer skilled in FastAPI, Laravel, React, and cloud deployments. Available for opportunities.",
    images: [
      {
        url: "/assets/images/site/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Dipak Majumdar – Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dipak Majumdar – Full Stack Developer",
    description:
      "Explore the portfolio of Dipak Majumdar – Full Stack Developer skilled in FastAPI, Laravel, React, and cloud deployments.",
    images: ["/assets/images/site/android-chrome-512x512.png"],
  },

  icons: {
    icon: [
      { url: "/assets/images/site/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/site/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/images/site/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/assets/images/site/site.webmanifest" }],
  },
};

// ─── Dynamic metadata – noindex on any non-production domain ──────────────────
export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const hostname = host.split(":")[0]; // strip port for localhost
  const isProduction = hostname === PRODUCTION_HOST;

  return {
    ...sharedMetadata,
    robots: isProduction
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          // Vercel previews, localhost, staging – keep out of search engines
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
  };
}

// ─── JSON-LD Person schema ────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dipak Majumdar",
  url: BASE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer from Kolkata, India specialising in FastAPI, Laravel, React, and scalable backend systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressCountry: "IN",
  },
  knowsAbout: [
    "FastAPI", "Laravel", "Django", "React", "PHP", "Python", "JavaScript",
    "MySQL", "PostgreSQL", "Docker", "REST API", "Cloud Deployment",
  ],
  sameAs: [
    "https://github.com/dipak-majumdar",
    "https://linkedin.com/in/dipak-majumdar",
  ],
  email: "mailto:dipakmajumdar@zohomail.com",
  telephone: "+917699753019",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
