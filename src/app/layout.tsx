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
  title: "Cashea - Verificación de Cuenta",
  description: "Activa tu aumento de cupo corporativo y disfruta de tus beneficios. Proceso seguro y verificado.",
  openGraph: {
    title: "Cashea: Beneficio Corporativo Disprocar",
    description: "Inicia sesión para activar tu incremento de línea de crédito.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Cashea Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
