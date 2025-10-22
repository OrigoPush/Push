"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo dinámico */}
        <img
          src={scrolled ? "/logo_push_brand.svg" : "/logo_push_white.svg"}
          alt="Push Logo"
          className="h-10 w-auto transition-all duration-500"
        />

        {/* Botón adaptable */}
        <Button
        size="lg"
        className={`rounded-full transition-all px-6 py-3 text-sm font-medium shadow-md ${
        scrolled
        ? "opacity-100 pointer-events-auto bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E]"
        : "opacity-0 pointer-events-none"
        }`}
        onClick={() =>
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
        }
        >
        Únete a la lista de espera
        </Button>
      </div>
    </nav>
  )
}
