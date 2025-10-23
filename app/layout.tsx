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

export const metadata = {
  title: "Matt Bernier Tutoring | Online Math, Writing & SAT/ACT (Fairfield, CT)",
  description:
    "Personalized online tutoring for middle & high school students. Math (Algebra → Calculus), English/Writing, and SAT/ACT prep with weekly parent updates. Based in Fairfield, CT — available nationwide.",
  openGraph: {
    title: "Matt Bernier Tutoring | Online Math, Writing & SAT/ACT",
    description:
      "Personalized online tutoring with clear explanations, targeted practice, and weekly progress updates. Fairfield, CT • Nationwide online.",
    url: "https://tutoring-site-nine.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
