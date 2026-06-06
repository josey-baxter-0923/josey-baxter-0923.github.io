import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://josey-baxter-0923.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Josey Baxter | Senior SaaS & AI Software Engineer",
    template: "%s | Josey Baxter",
  },
  description:
    "Architecture-focused portfolio for Josey Baxter, a senior SaaS and AI software engineer building product systems with React, Next.js, TypeScript, Node.js, Python, automation, analytics, and AI integrations.",
  applicationName: "Josey Baxter Portfolio",
  authors: [{ name: "Josey Baxter", url: siteUrl }],
  keywords: [
    "Senior Software Engineer",
    "SaaS Architect",
    "Product Engineer",
    "AI Systems Builder",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "SaaS architecture",
    "AI integrations",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Josey Baxter | Senior SaaS & AI Software Engineer",
    description:
      "A product-engineering portfolio built around SaaS architecture, AI systems, analytics, automation, and credible GitHub signal.",
    images: [{ url: "/social-preview.png", width: 1730, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josey Baxter | Senior SaaS & AI Software Engineer",
    description:
      "SaaS architecture, AI workflows, automation, analytics, and product engineering portfolio.",
    images: ["/social-preview.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
