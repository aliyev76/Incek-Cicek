import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İncek Çiçek | Ankara Çiçek Gönder | Aynı Gün Teslimat",
  description: "Ankara'nın en taze çiçekleri İncek Çiçek'te. Aynı gün teslimat, güvenilir ödeme ve şık tasarımlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground tracking-tight">
        {children}
      </body>
    </html>
  );
}
