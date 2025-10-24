"use client"
import { useEffect, useRef } from "react"

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener("loadeddata", () => {
      video.currentTime = 1
      video.pause()
    })
  }, [])

  return (
    <section className="px-4 pt-16 pb-40 text-center text-gray-700">
      <div className="mx-auto max-w-6xl">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Explora Push{" "}
          <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
            en acción
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-light text-gray-500 mb-14 max-w-2xl mx-auto font-[var(--font-sans)]">
          Vive una muestra de nuestra experiencia XR gamificada. Cada escena está diseñada para guiarte paso a paso hacia la calma.
        </p>

        {/* VIDEO */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl aspect-video">
            <video
              ref={videoRef}
              src="/push-trailer-esp.mp4"
              poster="/push-thumb.jpg"
              controls
              playsInline
              preload="auto"
              className="w-full h-full object-cover border-none outline-none rounded-2xl shadow-2xl"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
