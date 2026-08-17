"use client";

import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Shishas() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

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

        <div
          onScroll={(e) => {
            const container = e.currentTarget;
            const index = Math.round(
              container.scrollLeft / container.clientWidth
            );
            setCurrent(index);
          }}
          className="
            flex
            md:grid
            md:grid-cols-2
            gap-6
            md:gap-10
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-4
            -mx-2
            px-2
            md:mx-0
            md:px-0
            md:overflow-visible
            scrollbar-hide
          "
        >

          {/* SHISHA NORMAL */}

          <div
            className="
              shrink-0
              w-[85vw]
              md:w-auto
              snap-center
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

          {/* SHISHA PREMIUM */}

          <div
            className="
              shrink-0
              w-[85vw]
              md:w-auto
              snap-center
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

        {/* INDICADORES DE PÁGINA - SOLO MÓVIL */}

        <div className="flex md:hidden justify-center items-center gap-2 mt-5">

          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                const container = document.querySelector(
                  "#shishas .snap-x"
                ) as HTMLElement | null;

                if (container) {
                  container.scrollTo({
                    left: index * container.clientWidth,
                    behavior: "smooth",
                  });
                }

                setCurrent(index);
              }}
              aria-label={`Ver shisha ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: current === index ? "28px" : "8px",
                backgroundColor:
                  current === index ? "#B08D57" : "#5f5545",
              }}
            />
          ))}

        </div>

        {/* TEXTO INDICADOR */}

        <p
          className="md:hidden text-center text-xs mt-3"
          style={{ color: "#8f856f" }}
        >
          {current === 0 ? "Shisha Normal" : "Shisha Premium"}
        </p>

      </div>
    </section>
  );
}
