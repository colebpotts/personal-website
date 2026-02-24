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
  title: "Cole Beevor-Potts | Product + Data",
  description:
    "Product + data guy building useful software and exploring real-world problems (built environment, running, coffee).",
  openGraph: {
    title: "Cole Beevor-Potts | Product + Data",
    description:
      "Product + data guy building useful software and exploring real-world problems (built environment, running, coffee).",
    type: "website",
    siteName: "Cole Beevor-Potts",
  },
  twitter: {
    card: "summary",
    title: "Cole Beevor-Potts | Product + Data",
    description:
      "Product + data guy building useful software and exploring real-world problems (built environment, running, coffee).",
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
