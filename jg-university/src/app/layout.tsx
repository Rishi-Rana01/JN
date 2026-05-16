import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const ibmPlex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-ibm-plex" });

export const metadata: Metadata = {
  title: "JG University | Empowering Future Innovators",
  description: "A modern tech-driven university. Apply now for our cutting-edge programs in Engineering, AI, and Commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${ibmPlex.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
