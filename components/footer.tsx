"use client"

import { Instagram, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-transparent text-gray-100 py-16 text-center">
      {/* Logo */}
      <img
        src="/logo_push_white.svg"
        alt="Push Logo"
        className="mx-auto mb-6 h-10 drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
      />

      {/* Iconos sociales */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <a
          href="https://www.instagram.com/pushappxr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 transition-opacity"
        >
          <Instagram className="h-6 w-6 text-white" />
        </a>
        <a
          href="https://www.tiktok.com/@pushappxr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:opacity-80 transition-opacity"
        >
          <Music2 className="h-6 w-6 text-white" />
        </a>
      </div>

      {/* Enlaces legales */}
      <div className="flex justify-center gap-6 text-xs opacity-70 mb-4">
        <a href="/aviso-legal" className="hover:underline">
          Aviso legal
        </a>
        <a href="/privacidad" className="hover:underline">
          Política de privacidad
        </a>
        <a href="/cookies" className="hover:underline">
          Política de cookies
        </a>
      </div>

      {/* Texto inferior */}
      <p className="text-sm opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        © 2025 Push. Todos los derechos reservados.
      </p>
    </footer>
  )
}
