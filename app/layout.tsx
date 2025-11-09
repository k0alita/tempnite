import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timenite - Contador Temporada Fortnite",
  description: "Contador en vivo de la temporada actual de Fortnite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}