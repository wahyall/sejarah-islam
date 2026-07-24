import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sejarah Peradaban Islam — Jelajah Rantai Peristiwa & Kausalitas",
  description:
    "Telusuri sejarah peradaban Islam lengkap dari era pra-kenabian, Sirah Nabawiyah, Khulafaur Rasyidin, dinasti-dinasti klasik, Islam Nusantara, hingga era modern.",
  keywords: [
    "Sejarah Islam",
    "Peradaban Islam",
    "Sirah Nabawiyah",
    "Khulafaur Rasyidin",
    "Umayyah",
    "Abbasiyah",
    "Andalusia",
    "Islam Nusantara",
    "Walisongo",
    "Sebab Akibat Sejarah",
  ],
  authors: [{ name: "Wahyal" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Sejarah Peradaban Islam — Jelajah Rantai Peristiwa & Kausalitas",
    description: "Ensiklopedia Interaktif & Rantai Sebab-Akibat Peradaban Islam dari Masa Pra-Kenabian hingga Era Modern.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
