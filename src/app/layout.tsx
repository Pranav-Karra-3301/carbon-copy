import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Copy - Vintage Form UI Components",
  description: "A vintage 1970s form UI component library for React. Authentic typewriter aesthetics with modern functionality.",
  keywords: ["react", "components", "vintage", "forms", "ui", "1970s", "retro", "typewriter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
