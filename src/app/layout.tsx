import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Tomorrow, Cormorant } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const tomorrow = Tomorrow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tomorrow",
});

const playfairDisplay = Cormorant({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
});

export const metadata: Metadata = {
  title: "Shipyard",
  description: "Fontend based appliction ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${tomorrow.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
