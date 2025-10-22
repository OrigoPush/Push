"use client"

export function ScientificValidation() {
  return (
    <section className="relative py-32 text-center text-neutral-800">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
        Validación científica y{" "}
        <span className="font-semibold bg-gradient-to-r from-[#7A4FFF] via-[#A3E060] to-[#78C850] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
        exposición progresiva
        </span>
      </h2>


        <p className="text-lg leading-relaxed text-neutral-700">
          Push ha sido desarrollado junto a psicólogos y profesores de la Universidad de Málaga,
          aplicando principios de la terapia cognitivo-conductual y exposición gradual validados
          científicamente. Nuestro compromiso es integrar la evidencia académica con la innovación
          tecnológica para mejorar el bienestar emocional.
        </p>
      </div>

      {/* Degradado blanco inferior para transición suave */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
