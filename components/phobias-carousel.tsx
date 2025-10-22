"use client"

import { useEffect, useRef } from "react"
import { Bug, DoorOpen, Mountain, Mic, Car, Waves, BugOff } from "lucide-react"

const phobias = [
  { name: "Miedo a las arañas", description: "Supera tu aracnofobia paso a paso en entornos seguros.", icon: Bug },
  { name: "Claustrofobia", description: "Recupera el control en espacios cerrados mediante exposición guiada.", icon: DoorOpen },
  { name: "Miedo a las alturas", description: "Entrena tu mente para manejar el vértigo con calma y progresión.", icon: Mountain },
  { name: "Hablar en público", description: "Practica presentaciones y fortalece tu confianza comunicativa.", icon: Mic },
  { name: "Miedo a conducir", description: "Recupera la seguridad al volante desde casa.", icon: Car },
  { name: "Miedo al agua", description: "Aprende a mantener la calma en entornos acuáticos.", icon: Waves },
  { name: "Miedo a los insectos", description: "Desensibilízate progresivamente a los estímulos que te generan ansiedad.", icon: BugOff },
]

export function PhobiasCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Seleccionar la primera card real (no el contenedor)
    const firstCard = container.querySelector(":scope > div > div") as HTMLElement | null
    if (firstCard) {
      const offset = (container.clientWidth - firstCard.clientWidth) / 2
      container.scrollLeft = firstCard.offsetLeft - offset
    }
  }, [])

  return (
    <section
      className="relative w-full py-28 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,1) 55%,
            rgba(255,255,255,0.8) 75%,
            rgba(255,255,255,0.3) 90%,
            rgba(255,255,255,0) 100%
          )
        `,
      }}
    >
      {/* Título */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
          Fobias{" "}
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
            por venir
          </span>
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-500 mb-14">
          Seguimos ampliando nuestras experiencias para ayudarte a vencer más miedos.
        </p>
      </div>

      {/* Carrusel centrado */}
      <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-8 px-10 w-max snap-x snap-mandatory">
          {phobias.map((phobia, i) => {
            const Icon = phobia.icon
            return (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-[#EEFEE2] bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.03] p-8 text-left"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3ECFF] shadow-sm">
                    <Icon className="h-8 w-8 text-[#865DE5]" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{phobia.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phobia.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
