import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const squadaOne = localFont({
  src: "./fonts/SquadaOne-Regular.ttf",
  variable: "--font-squada-one",
});

export const metadata: Metadata = {
  title: "Engineers of Pellissippi",
  description: "Founded in 2024, we're a group of Pellissippi State students dedicated to exploring and innovating in STEM. We bring classroom knowledge to life, transforming it into practical, real-world skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${squadaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
