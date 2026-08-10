import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-topaz-one-58.vercel.app"),
  title: "Nyasha Hama | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building responsive React and Next.js products, Go services, PostgreSQL systems, and reliable delivery pipelines.",
  keywords: [
    "Nyasha Hama",
    "Full-Stack Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Cape Town",
  ],
  openGraph: {
    title: "Nyasha Hama | Full-Stack Software Engineer",
    description:
      "Product and platform engineering across React, Next.js, TypeScript, Go, PostgreSQL, CI, and observability.",
    url: "/",
    siteName: "Nyasha Hama",
    type: "website",
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
