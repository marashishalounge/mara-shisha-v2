
"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";

const menuItems = [
  {
    id: "shishas",
    emoji: "🔥",
    key: "shishas",
  },
  {
    id: "copas",
    emoji: "🍹",
    key: "copas",
  },
  {
    id: "bebidas",
    emoji: "🍟",
    key: "bebidas",
  },
  {
    id: "cervezas",
    emoji: "🎉",
    key: "cervezas",
  },
  {
    id: "ofertas",
    emoji: "?",
    key: "ofertas",
  },
  {
    id: "snacks",
    emoji: "⭐",
    key: "snacks",
  },
] as const;

export default function Menu() {
  const [current, setCurrent] = useState(0);

  const { t, language } = useLanguage();

  const item = menuItems[current];

  const itemText = t.menu.items[item.key];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= menuItems.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev <= 0
        ? menuItems.length - 1
        : prev - 1
    );
  };

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
          {t.menu.titulo}
        </h2>

        {/* DESCRIPCION */}

        <p
          className="text-center mb-12"
          style={{ color: "#B08D57" }}
        >
          {t.menu.subtitulo}
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
              {itemText.title}
            </h3>

            {/* DESCRIPCION */}

            <p
              className="leading-7 max-w-md mx-auto"
              style={{ color: "#B08D57" }}
            >
              {itemText.description}
            </p>

            {/* ENLACE */}

            <div
              className="mt-7 text-sm uppercase tracking-[3px]"
              style={{ color: "#8f856f" }}
            >
              {itemText.link}
            </div>

          </a>

          {/* FLECHA IZQUIERDA */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label={
              language === "en"
                ? "Previous"
                : "Anterior"
            }
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
            style={{ color: "#B08D57" }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* FLECHA DERECHA */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label={
              language === "en"
                ? "Next"
                : "Siguiente"
            }
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
            style={{ color: "#B08D57" }}
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
              aria-label={
                language === "en"
                  ? `Go to card ${index + 1}`
                  : `Ir a tarjeta ${index + 1}`
              }
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
          {current + 1} / {menuItems.length}
        </p>

      </div>
    </section>
  );
}


