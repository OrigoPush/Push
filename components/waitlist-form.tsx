"use client"

import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  return (
    <section className="relative w-full py-32 bg-transparent">
      <div className="max-w-xl mx-auto text-center px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Únete
          </span>{" "}
          <span className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
            a la lista de espera
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-light text-white/90 mb-14 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
          Sé de los primeros en probar Push y superar tus miedos con realidad extendida.
        </p>

        {/* Formulario */}
        <form className="max-w-md mx-auto bg-white rounded-2xl border border-[#EEFEE2] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-left">
          <div className="space-y-5">
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              required
            />

            <input
              type="email"
              placeholder="Teléfono (opcional)"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              required
            />

            <select className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all">
              <option>¿Qué miedo te gustaría trabajar primero?</option>
              <option>Miedo a volar</option>
              <option>Claustrofobia</option>
              <option>Miedo a conducir</option>
              <option>Miedo a las alturas</option>
              <option>Hablar en público</option>
              <option>Miedo al agua</option>
            </select>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="h-4 w-4 accent-[#93CC5A]" />
              Quiero ser embajador y ayudar a mejorar Push
            </label>

            <Button
              size="lg"
              className="w-full mt-4 rounded-full bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E] transition-all shadow-sm"
            >
              Únete a la lista de espera
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
