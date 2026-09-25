import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nyashahama.xyz"),
  alternates: { canonical: "/" },
  title: "Nyasha Hama | Software Engineer — Product & Backend Systems",
  description:
    "Software engineer building operational products and reliable backend systems, from offline reporting and payment review to bounded failure testing.",
  keywords: [
    "Nyasha Hama",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Cape Town",
  ],
  openGraph: {
    title: "Nyasha Hama | Software Engineer — Product & Backend Systems",
    description:
      "Operational products, backend systems, and inspectable correctness work across ClinicPulse, StrataHQ, TxProof, Turso, and CrossHair.",
    url: "/",
    siteName: "Nyasha Hama",
    type: "website",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
