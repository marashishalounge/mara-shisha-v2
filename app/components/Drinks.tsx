"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Drinks() {
  const { t } = useLanguage();

  const drinkCategories = [
    {
      title: t.drinks.ginebras,
      items: [
        ["Bombay Sapphire", "6�"],
        ["Beefeater", "6�"],
        ["Puerto de Indias", "6�"],
        ["Larios", "6�"],
        ["Seagrams", "8�"],
        ["Seagrams 0'0", "8�"],
      ],
    },
    {
      title: t.drinks.rones,
      items: [
        ["Barcel�", "6�"],
        ["Brugal", "6�"],
        ["Legendario", "6�"],
        ["Bacard�", "6�"],
        ["Cacique", "6�"],
        ["Negrita", "6�"],
      ],
    },
    {
      title: t.drinks.whisky,
      items: [
        ["Red Label", "6�"],
        ["Dewar's White Label", "6�"],
        ["Ballantines", "6�"],
        ["DYC", "6�"],
        ["J�germeister", "7�"],
        ["Jack Daniel's", "8�"],
        ["Black Label", "8�"],
        ["Chivas Regal", "8�"],
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === drinkCategories.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? drinkCategories.length - 1 : prev - 1
    );
  };

  const drink = drinkCategories[current];

  return (
    <section
      id="copas"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </span>

          <h2
  className="text-5xl font-bold mt-4 mb-6"
  style={{ color: "#B08D57" }}
>
  🍹 {t.drinks.titulo}
</h2>

          <p
            className="max-w-3xl mx-auto leading-8"
            style={{ color: "#d8c59a" }}
          >
            {t.drinks.subtitulo}
          </p>

        </div>

        <div className="relative max-w-xl mx-auto">

          <div
            className="
              rounded-3xl
              border
              border-[#B08D57]/40
              bg-zinc-950
              p-8
              md:p-10
              min-h-[430px]
              touch-pan-y
              select-none
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#B08D57" }}
            >
              {drink.title}
            </h3>

            <div className="space-y-4">

              {drink.items.map(([name, price]) => (

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

                  <span style={{ color: "#e6d8bb" }}>
                    {name}
                  </span>

                  <span
                    style={{ color: "#B08D57" }}
                    className="font-semibold"
                  >
                    {price}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <button
            type="button"
            onClick={previousSlide}
            aria-label={t.drinks.categoriaAnterior}
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

          <button
            type="button"
            onClick={nextSlide}
            aria-label={t.drinks.siguienteCategoria}
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

        <div className="flex justify-center gap-2 mt-8">

          {drinkCategories.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${t.drinks.irCategoria} ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: current === index ? "32px" : "8px",
                backgroundColor:
                  current === index ? "#B08D57" : "#5f5545",
              }}
            />

          ))}

        </div>

        <p
          className="text-center text-xs mt-4"
          style={{ color: "#8f856f" }}
        >
          {current + 1} / {drinkCategories.length}
        </p>

        <div
          className="
            mt-12
            text-center
            border-t
            border-[#B08D57]/30
            pt-8
          "
        >

          <p
            className="italic"
            style={{ color: "#d8c59a" }}
          >
            {t.drinks.energia}
          </p>

        </div>

      </div>
    </section>
  );
}

