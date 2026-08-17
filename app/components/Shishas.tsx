
"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Shishas() {
  const { t } = useLanguage();

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

        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 md:mx-0 md:px-0 md:overflow-visible">

          {/* SHISHA NORMAL */}

          <div
            className="shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
          >
            <h3
              className="text-3xl font-bold text-center"
              style={{ color: "#B08D57" }}
            >
              ðŸ”¥ {t.shishas.normal}
            </h3>

            <div
              className="text-5xl font-bold text-center my-6"
              style={{ color: "#B08D57" }}
            >
              10 â‚¬
            </div>

            <div
              className="space-y-3 text-center"
              style={{ color: "#e6d8bb" }}
            >
              <p>âœ” {t.shishas.normalPreparacion}</p>
              <p>âœ” {t.shishas.normalBase}</p>
              <p>âœ” {t.shishas.normalCarbon}</p>
              <p>âœ” {t.shishas.normalSabores}</p>
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
            className="shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8"
          >
            <h3
              className="text-3xl font-bold text-center"
              style={{ color: "#B08D57" }}
            >
              ðŸ‘‘ {t.shishas.premium}
            </h3>

            <div
              className="text-5xl font-bold text-center my-6"
              style={{ color: "#B08D57" }}
            >
              18 â‚¬
            </div>

            <div
              className="space-y-3 text-center"
              style={{ color: "#e6d8bb" }}
            >
              <p>âœ” {t.shishas.premiumBase}</p>
              <p>âœ” {t.shishas.premiumCarbon}</p>
              <p>âœ” {t.shishas.premiumTabaco}</p>
              <p>âœ” {t.shishas.premiumPreparacion}</p>
              <p>âœ” {t.shishas.premiumFrutal}</p>
              <p>âœ” {t.shishas.premiumMezclas}</p>
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
    </section>
  );
}
