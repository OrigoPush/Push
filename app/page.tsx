"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { VideoShowcase } from "@/components/video-showcase"
import { ScientificValidation } from "@/components/scientific-validation"
import { Pricing } from "@/components/pricing"
import { PhobiasCarousel } from "@/components/phobias-carousel"
import { WaitlistForm } from "@/components/waitlist-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center w-full">
        {/* 1. HERO */}
        <Hero />

        {/* 2. VIDEO SHOWCASE (fondo blanco simple) */}
        <section className="w-full bg-white">
          <VideoShowcase />
        </section>

        {/* 3. VALUE PROPOSITION + SCIENTIFIC VALIDATION dentro del fondo azul */}
        <section
          className="relative w-full"
          style={{
            backgroundImage: "url('/bluesky.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Degradado superior blanco → transparente */}
          <div
            className="absolute top-0 w-full h-[700px]"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,1) 0px, rgba(255,255,255,0) 700px)`,
            }}
          />

          <div className="relative z-10">
            <ValueProposition />
            <ScientificValidation />
          </div>

          {/* Degradado inferior transparente → blanco */}
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />
        </section>

        {/* 4. PRICING */}
        <section className="hidden">
          <Pricing />
        </section>

        {/* 5. PHOBIAS + WAITLIST + FOOTER */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            backgroundImage: "url('/ocean.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        >
          <div
            className="absolute top-0 w-full h-64"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)`,
            }}
          />

          <div className="relative z-10">
            <PhobiasCarousel />
            <div id="waitlist">
              <WaitlistForm />
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  )
}
