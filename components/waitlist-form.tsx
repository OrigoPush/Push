"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setPhoneError(null)

    const form = new FormData(e.currentTarget)
    const email = form.get("email") as string
    const phone = (form.get("contact_field") as string) || ""
    const fear = form.get("fear") as string
    const ambassador = form.get("ambassador") === "on"

    // Validación de email
    if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Por favor, introduce una dirección de correo electrónico válida.")
      setLoading(false)
      return
    }

    // Validación de teléfono
    if (phone.length > 0) {
      const phoneRegex = /^[0-9+\-\s()]{6,}$/
      if (!phoneRegex.test(phone)) {
        setPhoneError(
          "Por favor, introduce un número de teléfono válido (solo números, +, -, espacios o paréntesis)."
        )
        setLoading(false)
        return
      }
    }

    // Validación de miedo
    if (!fear) {
      alert("Por favor, selecciona qué miedo te gustaría trabajar.")
      setLoading(false)
      return
    }

    const payload = { email, phone, fear, ambassador }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyfFgOYSTwu6MiBvP_lfD84yU5OLt8kh8KDc09vQLaimdVKEHE9PTXZFTFtddY2s0c_/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )
      setSuccess(true)
      e.currentTarget.reset()
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      alert("Hubo un error al enviar el formulario. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const baseInput =
    "w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"

  return (
    <section className="relative w-full py-32 bg-transparent">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Únete
          </span>{" "}
          <span className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
            a la lista de espera
          </span>
        </h2>

        <p className="text-lg md:text-xl font-light text-white/90 mb-14 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
          Sé de los primeros en probar Push y superar tus miedos con realidad extendida.
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="max-w-md mx-auto bg-white rounded-2xl border border-[#EEFEE2] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-left"
        >
          <div className="space-y-5">
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className={baseInput}
              autoComplete="email"
              required
            />

            <input type="text" style={{ display: "none" }} autoComplete="off" />

            <input
              id="contact_field"
              name="contact_field"
              type="text"
              inputMode="tel"
              placeholder="Teléfono (opcional)"
              className={`${baseInput} ${phoneError ? "border-red-500" : ""}`}
              autoComplete="new-password"
            />
            {phoneError && (
              <p className="text-red-500 text-sm -mt-3">{phoneError}</p>
            )}

            <select
              name="fear"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              required
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
                name="ambassador"
                type="checkbox"
                className="h-4 w-4 accent-[#93CC5A]"
              />
              Quiero ser embajador y ayudar a mejorar Push
            </label>

            <Button
              size="lg"
              type="submit"
              disabled={loading}
              className={`w-full mt-4 rounded-full transition-all shadow-sm ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E]"
              }`}
            >
              {loading ? "Enviando..." : "Únete a la lista de espera"}
            </Button>

            {success && (
              <p className="text-center text-green-600 text-sm mt-3">
                ✅ Tu registro ha sido guardado correctamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
