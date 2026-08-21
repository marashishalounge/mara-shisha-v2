"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Beverages() {
  const { t } = useLanguage();

  const [current, setCurrent] = useState(0);

  const beverageCategories = [
        {
      id: "frias",
      emoji: "🧊",
      title: t.beverages.frias,
      items: [
        [`🥤 ${t.beverages.cola}`, "2,50 €"],
        [`🧋 ${t.beverages.nestea}`, "2,50 €"],
        [`🥤 ${t.beverages.aquarius}`, "2,50 €"],
        [`🧃 ${t.beverages.zumos}`, "2,50 €"],
        [`💧 ${t.beverages.aguaGas}`, "2,50 €"],
        [`💧 ${t.beverages.agua}`, "2,00 €"],
        [`⚡ ${t.beverages.energeticas}`, "3,00 €"],
      ],
    
    },
    {
      id: "calientes",
     emoji: "☕",
      title: t.beverages.calientes,
      items: [
        [`🍵 ${t.beverages.teVerdeMoruno}`, "1,80 €"],
        [`🍓 ${t.beverages.teRojoFrutas}`, "1,80 €"],
        [`❤️ ${t.beverages.teRooibos}`, "1,80 €"],
        [`🌿 ${t.beverages.poleoMenta}`, "1,80 €"],
        [`🍃 ${t.beverages.teVerdeHierbabuena}`, "1,80 €"],
      ],
    },
  ];

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
            🥤 {t.beverages.titulo}
          </h2>

          <p className="text-zinc-400 text-lg">
            {t.beverages.subtitulo}
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
              touch-pan-y
              select-none
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            {/* CABECERA */}

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
            aria-label={t.beverages.anterior}
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
            aria-label={t.beverages.siguiente}
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
              aria-label={`${t.beverages.irCategoria} ${index + 1}`}
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