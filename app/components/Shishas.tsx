"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Shishas() {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 1 : prev - 1));
  };

  return (
    <section
      id="shishas"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span
            className="uppercase tracking-[5px] text-sm"
            style={{ color: "#B08D57" }}
          >
            Mara Shisha Lounge
          </span>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ color: "#B08D57" }}
          >
            {t.shishas.titulo}
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto leading-8"
            style={{ color: "#d8c59a" }}
          >
            {t.shishas.descripcion}
          </p>

        </div>

        <div className="relative max-w-xl mx-auto">

          {/* CARRUSEL */}

          <div className="overflow-hidden">

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >

              {/* SHISHA NORMAL */}

              <div className="min-w-full px-1">

                <div
                  className="
                    rounded-3xl
                    border
                    border-[#B08D57]/40
                    bg-zinc-950
                    p-8
                  "
                >

                  <h3
                    className="text-3xl font-bold text-center"
                    style={{ color: "#B08D57" }}
                  >
                    🔥 {t.shishas.normal}
                  </h3>

                  <div
                    className="text-5xl font-bold text-center my-6"
                    style={{ color: "#B08D57" }}
                  >
                    10 €
                  </div>

                  <div
                    className="space-y-3 text-center"
                    style={{ color: "#e6d8bb" }}
                  >
                    <p>✔ {t.shishas.normalPreparacion}</p>
                    <p>✔ {t.shishas.normalBase}</p>
                    <p>✔ {t.shishas.normalCarbon}</p>
                    <p>✔ {t.shishas.normalSabores}</p>
                  </div>

                  <div
                    className="mt-10 border-t border-[#B08D57]/30 pt-6 text-center italic"
                    style={{ color: "#c7b287" }}
                  >
                    {t.shishas.normalDescripcion}
                  </div>

                </div>

              </div>

              {/* SHISHA PREMIUM */}

              <div className="min-w-full px-1">

                <div
                  className="
                    rounded-3xl
                    border-2
                    border-[#B08D57]
                    bg-zinc-950
                    p-8
                  "
                >

                  <h3
                    className="text-3xl font-bold text-center"
                    style={{ color: "#B08D57" }}
                  >
                    👑 {t.shishas.premium}
                  </h3>

                  <div
                    className="text-5xl font-bold text-center my-6"
                    style={{ color: "#B08D57" }}
                  >
                    18 €
                  </div>

                  <div
                    className="space-y-3 text-center"
                    style={{ color: "#e6d8bb" }}
                  >
                    <p>✔ {t.shishas.premiumBase}</p>
                    <p>✔ {t.shishas.premiumCarbon}</p>
                    <p>✔ {t.shishas.premiumTabaco}</p>
                    <p>✔ {t.shishas.premiumPreparacion}</p>
                    <p>✔ {t.shishas.premiumFrutal}</p>
                    <p>✔ {t.shishas.premiumMezclas}</p>
                  </div>

                  <div
                    className="mt-10 rounded-2xl border border-[#B08D57]/40 p-6 text-center"
                  >

                    <h4
                      className="text-xl font-semibold mb-3"
                      style={{ color: "#B08D57" }}
                    >
                      {t.shishas.experienciaPremium}
                    </h4>

                    <p
                      className="leading-7"
                      style={{ color: "#d8c59a" }}
                    >
                      {t.shishas.premiumDescripcion}
                    </p>

                  </div>

                  <div
                    className="mt-10 border-t border-[#B08D57]/30 pt-6 text-center italic"
                    style={{ color: "#c7b287" }}
                  >
                    {t.shishas.premiumFinal}
                  </div>

                </div>

              </div>

            </div>

          </div>

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

          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={
                language === "en"
                  ? `Go to shisha ${index + 1}`
                  : `Ir a shisha ${index + 1}`
              }
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: current === index ? "32px" : "8px",
                backgroundColor:
                  current === index ? "#B08D57" : "#5f5545",
              }}
            />
          ))}

        </div>

        {/* CONTADOR */}

        <p
          className="text-center text-xs mt-4"
          style={{ color: "#8f856f" }}
        >
          {current + 1} / 2
        </p>

      </div>
    </section>
  );
}
