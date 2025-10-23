"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

type SubmissionState = "idle" | "loading" | "success" | "error"

export function WaitlistForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setSubmissionState("loading")

    const form = event.currentTarget
    const formData = new FormData(form)

    const email = String(formData.get("email") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const phobia = String(formData.get("phobia") || "").trim()
    const ambassador = formData.get("ambassador") === "on"

    // Validación mínima en cliente
    if (!email) {
      setErrorMessage("Por favor, introduce un email válido.")
      setSubmissionState("error")
      return
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, phobia, ambassador }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error((data as any)?.message || "No se pudo enviar el formulario")
      }

      setSubmissionState("success")
      form.reset()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Ocurrió un error inesperado")
      setSubmissionState("error")
    }
  }

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
          className="max-w-md mx-auto bg-white rounded-2xl border border-[#EEFEE2] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-left"
        >
          <div className="space-y-5">
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Teléfono (opcional)"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
            />

            <select
              name="phobia"
              className="w-full p-3 border border-gray-200 rounded-xl text-gray-800 focus:ring-2 focus:ring-[#93CC5A] outline-none transition-all"
              defaultValue=""
           >
              <option value="" disabled>
                ¿Qué miedo te gustaría trabajar primero?
              </option>
              <option value="miedo-a-volar">Miedo a volar</option>
              <option value="claustrofobia">Claustrofobia</option>
              <option value="miedo-a-conducir">Miedo a conducir</option>
              <option value="miedo-a-las-alturas">Miedo a las alturas</option>
              <option value="hablar-en-publico">Hablar en público</option>
              <option value="miedo-al-agua">Miedo al agua</option>
            </select>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input name="ambassador" type="checkbox" className="h-4 w-4 accent-[#93CC5A]" />
              Quiero ser embajador y ayudar a mejorar Push
            </label>

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={submissionState === "loading"}
                className="w-full mt-2 rounded-full bg-[#93CC5A] text-[#1A1A1A] hover:bg-[#6B8F4E] transition-all shadow-sm disabled:opacity-70"
              >
                {submissionState === "loading" ? "Enviando..." : "Únete a la lista de espera"}
              </Button>
            </div>

            {submissionState === "success" && (
              <p className="text-sm text-green-600">¡Gracias! Te hemos agregado a la lista de espera.</p>
            )}
            {submissionState === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
