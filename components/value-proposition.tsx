import { Sparkles, Brain, Gamepad2, Glasses } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ValueProposition() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Push es una app{" "}
            <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
              XR gamificada
            </span>{" "}
            validada por psicólogos
          </h2>

          <p className="text-lg md:text-xl font-light text-gray-500 mb-14">
            Ayuda a entrenar la mente para superar miedos mediante exposición gradual
          </p>
        </div>

        {/* Tarjetas principales */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="rounded-2xl bg-white border border-[#EEFEE2] p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(134,93,229,0.1)]">
              <Gamepad2 className="h-6 w-6 text-[rgba(134,93,229,1)]" />
            </div>
            <h3 className="mb-2 text-xl font-medium text-card-foreground">Como Duolingo</h3>
            <p className="text-pretty font-light text-muted-foreground">
              Pero para tu salud emocional. Aprende a superar tus miedos de forma progresiva y divertida
            </p>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-2xl bg-white border border-[#EEFEE2] p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(134,93,229,0.1)]">
              <Brain className="h-6 w-6 text-[rgba(134,93,229,1)]" />
            </div>
            <h3 className="mb-2 text-xl font-medium text-card-foreground">Diseñada con psicólogos</h3>
            <p className="text-pretty font-light text-muted-foreground">
              Hecha para jugar, sentir y avanzar. Cada ejercicio está validado científicamente
            </p>
          </Card>

          {/* Card 3 */}
          <Card className="rounded-2xl bg-white border border-[#EEFEE2] p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(134,93,229,0.1)]">
              <Glasses className="h-6 w-6 text-[rgba(134,93,229,1)]" />
            </div>
            <h3 className="mb-2 text-xl font-medium text-card-foreground">
              Compatible con múltiples dispositivos
            </h3>
            <p className="text-pretty font-light text-muted-foreground">
              Meta Quest, Apple Vision, PICO y más
            </p>
          </Card>
        </div>

        {/* Aviso inferior (ocupa el ancho total del grid) */}
        <div className="mt-8">
          <div className="rounded-2xl bg-white border border-[#EEFEE2] p-6 shadow-md flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <Sparkles className="h-5 w-5 text-[rgba(134,93,229,1)] flex-shrink-0" />
            <p className="text-pretty text-sm font-light text-muted-foreground max-w-3xl">
              <strong className="font-medium text-foreground">Nota:</strong> Si no tienes visor, apúntate igual.{" "}
              Lanzaremos versiones más accesibles pronto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
