"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [fear, setFear] = useState("")
  const [ambassador, setAmbassador] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { email, phone, fear, ambassador }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyCTYYeabWaRcbZQVTE5LYkUj02poJunW9YkAAPErdHY-OIpDOkM1qe6MoUXLse-zTf/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "no-cors", // obligatorio en Apps Script WebApp pública
        }
      )
      setSent(true)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
    }
  }

  return (
    <section className="relative w-full py-32 bg-transparent">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
            Únete
          </span>{" "}
          <span className="text-white">a la lista de espera</span>
        </h2>

        <p className="text-lg md:text-xl font-light text-white/90 mb-14">
          Sé de los primeros en probar Push y superar tus miedos con realidad extendida.
        </p>

        {!sent ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white rounded-2xl border border-[#EEFEE2] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-left"
          >
            <div className="space-y-5">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
                required
              />

              <input
                type="tel"
                placeholder="Tu teléfono (opcional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              />

              <select
                value={fear}
                onChange={(e) => setFear(e.target.value)}
                required
                className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              >
                <option value="">¿Qué miedo te gustaría trabajar primero?</option>
                <option>Miedo a volar</option>
                <option>Claustrofobia</option>
                <option>Miedo a conducir</option>
                <option>Miedo a las alturas</option>
                <option>Hablar en público</option>
                <option>Miedo al agua</option>
              </select>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={ambassador}
                  onChange={(e) => setAmbassador(e.target.checked)}
                  className="h-4 w-4 accent-[#93CC5A]"
                />
                Quiero ser embajador y ayudar a mejorar Push
              </label>

              <Button
                size="lg"
                type="submit"
                className="w-full mt-4 rounded-full bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E] transition-all shadow-sm"
              >
                Únete a la lista de espera
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-lg text-white font-medium mt-6">
            ✅ Gracias por unirte. Hemos recibido tus datos correctamente.
          </p>
        )}
      </div>
    </section>
  )
}
