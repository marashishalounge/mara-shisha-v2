"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Offers() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="ofertas"
      className="bg-black py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITULO */}

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
            {isEnglish
              ? "âœ¨ Special offers to share"
              : "âœ¨ Ofertas ideales para compartir"}
          </h2>

          <p
            className="mt-5 max-w-3xl mx-auto leading-8"
            style={{ color: "#d8c59a" }}
          >
            {isEnglish
              ? "Special moments to enjoy together, with our best Mara combinations."
              : "Momentos especiales para disfrutar acompaÃ±ado, con nuestras mejores combinaciones Mara."}
          </p>

        </div>

        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 md:mx-0 md:px-0 md:overflow-visible">

          {/* SHISHAS */}

          <div
            className="shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8 text-center shadow-lg"
          >

            <div className="text-6xl mb-5">
              ðŸ”¥
            </div>

            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#B08D57" }}
            >
              {isEnglish
                ? "Shishas to share"
                : "Shishas para compartir"}
            </h3>

            <div
              className="text-6xl font-bold mb-6"
              style={{ color: "#B08D57" }}
            >
              2 x 15â‚¬
            </div>

            <p
              className="leading-8 italic"
              style={{ color: "#d8c59a" }}
            >
              {isEnglish
                ? "Two classic shishas to enjoy your favourite flavours with whoever you want."
                : "Dos shishas clÃ¡sicas para disfrutar de tus sabores favoritos junto a quien quieras."}
            </p>

          </div>

          {/* CERVEZAS */}

          <div
            className="shrink-0 w-[85vw] md:w-auto snap-center rounded-3xl border-2 border-[#B08D57] bg-zinc-950 p-8"
          >

            <div className="text-6xl text-center mb-5">
              ðŸº
            </div>

            <h3
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#B08D57" }}
            >
              {isEnglish
                ? "Beers to share"
                : "Cervezas para compartir"}
            </h3>

            <div className="space-y-5">

              <div
                className="flex justify-between items-center border-b border-[#B08D57]/30 pb-3"
              >

                <span
                  className="text-xl"
                  style={{ color: "#e6d8bb" }}
                >
                  ðŸº {isEnglish ? "Heineken Beer Bucket" : "Cubo Heineken"}
                </span>

                <span
                  className="text-2xl font-bold"
                  style={{ color: "#B08D57" }}
                >
                  15â‚¬
                </span>

              </div>

              <div
                className="flex justify-between items-center border-b border-[#B08D57]/30 pb-3"
              >

                <span
                  className="text-xl"
                  style={{ color: "#e6d8bb" }}
                >
                  ðŸº {isEnglish ? "Corona Beer Bucket" : "Cubo Corona"}
                </span>

                <span
                  className="text-2xl font-bold"
                  style={{ color: "#B08D57" }}
                >
                  15â‚¬
                </span>

              </div>

              <div
                className="flex justify-between items-center"
              >

                <span
                  className="text-xl"
                  style={{ color: "#e6d8bb" }}
                >
                  ðŸº{" "}
                  {isEnglish
                    ? "Estrella Galicia Beer Bucket (5 bottles)"
                    : "Cubo Estrella Galicia (5 quintos)"}
                </span>

                <span
                  className="text-2xl font-bold"
                  style={{ color: "#B08D57" }}
                >
                  8,50â‚¬
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* PIE MARA */}

        <div
          className="mt-16 text-center border-t border-[#B08D57]/30 pt-8 italic"
          style={{ color: "#c7b287" }}
        >
          {isEnglish
            ? "Share the moment, enjoy the experience."
            : "Comparte el momento, disfruta la experiencia."}
          <br />
          Mara Shisha Lounge
        </div>

      </div>

    </section>
  );
}
