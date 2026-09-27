import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";

import { WhatsAppProvider } from "@/components/providers/WhatsAppProvider";

import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cartoon",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assessoria & Consulta | Consultoria para pessoa física",
  description:
    "Consultoria personalizada para ajudar você a compreender sua situação e tomar decisões com mais segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.variable} ${nunito.variable}`}>
        <WhatsAppProvider>
          {children}
        </WhatsAppProvider>
      </body>
    </html>
  );
}