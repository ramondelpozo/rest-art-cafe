import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Fuentes Premium
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop"; // Importamos el componente

// Configuración de fuentes premium (Serif para títulos, Sans para texto)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rest Art Café | Restaurante con Terraza en Vallecas",
  description: "Experiencia gastronómica premium en Puente de Vallecas. Cocina de autor, terraza jardín y menú del día. Reserva tu mesa o pide desde tu móvil.",
  keywords: ["restaurante vallecas", "terraza madrid", "menú del día", "comida casera", "rest art café"],
  authors: [{ name: "Rest Art Café" }],
  openGraph: {
    title: "Rest Art Café | Experiencia Gastronómica",
    description: "Donde la tradición se encuentra con la innovación. Reserva ahora.",
    url: "https://rest-art-cafe.vercel.app",
    siteName: "Rest Art Café",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fdfbf7] text-stone-800 antialiased selection:bg-amber-200">
        {/* Contenido principal de la página */}
        {children}
        
        {/* Botón flotante para subir al inicio */}
        <ScrollToTop />
      </body>
    </html>
  );
}