import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: {
    default: "CounterPick OW — counters de Overwatch explicados",
    template: "%s · CounterPick OW",
  },
  description:
    "Elige tu rol, elige al enemigo que te complica la partida y recibe un counter recomendado con razones, pasos y riesgos. Proyecto no oficial.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Saltar al contenido
        </a>
        <header className="border-b border-edge bg-surface">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              CounterPick <span className="text-accent">OW</span>
            </Link>
            <nav aria-label="Principal" className="flex items-center gap-4 text-sm">
              <Link href="/metodologia" className="text-muted hover:text-foreground">
                Metodología
              </Link>
              <Link href="/legal" className="text-muted hover:text-foreground">
                Aviso legal
              </Link>
            </nav>
          </div>
        </header>
        <main id="contenido" className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
          {children}
        </main>
        <footer className="border-t border-edge bg-surface">
          <div className="mx-auto w-full max-w-5xl px-4 py-4 text-xs text-muted">
            <p>
              Proyecto no oficial hecho por la comunidad. No está afiliado a
              Blizzard Entertainment ni respaldado por ella. Overwatch y los
              nombres de sus héroes son marcas de Blizzard Entertainment.
            </p>
            <p className="mt-1">
              Un counter mejora el enfrentamiento, pero no garantiza ganar: mapa,
              composición, habilidad y coordinación también deciden.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
