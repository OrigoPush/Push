"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/atardecer-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay oscuro para contraste del logo blanco */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Degradado inferior suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f3ecff]/90 [mask-image:linear-gradient(to-bottom,transparent_90%,black_100%)]" />

      {/* Contenido principal */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          ¿Tienes
          <br />
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
            miedo a volar
          </span>?
        </h1>

        <p className="text-lg md:text-xl font-light text-white mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
          Recupera el control antes de subirte al avión
        </p>

        <Button
          size="lg"
          className="rounded-full bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E] transition-all px-8 py-6 text-lg shadow-lg"
          onClick={() =>
            document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Únete a la lista de espera
        </Button>
      </div>

      {/* Degradado blanco inferior */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
