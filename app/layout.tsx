import type { Metadata } from "next";
import "./globals.css";
import { hindienglosoftw8asc } from "@/components/lifonts/localfonts";

export const metadata: Metadata = {
  title: "word4 trAnslation",
  description: "words trAnslation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hindienglosoftw8asc.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
