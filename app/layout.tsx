import type { Metadata } from "next";
import "./globals.css";
import { hindi15b } from "@/components/lifonts/localfonts";

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
        className={`${hindi15b.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
