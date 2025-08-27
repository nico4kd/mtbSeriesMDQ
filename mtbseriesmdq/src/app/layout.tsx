import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTB SERIES MDQ",
  description:
    "MTB SERIES MDQ - La carrera de mountain bike más emocionante de Mar del Plata. Inscríbete ya!",
  keywords:
    "MTB, mountain bike, Mar del Plata, carrera, ciclismo, deportes, aventura",
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "MTB SERIES MDQ",
    description:
      "MTB SERIES MDQ - La carrera de mountain bike más emocionante de Mar del Plata. Inscríbete ya!",
    type: "website",
    locale: "es",
    siteName: "MTB SERIES MDQ",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "MTB SERIES MDQ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
