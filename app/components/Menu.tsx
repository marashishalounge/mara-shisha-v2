"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  {
    id: "shishas",
    emoji: "🔥",
    title: "Shishas",
    description:
      "Sabores clásicos, premium y especiales preparados al momento.",
  },
  {
    id: "copas",
    emoji: "🍸",
    title: "Copas",
    description:
      "Ginebras, rones y whiskys seleccionados para acompañar cada experiencia.",
  },
  {
    id: "bebidas",
    emoji: "🥤",
    title: "Bebidas",
    description:
      "Refrescos, zumos, energéticas y bebidas calientes.",
  },
  {
    id: "cervezas",
    emoji: "🍺",
    title: "Cervezas",
    description:
      "De barril, nacionales e internacionales.",
  },
  {
    id: "ofertas",
    emoji: "✨",
    title: "Ofertas",
    description:
      "Promociones especiales para compartir shishas y cervezas.",
  },
  {
    id: "snacks",
    emoji: "🍟",
    title: "Snacks",
    description:
      "Aperitivos y platos para compartir en un ambiente relajado.",
  },
];

export default function Menu() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev >= menuItems.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return menuItems.length - 1;
      }

      return prev - 1;
    });
  };

  const item = menuItems[current];

  return (
    <section
      id="menu"
      className="bg-zinc-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#B08D57" }}
        >
          Nuestro Menú
        </h2>

        <p
          className="text-center mb-12"
          style={{ color: "#B08D57" }}
        >
          Descubre nuestra selección de shishas, copas,
          cervezas, bebidas y ofertas especiales.
        </p>

        {/* CARRUSEL */}

        <div className="relative max-w-xl mx-auto">

          {/* TARJETA */}

          <a
            href={`#${item.id}`}
            className={`
              block
              bg-black
              rounded-3xl
              p-10
              md:p-12
              text-center
              min-h-[330px]
              flex
              flex-col
              justify-center
              border
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#B08D57]
              ${
                item.id === "ofertas"
                  ? "border-2 border-[#B08D57]"
                  : "border-[#B08D57]/40"
              }
            `}
          >

            {/* EMOJI */}

            <div className="text-6xl mb-6">
              {item.emoji}
            </div>

            {/* TITULO */}

            <h3
              className="text-3xl font-semibold mb-5"
              style={{ color: "#B08D57" }}
            >
              {item.title}
            </h3>

            {/* DESCRIPCION */}

            <p
              className="leading-7 max-w-md mx-auto"
              style={{ color: "#B08D57" }}
            >
              {item.description}
            </p>

            {/* ENLACE */}

            <div
              className="mt-7 text-sm uppercase tracking-[3px]"
              style={{ color: "#8f856f" }}
            >
              Ver {item.title}
            </div>

          </a>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Anterior"
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
            aria-label="Siguiente"
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

        <div className="flex justify-center items-center gap-2 mt-8">

          {menuItems.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir a tarjeta ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: current === index ? "32px" : "8px",
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
          {current + 1} / {menuItems.length}
        </p>

      </div>
    </section>
  );
}