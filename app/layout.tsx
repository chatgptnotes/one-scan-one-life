import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Updated with proper client component wrapper to fix SSR issues
import AnohraChatBotWrapper from './components/AnohraChatBotWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Murali BK - Orthopaedic Surgeon & Joint Replacement Specialist",
  description: "Book an appointment with Dr. Murali BK, leading Orthopaedic Surgeon specializing in Joint Replacement with 15+ years of experience",
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
        <AnohraChatBotWrapper />
      </body>
    </html>
  );
}
