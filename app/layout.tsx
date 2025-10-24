import React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Push - Supera tus fobias con realidad virtual",
  description:
    "Supera tu miedo a volar y otras fobias desde casa con realidad virtual, gamificación y acompañamiento psicológico.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} font-sans`}>
      <head>
        {/* Verificación de dominio Meta */}
        <meta
          name="facebook-domain-verification"
          content="899zx6uc0092px66fa2e8sepeab99b"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
