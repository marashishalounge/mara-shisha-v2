"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const beverageCategories = [
  {
    id: "frias",
    emoji: "🧊",
    title: "Bebidas frías",
    items: [
      ["🥤 Colas", "2,50€"],
      ["🍹 Nestea", "2,50€"],
      ["🧃 Aquarius", "2,50€"],
      ["🍊 Zumos", "2,50€"],
      ["💦 Agua con gas", "2,50€"],
      ["🚰 Agua", "2,00€"],
      ["⚡ Bebidas energéticas", "3,00€"],
    ],
  },
  {
    id: "calientes",
    emoji: "☕",
    title: "Bebidas calientes",
    items: [
      ["🍵 Té verde", "2,00€"],
      ["🌿 Té moruno", "2,00€"],
      ["🍋 Té limón", "2,00€"],
      ["🌸 Infusiones", "2,00€"],
    ],
  },
];

export default function Beverages() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === beverageCategories.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? beverageCategories.length - 1 : prev - 1
    );
  };

  const beverage = beverageCategories[current];

  return (
    <section
      id="bebidas"
      className="bg-[#050505] py-24 px-6 border-t border-[#B08D57]/20"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center mb-12">

          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "var(--bronze)" }}
          >
            🥤 Bebidas
          </h2>

          <p className="text-zinc-400 text-lg">
            Refrescos, bebidas frías y una selección de tés para acompañar tu experiencia.
          </p>

        </div>

        {/* CARRUSEL */}

        <div className="relative max-w-xl mx-auto">

          {/* TARJETA */}

          <div
            id={beverage.id}
            className="
              rounded-3xl
              border
              border-[#B08D57]/30
              bg-gradient-to-b
              from-[#151515]
              to-black
              p-8
              md:p-10
              shadow-lg
              min-h-[430px]
              flex
              flex-col
              justify-center
            "
          >

            {/* CABECERA DE TARJETA */}

            <div className="text-center mb-8">

              <div className="text-5xl mb-4">
                {beverage.emoji}
              </div>

              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--bronze)" }}
              >
                {beverage.title}
              </h3>

            </div>

            {/* PRODUCTOS */}

            <div className="space-y-5">

              {beverage.items.map(([name, price]) => (

                <div
                  key={name}
                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    border-[#B08D57]/20
                    pb-3
                  "
                >

                  <span
                    style={{ color: "#e6d8bb" }}
                  >
                    {name}
                  </span>

                  <span
                    className="font-semibold"
                    style={{ color: "var(--bronze)" }}
                  >
                    {price}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Bebida anterior"
            className="
              absolute
              left-[-18px]
              md:left-[-60px]
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              border
              border-[#B08D57]/60
              bg-black
              flex
              items-center
              justify-center
              hover:bg-[#B08D57]
              hover:text-black
              transition
              z-10
            "
            style={{
              color: "#B08D57",
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente bebida"
            className="
              absolute
              right-[-18px]
              md:right-[-60px]
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              border
              border-[#B08D57]/60
              bg-black
              flex
              items-center
              justify-center
              hover:bg-[#B08D57]
              hover:text-black
              transition
              z-10
            "
            style={{
              color: "#B08D57",
            }}
          >
            <ChevronRight size={26} />
          </button>

        </div>

        {/* INDICADORES */}

        <div className="flex justify-center gap-2 mt-8">

          {beverageCategories.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir a bebida ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width:
                  current === index
                    ? "32px"
                    : "8px",
                backgroundColor:
                  current === index
                    ? "#B08D57"
                    : "#5f5545",
              }}
            />

          ))}

        </div>

        {/* CONTADOR */}

        <p
          className="text-center text-xs mt-4"
          style={{ color: "#8f856f" }}
        >
          {current + 1} / {beverageCategories.length}
        </p>

      </div>
    </section>
  );
}