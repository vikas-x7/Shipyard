import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Tomorrow } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const tomorrow = Tomorrow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tomorrow",
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
      <body className={`${outfit.variable} ${tomorrow.variable}`}>
        {children}
      </body>
    </html>
  );
}
