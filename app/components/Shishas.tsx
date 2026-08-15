
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

        <div className="grid gap-10 md:grid-cols-2">

          {/* SHISHA NORMAL */}

          <div
            className="rounded-3xl border border-[#B08D57]/40 bg-zinc-950 p-8"
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
            className="rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8"
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
    </section>
  );
}