import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Título de la app
export const metadata: Metadata = {
  title: "Quiz rol",
  description: "A project with Next.",
};

// Personalización de la web aquí
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      // Background de toda la página. En children están todas las páginas
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <nav className="bg-slate-900 flex items-center justify-center p-3 gap-5">
          <Link href="/" className="text-white hover:bg-gray-700 rounded-lg p-2 font-semibold transition-colors duration-300">Inicio</Link>
          <Link href="/eru" className="text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300">Eru</Link>
          <Link href="/akame" className="text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300">Akame</Link>
          <Link href="/anubis" className="text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300">Anubis</Link>
          <Link href="/luth" className="text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300">Luth</Link>
          <Link href="/character" className="text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300">¿A quién te pareces?</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
