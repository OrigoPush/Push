"use client"

export function Pricing() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-light mb-4">
        Elige tu{" "}
        <span className="font-semibold bg-gradient-to-r from-[#6B8F4E] via-[#93CC5A] to-[#865DE5] bg-clip-text text-transparent">
          plan Push
        </span>
      </h2>
      
      <p className="text-lg md:text-xl font-light text-gray-500 mb-14">
        Accede a todas las experiencias XR, nuevas escenas y futuras fobias con tu suscripción.
      </p>

      {/* Bloques de precios */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Plan mensual */}
        <div className="border border-gray-200 rounded-2xl shadow-sm p-8 w-80 transition-all duration-300 hover:scale-105 hover:border-[#93CC5A] hover:bg-[rgba(147,204,90,0.08)] hover:shadow-md">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Mensual</h3>
          <p className="text-5xl font-bold text-[#93CC5A] mb-2">29,99€</p>
          <p className="text-gray-500 mb-6">al mes</p>

          <ul className="text-gray-600 mb-8 space-y-2">
            <li>Acceso completo a todas las fobias</li>
            <li>Actualizaciones automáticas</li>
            <li>Cancela cuando quieras</li>
          </ul>

          <button className="bg-[#93CC5A] text-[#1A1A1A] font-medium py-3 px-6 rounded-full shadow-sm transition-all duration-300 hover:bg-[#6B8F4E]">
            Suscribirme
          </button>
        </div>

        {/* Plan anual */}
        <div className="border border-gray-200 rounded-2xl shadow-sm p-8 w-80 transition-all duration-300 hover:scale-105 hover:border-[#865DE5] hover:bg-[rgba(134,93,229,0.08)] hover:shadow-md">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Anual</h3>
          <p className="text-5xl font-bold text-[#865DE5] mb-2">299€</p>
          <p className="text-gray-500 mb-6">al año</p>

          <ul className="text-gray-600 mb-8 space-y-2">
            <li>Todo el contenido XR</li>
            <li>Acceso anticipado a nuevas fobias</li>
            <li>Ahorra más de un 15%</li>
          </ul>

          <button className="bg-[#865DE5] text-white font-medium py-3 px-6 rounded-full shadow-sm transition-all duration-300 hover:bg-[#6E4AD4]">
            Elegir plan anual
          </button>
        </div>
      </div>
    </section>
  )
}
