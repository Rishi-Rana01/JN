import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={`dark ${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 antialiased font-sans min-h-screen selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
