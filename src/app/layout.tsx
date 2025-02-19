import "./globals.css";

import type { Metadata } from "next";
// Importa as fontes Montserrat e Oxanium do Google Fonts
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "devstage",
};

// Configura a fonte Oxanium com pesos 500 e 600 e define uma variável CSS
const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

// Configura a fonte Montserrat com pesos 400 e 600 e define uma variável CSS
const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplica as variáveis de fonte Oxanium e Montserrat à tag <html>
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased ">{children}</body>
    </html>
  );
}
